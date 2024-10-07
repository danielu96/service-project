import React from 'react'
import { ProductCardProps } from '@/utils/types'

const ProductCard = ({ product }: { product: ProductCardProps }) => {
    const { name, image } = product;
    const { id: propertyId, tagline } = product;
    return (
        <div>
            {name}- {tagline}
        </div>
    )
}

export default ProductCard