import BreadCrumbs from '@/components/properties/BreadCrumbs';
import { fetchProposalDetails } from '@/utils/actions';
import ImageContainer from '@/components/properties/ImageContainer';
import { redirect } from 'next/navigation';
import Description from '@/components/properties/Description';
import SubmitReview from '@/components/reviews/SubmitReview';
import PropertyReviews from '@/components/reviews/PropertyReviews';
import { findExistingReview } from '@/utils/actions';
import { auth } from '@clerk/nextjs/server';
import FavoriteToggleButton from '@/components/card/FavoriteToggleButton';
import { Separator } from '@radix-ui/react-dropdown-menu';
import { Calendar } from '@/components/ui/calendar';
import PropertyRating from '@/components/card/PropertyRating';

async function DetailsPage({ params }: { params: { id: string } }) {

  const property = await fetchProposalDetails(params.id);
  if (!property) redirect('/');
  const { userId } = await auth();
  const isNotOwner = property.profile?.clerkId !== userId;
  const reviewDoesNotExist =
    userId && isNotOwner && !(await findExistingReview(userId, property.id));

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
          <Description description={property.description} />

        </div>
        <div className='lg:col-span-4 flex flex-col items-center'>
          <Calendar />

        </div>
      </section>
      {reviewDoesNotExist && <SubmitReview propertyId={property.id} />}
      <PropertyReviews propertyId={property.id} />
    </section>


    // <section>
    //   <BreadCrumbs name={property.name} />
    //   <section className='lg:grid lg:grid-cols-12 gap-x-12 mt-12' >
    //     <ImageContainer mainImage={property.image} name={property.name} />

    //     <div className=' grid-flow-row z-0  mx-6'>
    //       <h1 className=' text-black mt-6  xl:mt-12 mb-7 text-5xl font-extrabold capitalize '>{property.name}</h1>
    //       <Description description={property.description} />
    //       <p className=' text-pretty text-xs text-end mt-14'>- Welcome -</p>
    //     </div>
    //     <SubmitReview propertyId={property.id} />

    //     {/* <Calendar /> */}
    //   </section>
    //   {reviewDoesNotExist && <SubmitReview propertyId={property.id} />}
    //   <PropertyReviews propertyId={property.id} />
    // </section >

  );
}

export default DetailsPage;



