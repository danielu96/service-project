import React from 'react'
import { FaFacebookF } from 'react-icons/fa'
import { IoIosMail } from "react-icons/io";
import { BsTelephoneFill } from "react-icons/bs";

const Footer = () => {
    return (
        <section>
            <div className="grid grid-cols-1 mx-auto mt-5 w-fit ">

                <div className='grid grid-cols-1 md:grid-cols-3 gap-2'>
                    <div className='flex justify-center'><BsTelephoneFill className='size-5 mr-2' />  <p> 222 333 444 </p></div>
                    <div className='flex justify-center'><IoIosMail className='size-6 mr-2' />  <p> info@info.com </p></div>
                    <div className='flex justify-center'><FaFacebookF className='size-5 mr-2' />  <p> odwiedź nas </p></div>
                </div>


            </div>
            <div className='text-center mt-5'>
                <h6 className='text-center mt-5'>Copyright © 2024 - All right reserved by TW</h6>
            </div>
        </section>
    )
}
export default Footer