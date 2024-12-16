import BreadCrumbs from '@/components/properties/BreadCrumbs';
import { fetchPropertyDetails } from '@/utils/actions';
import ImageContainer from '@/components/properties/ImageContainer';
import { redirect } from 'next/navigation';
import Description from '@/components/properties/Description';

async function DetailsPage({ params }: { params: { id: string } }) {

  const property = await fetchPropertyDetails(params.id);
  if (!property) redirect('/');

  return (
    <section>
      <BreadCrumbs name={property.name} />
      <section className='blaty h-[300px] md:h-[500px] relative mt-8' >
        <ImageContainer mainImage={property.image} name={property.name} />

        <div className=' grid-flow-row z-0  mx-6'>
          <h1 className=' text-black mt-6  xl:mt-12 mb-7 text-5xl font-extrabold capitalize '>{property.name}</h1>
          <Description description={property.description} />
          <p className=' text-pretty text-xs text-end mt-14'>- Welcome -</p>
        </div>
      </section>
    </section >
  );
}

export default DetailsPage;



