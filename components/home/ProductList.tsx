import React from 'react'
import type { PropertyCardProps } from '@/utils/types';
// import ProductCard from '../card/ProductCard';

function ProductList({ properties }: { properties: PropertyCardProps[] }) {
    return (
        <section className='mt-8 gap-y-10 grid sm:grid-cols-2  lg:grid-cols-3  xl:grid-cols-3'>
            {properties.map((property) => {
                return (
                    // <ProductCard key={property.id} property={property}></ProductCard>
                    <div key={property.id}>{property.name}</div>
                )
            })}

        </section>
    )
}
export default ProductList

// import React from 'react'
// import type { PropertyCardProps } from '@/utils/types';
// import ProductCard from '../card/ProductCard';

// function ProductList({ properties }: { properties: PropertyCardProps[] }) {
//     console.log("Properties received:", properties); // Dodane console.log
//     if (!properties) {
//         console.log("properties is null or undefined");
//         return (<div> properties are missing </div>);
//     }
//     return (
//         <section className='mt-8 gap-y-10 grid sm:grid-cols-2  lg:grid-cols-3  xl:grid-cols-3'>
//             {properties.map((property) => {
//                 console.log("Processing property:", property);
//                 return (
//                     <div key={property.id}>{property.name}</div>
//                 )
//             })}
//         </section>
//     )
// }
// export default ProductList