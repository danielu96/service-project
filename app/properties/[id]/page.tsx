import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import BreadCrumbs from '@/components/properties/BreadCrumbs';
import { fetchPropertyDetails } from '@/utils/actions';

async function DetailsPage() {
  const router = useRouter();
  const { id } = router.query;
  const [product, setProduct] = useState(null);
  const property = await fetchPropertyDetails(params.id);

  useEffect(() => {
    const fetchProduct = async () => {
      const   
 response = await fetch(`/api/products/${id}`);
      const   
 data = await response.json();
      setProduct(data);
    };

    if (id) {
      fetchProduct();
    }
  }, [id]);

  return (
    <div>
      {product ? (
        <div>
          <h2>{product.name}</h2>
          <p>{product.description}</p>
        </div>
      ) : (
        <p>Ładowanie...</p>
      )}
    </div>
  );
}

export default DetailsPage;





// import React from 'react'
// import { fetchPropertyDetails } from '@/utils/actions';
// import { redirect } from 'next/navigation';
// import BreadCrumbs from '@/components/properties/BreadCrumbs';
// import ImageContainer from '@/components/properties/ImageContainer';
// import Footer from '@/components/footer/Footer';
// import { Separator } from '@/components/ui/separator';
// import products from '@/db/products.json'

// export async function generateStaticParams() {

//     return products.map((id) => ({ params: { id } }));
// };

// async function DetailsPage({ params }: { params: { id: string } }) {
//     const property = await fetchPropertyDetails(params.id);

//     if (!property) redirect('/');
//     return (<>
//         <section className='max-w-screen-xl mx-auto'>
//             <BreadCrumbs name={property.name} />
//             <div className='grid md:grid-cols-2 mx-auto my-5 max-w-screen-xl'>

//                 <div className=' max-w-screen-lg z-auto grid grid-cols-1 space-x-4'>
//                     <ImageContainer mainImage={property.image} name={property.name} />
//                 </div>
//                 <div className=' grid-flow-row justify-between z-0   my-auto mx-6'>
//                     <h1 className='bagart text-black mt-4 md:-ml-24 md:mt-8 mb-7 text-5xl font-extrabold capitalize '>{property.name}</h1>
//                     <p className=' text-xl md:ml-20 my-14'>{property.tagline.substring(0, 290)} ...</p>
//                     <p className=' text-pretty text-xs text-end mt-14'>- company -</p>
//                 </div>
//             </div>
//         </section>
//         <Separator />
//         <Footer />
//     </>
//     )
// }

// export default DetailsPage


// export async function getServerSideProps({ query }) {
//     const { id } = query;
//     const res = await fetch(`https://api.example.com/products/${id}`);
//     const product = await res.json();
  
//     return {
//       props: {
//         product,
//       },
//     };
//   }
  
//   function ProductPage({ product }) {
//     // ... reszta komponentu
//   }
  
//   export default ProductPage;