import React from 'react'
import { ProductCardProps } from '@/utils/types'
import Image from 'next/image';
import Link from 'next/link';
import FavoriteToggleButton from './FavoriteToggleButton';
import PropertyRating from './PropertyRating';
import CountryFlagAndName from './CountryFlagAndName';
import { formatCurrency } from '@/utils/format';

const ProductCard = ({ property }: { property: ProductCardProps }) => {
    const { name, image, price } = property;
    const { country, id: propertyId, tagline } = property;
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
                <div className='absolute  top-5 right-5 zoom-in-75 bg-primary-foreground rounded-lg px-3 py-2 border-y-2 border-card-foreground'>
                    <p className='text-sm mt-1 font-extrabold'>
                        <span className='font-semibold'>{formatCurrency(price)} </span>

                    </p>
                </div>

                <div className='flex justify-between items-center'>
                    <h3 className='capitalize text-sm font-semibold md:text-xl mt-1'>
                        {name}
                    </h3>

                    <PropertyRating inPage={false} propertyId={propertyId} />
                </div>
                <div className='flex justify-between items-center text-sm mt-1 text-muted-foreground '>
                    {tagline.substring(0, 80)}
                    <CountryFlagAndName countryCode={country} />
                </div>


            </Link>

            <div className='absolute top-5 left-5 z-1'>
                <FavoriteToggleButton propertyId={propertyId} />
            </div>

        </article>
    )
}

export default ProductCard