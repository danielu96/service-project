import BreadCrumbs from '@/components/properties/BreadCrumbs';
import { fetchProposalDetails } from '@/utils/actions';
import ImageContainer from '@/components/properties/ImageContainer';
import PropertyDetails from '@/components/properties/PropertyDetails';
import { redirect } from 'next/navigation';
import dynamic from 'next/dynamic';
import Description from '@/components/properties/Description';
import SubmitReview from '@/components/reviews/SubmitReview';
import PropertyReviews from '@/components/reviews/PropertyReviews';
import { findExistingReview } from '@/utils/actions';
import { Skeleton } from '@/components/ui/skeleton';
import { auth } from '@clerk/nextjs/server';
import FavoriteToggleButton from '@/components/card/FavoriteToggleButton';
import { Separator } from '@radix-ui/react-dropdown-menu';
import PropertyRating from '@/components/card/PropertyRating';

const DynamicBookingWrapper = dynamic(
  () => import('@/components/booking/BookingWrapper'),
  {
    ssr: false,
    loading: () => <Skeleton className='h-[200px] w-full' />,
  }
);


async function DetailsPage({ params }: { params: { id: string } }) {

  const property = await fetchProposalDetails(params.id);
  if (!property) redirect('/');
  const { userId } = await auth();
  const isNotOwner = property.profile?.clerkId !== userId;
  const reviewDoesNotExist =
    userId && isNotOwner && !(await findExistingReview(userId, property.id));
  const { baths, bedrooms, beds, guests } = property;
  const details = { baths, bedrooms, beds, guests };

  return (
    <section>
      <BreadCrumbs name={property.name} />
      <header className='flex justify-between items-center mt-4'>
        <h1 className='text-4xl font-bold capitalize'>{property.tagline}</h1>
        <div className='flex items-center gap-x-4'>


          <FavoriteToggleButton propertyId={property.id} />
        </div>
      </header>
      <ImageContainer mainImage={property.image} name={property.name} />
      <section className='lg:grid lg:grid-cols-12 gap-x-12 mt-12'>
        <div className='lg:col-span-8'>
          <div className='flex gap-x-4 items-center'>
            <h1 className='text-xl font-bold'>{property.name} </h1>
            <PropertyRating inPage propertyId={property.id} />
          </div>

          <Separator className='mt-4' />
          <PropertyDetails details={details} />
          <Description description={property.description} />

        </div>
        <div className='lg:col-span-4 flex flex-col items-center'>

          <DynamicBookingWrapper
            propertyId={property.id}
            price={property.price}
            bookings={property.bookings}
          />
        </div>
      </section>
      {reviewDoesNotExist && <SubmitReview propertyId={property.id} />}
      <PropertyReviews propertyId={property.id} />
    </section>


  );
}

export default DetailsPage;



