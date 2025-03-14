// import type { PropertyCardProps } from '@/utils/types';
// import React from 'react'
// // import ProductList from './ProductList';
// import { fetchProperties } from '@/utils/actions';
// import EmptyList from './EmptyList';
// import AboutUs from './AboutUs';

// async function ProductContainer(
//     {
//         category,
//         search,
//     }: {
//         category?: string;
//         search?: string;
//     }
// ) {
//     const properties: PropertyCardProps[] = await fetchProperties(
//         {
//             category,
//             search
//         }
//     );
//     if (properties.length === 0)
//         return (
//             <EmptyList />
//         )
//     return (
//         <div className='container'>
//             {/* <ProductList properties={properties} /> */}
//             <div>It wil be</div>
//             <AboutUs />
//         </div>
//     )
// }

// export default ProductContainer

import { fetchProperties } from '@/utils/actions';
import ProductList from './ProductList';
import EmptyList from './EmptyList';
import type { PropertyCardProps } from '@/utils/types';

async function ProductContainer({
    category,
    search,
}: {
    category?: string;
    search?: string;
}) {
    const properties: PropertyCardProps[] = await fetchProperties({
        category,
        search,
    });
    if (properties.length === 0) {
        return (
            <EmptyList
                heading='No results.'
                message='Try changing or removing some of your filters.'
                btnText='Clear Filters'
            />
        );
    }

    return <ProductList properties={properties} />;
}
export default ProductContainer;