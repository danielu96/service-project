'use server';


import db from './db';
import { clerkClient } from '@clerk/clerk-sdk-node';
import { auth, currentUser } from '@clerk/nextjs/server';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import {
    imageSchema, profileSchema, validateWithZodSchema,
    propertySchema, createReviewSchema,
} from './schemas';
import { uploadImage } from './supabase';
// import { calculateTotals } from './calculateTotals';
// import { formatDate } from './format';

export const createProfileAction = async (
    prevState: any,
    formData: FormData
) => {
    try {
        const user = await currentUser();
        if (!user) throw new Error('Please login to create a profile');

        const rawData = Object.fromEntries(formData);
        const validatedFields = validateWithZodSchema(profileSchema, rawData);

        await db.profile.create({
            data: {
                clerkId: user.id,
                email: user.emailAddresses[0].emailAddress,
                profileImage: user.imageUrl ?? '',
                ...validatedFields,
            },
        });
        await clerkClient.users.updateUserMetadata(user.id, {
            privateMetadata: {
                hasProfile: true,
            },
        });
    } catch (error) {
        return renderError(error);
    }
    redirect('/');
};

export const fetchProfileImage = async () => {
    const user = await currentUser();
    if (!user) return null;

    const profile = await db.profile.findUnique({
        where: {
            clerkId: user.id,
        },
        select: {
            profileImage: true,
        },
    });
    return profile?.profileImage;
};
const getAuthUser = async () => {
    const user = await currentUser();
    if (!user) {
        throw new Error('You must be logged in to access this route');
    }
    if (!user.privateMetadata.hasProfile) redirect('/profile/create');
    return user;
};
export const fetchProfile = async () => {
    const user = await getAuthUser();

    const profile = await db.profile.findUnique({
        where: {
            clerkId: user.id,
        },
    });
    if (!profile) return redirect('/profile/create');
    return profile;
};


const renderError = (error: unknown): { message: string } => {
    console.log(error);
    return {
        message: error instanceof Error ? error.message : 'An error occurred',
    };
};
export const updateProfileAction = async (
    prevState: any,
    formData: FormData
): Promise<{ message: string }> => {
    const user = await getAuthUser();
    try {
        const rawData = Object.fromEntries(formData);

        // const validatedFields = profileSchema.safeParse(rawData);
        const validatedFields = validateWithZodSchema(profileSchema, rawData);
        // if (!validatedFields.success) {
        //     const errors = validatedFields.error.errors.map((error) => error.message);
        //     throw new Error(errors.join(','));
        // }

        await db.profile.update({
            where: {
                clerkId: user.id,
            },
            data: validatedFields,
        });
        revalidatePath('/profile');
        return { message: 'Profile updated successfully' };
    } catch (error) {
        return renderError(error);
    }
};

export const updateProfileImageAction = async (
    prevState: any,
    formData: FormData
) => {
    const user = await getAuthUser();
    try {
        const image = formData.get('image') as File;
        const validatedFields = validateWithZodSchema(imageSchema, { image });
        const fullPath = await uploadImage(validatedFields.image);

        await db.profile.update({
            where: {
                clerkId: user.id,
            },
            data: {
                profileImage: fullPath,
            },
        });
        revalidatePath('/profile');
        return { message: 'Profile image updated successfully' };
    } catch (error) {
        return renderError(error);
    }
};
export const createPropertyAction = async (
    prevState: any,
    formData: FormData
): Promise<{ message: string }> => {
    const user = await getAuthUser();
    try {
        const rawData = Object.fromEntries(formData);
        const file = formData.get('image') as File;

        const validatedFields = validateWithZodSchema(propertySchema, rawData);
        const validatedFile = validateWithZodSchema(imageSchema, { image: file });
        const fullPath = await uploadImage(validatedFile.image);

        await db.property.create({
            data: {
                ...validatedFields,
                image: fullPath,
                profileId: user.id,
            },
        });
    } catch (error) {
        return renderError(error);
    }
    redirect('/');
};


export const fetchProperties = async ({
    search = '',
    category,
}: {
    search?: string;
    category?: string;
}) => {
    const properties = await db.property.findMany({
        where: {
            category,
            OR: [
                { name: { contains: search, mode: 'insensitive' } },
                { tagline: { contains: search, mode: 'insensitive' } },
            ],
        },
        select: {
            id: true,
            name: true,
            tagline: true,
            image: true,
        },
        orderBy: {
            createdAt: 'desc',
        },
    });
    return properties;
};
export const fetchPropertyDetails = (id: string) => {
    return db.property.findUnique({
        where: {
            id,
        },
        // include: {
        //     profile: true,
        //     bookings: {
        //         select: {
        //             checkIn: true,
        //             checkOut: true,
        //         },
        //     },
        // },
    });
};
const getAdminUser = async () => {
    const user = await getAuthUser();
    if (user.id !== process.env.ADMIN_USER_ID) redirect('/');
    return user;
};
export const updatePropertyAction = async (
    prevState: any,
    formData: FormData
): Promise<{ message: string }> => {
    const user = await getAuthUser();
    const propertyId = formData.get('id') as string;

    try {
        const rawData = Object.fromEntries(formData);
        const validatedFields = validateWithZodSchema(propertySchema, rawData);
        await db.property.update({
            where: {
                id: propertyId,
                profileId: user.id,
            },
            data: {
                ...validatedFields,
            },
        });

        revalidatePath(`/admin/${propertyId}/edit`);
        return { message: 'Update Successful' };
    } catch (error) {
        return renderError(error);
    }
};
export const fetchProposals = async () => {
    const user = await getAuthUser();
    const proposals = await db.property.findMany({
        where: {
            profileId: user.id,
        },
        select: {
            id: true,
            name: true,
            // price: true,
        },
    });

    return proposals;
};



