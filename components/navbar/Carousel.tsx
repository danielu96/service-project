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
            <div className='navcontainer'>
                <Carousel
                    plugins={[plugin.current]}
                    className=" max-w-full z-auto"
                    onMouseEnter={plugin.current.stop}
                    onMouseLeave={plugin.current.reset}
                >
                    <CarouselContent>
                        <CarouselItem className='bg01 h-96'>
                            <div className='grid grid-row-3 p-8 mx-10 mt-32 sm:mt-24 sm:ml-36 '>
                                <h1 className='  p-3 capitalize font-serif font-extrabold text-black bg-white text-xl md:text-5xl max-w-fit '>This is the company</h1>
                                <h3 className='invisible sm:visible p-3 capitalize font-serif font-extrabold text-black bg-white text-xl md:text-2xl max-w-fit border-t-2 border-solid '>what they offer</h3>
                                <div className='invisible sm:visible flex flex-row gap-4 mt-6 text-xl font-bold '>
                                    <p className=' bg-primary-foreground rounded-xl py-1 px-3'>board</p>
                                    <p className='bg-primary-foreground rounded-xl py-1 px-3'>front</p>
                                    <p className='bg-primary-foreground rounded-xl py-1 px-3'>service</p>
                                </div>
                            </div>
                        </CarouselItem>
                        <CarouselItem className='bg02 h-96'>
                            <div className='grid grid-row-3 p-8 mx-10 mt-32 sm:mt-24 sm:ml-36'>
                                <h1 className=' p-3 capitalize font-serif font-extrabold text-black bg-white text-xl md:text-5xl max-w-fit '>What they do </h1>
                                <h3 className='invisible sm:visible p-3 capitalize font-serif font-extrabold text-black bg-white text-xl md:text-2xl max-w-fit border-t-2 border-solid '>let me check ...</h3>
                                <div className='invisible sm:visible flex flex-row gap-4 mt-6 text-xl font-bold'>
                                    <p className='bg-primary-foreground rounded-xl py-1 px-3'>board</p>
                                    <p className='bg-primary-foreground rounded-xl py-1 px-3'>front</p>
                                    <p className='bg-primary-foreground rounded-xl py-1 px-3'>service</p>
                                </div>
                            </div>
                        </CarouselItem>
                        <CarouselItem className='bg03 h-96'>
                            <div className='grid grid-row-3 p-8 mx-10 mt-32 sm:mt-24 sm:ml-36'>
                                <h1 className=' p-3 capitalize font-serif font-extrabold text-black bg-white text-xl md:text-5xl max-w-fit '>Are they expensive ?</h1>
                                <h3 className='invisible sm:visible p-3 capitalize font-serif font-extrabold text-black bg-white text-xl md:text-2xl max-w-fit border-t-2 border-solid '>let me check ...</h3>
                                <div className='invisible sm:visible flex flex-row gap-4 mt-6 text-xl font-bold'>
                                    <p className='bg-primary-foreground rounded-xl py-1 px-3'>cheap</p>
                                    <p className='bg-primary-foreground rounded-xl py-1 px-3'>very cheap</p>
                                    <p className='bg-primary-foreground rounded-xl py-1 px-3'>cheapest in the world</p>
                                </div>
                            </div>
                        </CarouselItem>
                        <CarouselItem className='bg04 h-96'>
                            <div className='grid grid-row-3 p-8 mx-10 mt-32 sm:mt-24 sm:ml-36'>
                                <h1 className=' p-3 capitalize font-serif font-extrabold text-black bg-white text-xl md:text-5xl max-w-fit '>Are they good ?</h1>
                                <h3 className='invisible sm:visible p-3 capitalize font-serif font-extrabold text-black bg-white text-xl md:text-2xl max-w-fit border-t-2 border-solid '>let me check ...</h3>
                                <div className='invisible sm:visible flex flex-row gap-4 mt-6 text-xl font-bold'>
                                    <p className='bg-primary-foreground rounded-xl py-1 px-3'>good</p>
                                    <p className='bg-primary-foreground rounded-xl py-1 px-3'>very good</p>
                                    <p className='bg-primary-foreground rounded-xl py-1 px-3'>best and the better</p>
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