import React from 'react'
import type { ProductCardProps } from '@/utils/types';
import ProductCard from '../card/ProductCard';

function ProductList({ products }: { products: ProductCardProps[] }) {
    return (
        <section className='mt-4 gap-24 grid sm:grid-cols-2  lg:grid-cols-3  xl:grid-cols-3'>
            {products.map((product) => {
                return (
                    <ProductCard key={product.id} product={product}></ProductCard>
                )
            })}

        </section>
    )
}
export default ProductList