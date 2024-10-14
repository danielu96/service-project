import React from 'react'
import { ProductCardProps } from '@/utils/types'
import Image from 'next/image';
import Link from 'next/link';

const ProductCard = ({ product }: { product: ProductCardProps }) => {
    const { name, image, header } = product;
    const { id: propertyId, tagline } = product;
    return (
        <article className='group relative'>
            <Link href={`/properties/${propertyId}`}>
                <div className='relative h-[300px] mb-2 overflow-hidden rounded-md'>
                    <Image
                        src={image}
                        fill
                        sizes='(max-width: 768px) 50vw, (max-width: 1200px) 50vw'
                        alt={name}
                        className='rounded-md group-hover:brightness-50 ease-out duration-1000 object-cover transform group-hover:scale-110 transition-transform '

                    />
                </div>
                <div className='flex justify-between items-center'>
                    <h3 className='text-sm font-semibold mt-1'>
                        {name}
                    </h3>
                </div>
                <p className='text-sm mt-1 text-muted-foreground '>
                    {tagline.substring(0, 40)}
                </p>
            </Link>
        </article>
    )
}

export default ProductCard