export async function deleteProposalAction(prevState: { propertyId: string }) {
    const { propertyId } = prevState;
    const user = await getAuthUser();

    try {
        await db.property.delete({
            where: {
                id: propertyId,
                profileId: user.id,
            },
        });

        revalidatePath('/admin');
        return { message: 'Proposal deleted successfully' };
    } catch (error) {
        return renderError(error);
    }
}
export const fetchProposalDetails = async (propertyId: string) => {
    const user = await getAuthUser();

    return db.property.findUnique({
        where: {
            id: propertyId,
            profileId: user.id,
        },
    });
};
export const updatePropertyImageAction = async (
    prevState: any,
    formData: FormData
): Promise<{ message: string }> => {
    const user = await getAuthUser();
    const propertyId = formData.get('id') as string;

    try {
        const image = formData.get('image') as File;
        const validatedFields = validateWithZodSchema(imageSchema, { image });
        const fullPath = await uploadImage(validatedFields.image);

        await db.property.update({
            where: {
                id: propertyId,
                profileId: user.id,
            },
            data: {
                image: fullPath,
            },
        });
        revalidatePath(`/rentals/${propertyId}/edit`);
        return { message: 'Property Image Updated Successful' };
    } catch (error) {
        return renderError(error);
    }
};
export const fetchFavoriteId = async ({
    propertyId,
}: {
    propertyId: string;
}) => {
    const user = await getAuthUser();
    const favorite = await db.favorite.findFirst({
        where: {
            propertyId,
            profileId: user.id,
        },
        select: {
            id: true,
        },
    });
    return favorite?.id || null;
};

export const toggleFavoriteAction = async (prevState: {
    propertyId: string;
    favoriteId: string | null;
    pathname: string;
}) => {
    const user = await getAuthUser();
    const { propertyId, favoriteId, pathname } = prevState;
    try {
        if (favoriteId) {
            await db.favorite.delete({
                where: {
                    id: favoriteId,
                },
            });
        } else {
            await db.favorite.create({
                data: {
                    propertyId,
                    profileId: user.id,
                },
            });
        }
        revalidatePath(pathname);
        return { message: favoriteId ? 'Removed from Faves' : 'Added to Faves' };
    } catch (error) {
        return renderError(error);
    }
};

export const fetchFavorites = async () => {
    const user = await getAuthUser();
    const favorites = await db.favorite.findMany({
        where: {
            profileId: user.id,
        },
        select: {
            property: {
                select: {
                    id: true,
                    name: true,
                    tagline: true,
                    image: true,
                },
            },
        },
    });
    return favorites.map((favorite) => favorite.property);
};

export async function createReviewAction(prevState: any, formData: FormData) {
    const user = await getAuthUser();
    try {
        const rawData = Object.fromEntries(formData);

        const validatedFields = validateWithZodSchema(createReviewSchema, rawData);

        await db.review.create({
            data: {
                ...validatedFields,
                profileId: user.id,
            },
        });
        revalidatePath(`/properties/${validatedFields.propertyId}`);
        return { message: 'Review submitted successfully' };
    } catch (error) {
        return renderError(error);
    }
}

export async function fetchPropertyReviews(propertyId: string) {
    const reviews = await db.review.findMany({
        where: {
            propertyId,
        },
        select: {
            id: true,
            rating: true,
            comment: true,
            profile: {
                select: {
                    firstName: true,
                    profileImage: true,
                },
            },
        },
        orderBy: {
            createdAt: 'desc',
        },
    });
    return reviews;
}

export const fetchPropertyReviewsByUser = async () => {
    const user = await getAuthUser();
    const reviews = await db.review.findMany({
        where: {
            profileId: user.id,
        },
        select: {
            id: true,
            rating: true,
            comment: true,
            property: {
                select: {
                    name: true,
                    image: true,
                },
            },
        },
    });
    return reviews;
};

export const deleteReviewAction = async (prevState: { reviewId: string }) => {
    const { reviewId } = prevState;
    const user = await getAuthUser();

    try {
        await db.review.delete({
            where: {
                id: reviewId,
                profileId: user.id,
            },
        });

        revalidatePath('/reviews');
        return { message: 'Review deleted successfully' };
    } catch (error) {
        return renderError(error);
    }
};
export const findExistingReview = async (
    userId: string,
    propertyId: string
) => {
    return db.review.findFirst({
        where: {
            profileId: userId,
            propertyId: propertyId,
        },
    });
};
export async function fetchPropertyRating(propertyId: string) {
    const result = await db.review.groupBy({
        by: ['propertyId'],
        _avg: {
            rating: true,
        },
        _count: {
            rating: true,
        },
        where: {
            propertyId,
        },
    });

    // empty array if no reviews
    return {
        rating: result[0]?._avg.rating?.toFixed(1) ?? 0,
        count: result[0]?._count.rating ?? 0,
    };
}