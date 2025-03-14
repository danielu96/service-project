
import React from 'react'
import Logo from './Logo'
import LinksDropdown from './Menu'
import NavSearch from './NavSearch'
import DarkMode from './DarkMode'
import { auth } from '@clerk/nextjs/server'; // Importujemy auth

async function Navbar() {
    const isAdminUser = (await auth()).userId === process.env.ADMIN_USER_ID; // Logika autoryzacji
    return (
        <>
            <nav className='navcontainer bg-primary-foreground top-0 z-50 transition-colors hover:text-foreground/80 text-foreground/55 shadow-md'>
                <div className=' flex flex-col sm:flex-row  sm:justify-between sm:items-center flex-wrap gap-4 py-3 '>
                    <Logo />
                    <NavSearch />
                    <div className='flex gap-2'>
                        <DarkMode />
                        {/* <LinksDropdown /> */}
                        <LinksDropdown isAdminUser={isAdminUser} />
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar