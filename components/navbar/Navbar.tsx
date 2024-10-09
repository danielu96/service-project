import React from 'react'
import Logo from './Logo'
import { NavigationMenuDemo } from './Menu'
import Navsearch from './Navsearch'
import DarkMode from './DarkMode'

function Navbar() {
    return (
        <>
            <nav>
                <div className=' container flex flex-col sm:flex-row  sm:justify-between sm:items-center flex-wrap gap-4 py-8 '>
                    <Logo />
                    <div className='flex gap-2'>
                        <DarkMode />
                        <NavigationMenuDemo />
                    </div>
                </div>

            </nav>
            <h1 className='mx-auto p-3 capitalize font-serif font-extrabold text-black bg-slate-100 text-5xl max-w-fit '>It is the company</h1>
            <Navsearch />

        </>
    )
}

export default Navbar