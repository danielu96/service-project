import React from 'react'
import { PropertyCardProps } from '@/utils/types'
import Image from 'next/image';
import Link from 'next/link';
import FavoriteToggleButton from './FavoriteToggleButton';
import PropertyRating from './PropertyRating';

const ProductCard = ({ property }: { property: PropertyCardProps }) => {
    const { name, image } = property;
    const { id: propertyId, tagline } = property;
    return (
        <article className='group relative md:mx-10 '>
            <Link href={`/properties/${propertyId}`}>
                <div className='relative h-[300px] md:h-[200px] mb-2 overflow-hidden rounded-md'>
                    <Image
                        src={image}
                        fill
                        sizes='(max-width: 768px) 80vw, (max-width: 1200px) 80vw'

                        alt={name}
                        className=' rounded-md  group-hover:brightness-50 ease-out duration-1000 object-cover transform group-hover:scale-110 transition-transform border-y-4 border-card-foreground'

                    />
                </div>
                <div className='absolute  top-5 right-5 zoom-in-75 bg-primary-foreground rounded-lg px-3 py-2 border-y-2 border-card-foreground'>{name}</div>
                <div className='flex justify-between items-center'>
                    <h3 className='capitalize text-sm font-semibold md:text-xl mt-1'>
                        {name}
                    </h3>
                    <PropertyRating inPage={false} propertyId={propertyId} />
                </div>
                <p className='text-sm mt-1 text-muted-foreground '>
                    {tagline.substring(0, 80)}
                </p>
            </Link>
            <div className='absolute top-5 left-5 z-1'>
                <FavoriteToggleButton propertyId={propertyId} />
            </div>

        </article>
    )
}

export default ProductCard