import React from 'react'
import { ProductCardProps } from '@/utils/types'
import Image from 'next/image';
import Link from 'next/link';

const ProductCard = ({ product }: { product: ProductCardProps }) => {
    const { name, image, header } = product;
    const { id: propertyId, tagline } = product;
    return (
        <article className='group relative md:mx-10 '>
            <Link href={`/properties/${propertyId}`}>
                <div className='relative h-[300px] md:h-[200px] mb-2 overflow-hidden rounded-md'>
                    <Image
                        src={image}
                        fill
                        sizes='(max-width: 768px) 80vw, (max-width: 1200px) 80vw'

                        alt={name}
                        className=' rounded-md group-hover:brightness-50 ease-out duration-1000 object-cover transform group-hover:scale-110 transition-transform '

                    />
                </div>
                <div className='absolute text-gray-950 top-5 right-5 zoom-in-75 bg-stone-200 rounded-lg px-2 py-3'>Company</div>
                <div className='flex justify-between items-center'>
                    <h3 className='capitalize text-sm font-semibold md:text-xl mt-1'>
                        {name}
                    </h3>
                </div>
                <p className='text-sm mt-1 text-muted-foreground '>
                    {tagline.substring(0, 80)}
                </p>
            </Link>
        </article>
    )
}

export default ProductCard