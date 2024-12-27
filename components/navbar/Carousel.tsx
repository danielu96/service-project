"use client"
import React from 'react'
import Autoplay from "embla-carousel-autoplay"

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"

function CarouselComponent() {

    const plugin = React.useRef(
        Autoplay({ delay: 6000, stopOnInteraction: true })
    )
    return (
        <>
            <div>
                <Carousel
                    plugins={[plugin.current]}
                    className=" max-w-full z-auto"
                    onMouseEnter={plugin.current.stop}
                    onMouseLeave={plugin.current.reset}
                >
                    <CarouselContent>
                        <CarouselItem className='bg01 h-96'>
                            <div className='grid grid-row-3 p-8 mx-10 mt-32 sm:mt-24 sm:ml-36 '>
                                <h1 className='  p-3 capitalize font-serif font-extrabold text-black bg-white text-xl md:text-5xl max-w-fit '>where is this place</h1>
                                <h3 className='invisible sm:visible p-3 capitalize font-serif font-extrabold text-black bg-white text-xl md:text-2xl max-w-fit border-t-2 border-solid '>check it</h3>
                                <div className='invisible sm:visible flex flex-row gap-4 mt-6 text-xl font-bold '>
                                    <p className=' bg-primary-foreground rounded-xl py-1 px-3'>maybe</p>
                                    <p className='bg-primary-foreground rounded-xl py-1 px-3'>not</p>
                                    <p className='bg-primary-foreground rounded-xl py-1 px-3'>far</p>
                                </div>
                            </div>
                        </CarouselItem>
                        <CarouselItem className='bg02 h-96'>
                            <div className='grid grid-row-3 p-8 mx-10 mt-32 sm:mt-24 sm:ml-36'>
                                <h1 className=' p-3 capitalize font-serif font-extrabold text-black bg-white text-xl md:text-5xl max-w-fit '>do you want to be there?</h1>
                                <h3 className='invisible sm:visible p-3 capitalize font-serif font-extrabold text-black bg-white text-xl md:text-2xl max-w-fit border-t-2 border-solid '>what do you want to see</h3>
                                <div className='invisible sm:visible flex flex-row gap-4 mt-6 text-xl font-bold'>
                                    <p className='bg-primary-foreground rounded-xl py-1 px-3'>you</p>
                                    <p className='bg-primary-foreground rounded-xl py-1 px-3'>run</p>
                                    <p className='bg-primary-foreground rounded-xl py-1 px-3'>fast ?</p>
                                </div>
                            </div>
                        </CarouselItem>
                        <CarouselItem className='bg03 h-96'>
                            <div className='grid grid-row-3 p-8 mx-10 mt-32 sm:mt-24 sm:ml-36'>
                                <h1 className=' p-3 capitalize font-serif font-extrabold text-black bg-white text-xl md:text-5xl max-w-fit '>do you like this place?</h1>
                                <h3 className='invisible sm:visible p-3 capitalize font-serif font-extrabold text-black bg-white text-xl md:text-2xl max-w-fit border-t-2 border-solid '>of course</h3>
                                <div className='invisible sm:visible flex flex-row gap-4 mt-6 text-xl font-bold'>
                                    <p className='bg-primary-foreground rounded-xl py-1 px-3'>it</p>
                                    <p className='bg-primary-foreground rounded-xl py-1 px-3'>looks</p>
                                    <p className='bg-primary-foreground rounded-xl py-1 px-3'>great</p>
                                </div>
                            </div>
                        </CarouselItem>
                        <CarouselItem className='bg04 h-96'>
                            <div className='grid grid-row-3 p-8 mx-10 mt-32 sm:mt-24 sm:ml-36'>
                                <h1 className=' p-3 capitalize font-serif font-extrabold text-black bg-white text-xl md:text-5xl max-w-fit '>what a view</h1>
                                <h3 className='invisible sm:visible p-3 capitalize font-serif font-extrabold text-black bg-white text-xl md:text-2xl max-w-fit border-t-2 border-solid '>are you interested?</h3>
                                <div className='invisible sm:visible flex flex-row gap-4 mt-6 text-xl font-bold'>
                                    <p className='bg-primary-foreground rounded-xl py-1 px-3'>choose</p>
                                    <p className='bg-primary-foreground rounded-xl py-1 px-3'>a date</p>
                                    <p className='bg-primary-foreground rounded-xl py-1 px-3'>and book</p>
                                </div>
                            </div>
                        </CarouselItem>
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                </Carousel >
            </div>
        </>
    )
}

export default CarouselComponent