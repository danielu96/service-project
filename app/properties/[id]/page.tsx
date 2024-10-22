import React from 'react'
import { fetchPropertyDetails } from '@/utils/actions';
import { redirect } from 'next/navigation';
import BreadCrumbs from '@/components/properties/BreadCrumbs';
import ImageContainer from '@/components/properties/ImageContainer';
import Footer from '@/components/footer/Footer';
import { Separator } from '@/components/ui/separator';

async function DetailsPage({ params }: { params: { id: string } }) {
    const property = await fetchPropertyDetails(params.id);

    if (!property) redirect('/');
    return (<>
        <section className='max-w-screen-xl mx-auto'>
            <BreadCrumbs name={property.name} />
            <div className='grid md:grid-cols-2 mx-auto my-5 max-w-screen-xl'>

                <div className=' max-w-screen-lg z-auto grid grid-cols-1 space-x-4'>
                    <ImageContainer mainImage={property.image} name={property.name} />
                    {/* <div >  <ImageContainer mainImage={property.image} name={property.name} /></div>
                    <div >  <ImageContainer mainImage={property.image} name={property.name} /></div> */}
                </div>
                <div className=' grid-flow-row justify-between z-0   my-auto mx-6'>
                    <h1 className='bagart text-black mt-4 md:-ml-24 md:mt-8 mb-7 text-5xl font-extrabold capitalize '>{property.name}</h1>
                    <p className=' text-xl md:ml-20 my-14'>{property.tagline.substring(0, 290)} ...</p>
                    <p className=' text-pretty text-xs text-end mt-14'>- company -</p>
                </div>
            </div>
        </section>
        <Separator />
        <Footer />
    </>
    )
}

export default DetailsPage