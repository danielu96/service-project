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
                            <div className='grid grid-row-2 p-8'>
                                <h1 className='mx-auto mt-32 p-3 capitalize font-serif font-extrabold text-black bg-slate-100 text-xl md:text-5xl max-w-fit '>This is the company</h1>
                            </div>
                        </CarouselItem>
                        <CarouselItem className='bg02 h-96'>
                            <div className='grid grid-row-2 p-8'>
                                <h1 className='mx-auto mt-32 p-3 capitalize font-serif font-extrabold text-black bg-slate-100 text-xl md:text-5xl max-w-fit '>What they do ?</h1>
                            </div>
                        </CarouselItem>
                        <CarouselItem className='bg03 h-96'>
                            <div className='grid grid-row-2 p-8'>
                                <h1 className='mx-auto mt-32 p-3 capitalize font-serif font-extrabold text-black bg-slate-100 text-xl md:text-5xl max-w-fit '>Are they expensive ?</h1>
                            </div>
                        </CarouselItem>
                        <CarouselItem className='bg04 h-96'>
                            <div className='grid grid-row-2 p-8'>
                                <h1 className='mx-auto mt-32 p-3 capitalize font-serif font-extrabold text-black bg-slate-100 text-xl md:text-5xl max-w-fit '>rather not ofcourse ?</h1>
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