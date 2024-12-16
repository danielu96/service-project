import type { PropertyCardProps } from '@/utils/types';
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
    const properties: PropertyCardProps[] = await fetchProperties(
        {
            category,
            search
        }
    );
    if (properties.length === 0)
        return (
            <EmptyList />
        )
    return (
        <div className='container'>

            <ProductList properties={properties} />
            <AboutUs />
        </div>
    )
}

export default ProductContainer