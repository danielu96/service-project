"use client"
import React from 'react'
import Logo from './Logo'
import { NavigationMenuDemo } from './Menu'
import Navsearch from './Navsearch'
import DarkMode from './DarkMode'
import Autoplay from "embla-carousel-autoplay"

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"

function Navbar() {

    const plugin = React.useRef(
        Autoplay({ delay: 6000, stopOnInteraction: true })
    )
    return (
        <>
            <nav>
                <div className=' container flex flex-col sm:flex-row  sm:justify-between sm:items-center flex-wrap gap-4 py-3 '>
                    <Logo />
                    <Navsearch />
                    <div className='flex gap-2'>
                        <DarkMode />
                        <NavigationMenuDemo />
                    </div>
                </div>
            </nav>
            <Carousel
                plugins={[plugin.current]}
                className=" max-w-full"
                onMouseEnter={plugin.current.stop}
                onMouseLeave={plugin.current.reset}
            >
                <CarouselContent>
                    <CarouselItem className='fanart h-96'>
                        <div className='grid grid-row-2 p-8'>
                            <h1 className='mx-auto mt-32 p-3 capitalize font-serif font-extrabold text-black bg-slate-100 text-xl md:text-5xl max-w-fit '>This is the company</h1>
                        </div>
                    </CarouselItem>
                    <CarouselItem className='anart h-96'>
                        <div className='grid grid-row-2 p-8'>
                            <h1 className='mx-auto mt-32 p-3 capitalize font-serif font-extrabold text-black bg-slate-100 text-xl md:text-5xl max-w-fit '>What they do ?</h1>
                        </div>
                    </CarouselItem>
                    <CarouselItem className='fanart h-96'>
                        <div className='grid grid-row-2 p-8'>
                            <h1 className='mx-auto mt-32 p-3 capitalize font-serif font-extrabold text-black bg-slate-100 text-xl md:text-5xl max-w-fit '>Are they expensive ?</h1>
                        </div>
                    </CarouselItem>
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel >
        </>
    )
}

export default Navbar