import React from 'react'
import type { ProductCardProps } from '@/utils/types';
import ProductCard from '../card/ProductCard';

function ProductList({ products }: { products: ProductCardProps[] }) {
    return (
        <section className='my-5 mx-8'>
            {products.map((product) => {
                return (
                    <ProductCard key={product.id} product={product}></ProductCard>
                )
            })}

        </section>
    )
}
export default ProductList