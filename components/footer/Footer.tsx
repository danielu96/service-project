import React from 'react'
import Link from 'next/link'
import { FaFacebookF } from 'react-icons/fa'

const Footer = () => {
    return (
        <div className="mx-auto w-fit ">
            <Link href={"https://www.facebook.com/TwojProfil"}>
                <FaFacebookF className='mx-auto' size={30} />
            </Link>
            <div className='text-center mt-2'>
                <h4>Odwiedź nas ...</h4>
                <h6 className='text-center mt-5'>Copyright © 2024 - All right reserved by TW</h6>
            </div>
        </div>
    )
}
export default Footer