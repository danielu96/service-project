import React from 'react'
import Logo from './Logo'
import LinksDropdown from './Menu'
// import Navsearch from './Navsearch'
import DarkMode from './DarkMode'

function Navbar() {
    return (
        <>
            <nav className='navcontainer bg-primary-foreground top-0 z-50 transition-colors hover:text-foreground/80 text-foreground/55 shadow-md'>
                <div className=' flex flex-col sm:flex-row  sm:justify-between sm:items-center flex-wrap gap-4 py-3 '>
                    <Logo />
                    {/* <Navsearch /> */}
                    <div className='flex gap-2'>
                        <DarkMode />
                        <LinksDropdown />
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar