import type { ProductCardProps } from '@/utils/types';
import React from 'react'
import ProductList from './ProductList';
import { fetchProperties } from '@/utils/actions';
import EmptyList from './EmptyList';
import AboutUs from './AboutUs';

async function ProductContainer(
    {
        category,
        search,
    }: {
        category?: string;
        search?: string;
    }
) {
    const products: ProductCardProps[] = await fetchProperties(
        {
            category,
            search
        }
    );
    if (products.length === 0)
        return (
            <EmptyList />
        )
    return (
        <div className='container'>

            <ProductList products={products} />
            <AboutUs />
        </div>
    )
}

export default ProductContainer