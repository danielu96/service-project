import React from 'react'
import type { ProductCardProps } from '@/utils/types';
import ProductCard from '../card/ProductCard';

function ProductList({ properties }: { properties: ProductCardProps[] }) {
    return (
        <section className='mt-8 gap-y-10 grid sm:grid-cols-2  lg:grid-cols-3  xl:grid-cols-3'>
            {properties.map((property) => {
                return (
                    <ProductCard key={property.id} property={property}></ProductCard>
                )
            })}

        </section>
    )
}
export default ProductList