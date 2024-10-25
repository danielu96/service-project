import { Separator } from '../ui/separator'
import React from 'react'

const AboutUs = () => {
    return (
        <>
            <div className='container my-8 text-left'>
                <h1 className='text-4xl  my-12 text-pretty'>A few words about this company</h1>
                <p>Long long time ago ... established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for lorem ipsum will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident,
                    sometimes on purpose (injected humour and the like).</p>
            </div>
            <Separator />
        </>
    )
}

export default AboutUs