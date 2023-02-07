import React from 'react'

import img from '../../Asset/images/img-17.jpg'
import img2 from '../../Asset/images/img-12.jpg'

const About = () => {
    return (
        <section>
            <div className='flex space-x-14 px-20'>
                <div className='text-[#000000]'>
                    <h1 className='text-[60px] font-black leading-tight whitespace-nowrap'>Who we are <br /> and what we do</h1>
                    <hr className="w-20 h-1 mt-4 bg-gray-100 border-0 rounded dark:bg-[#EC522E]"></hr>
                </div>
                <div className='text-[#000000] mt-4'>
                    <p className='Text-[24px] font-normal whitespace-nowrap'>We are dedicated to helping our cilents buy, sell and rent properties. <br /> Our team of experienced and professional agents is ready to assist <br /> you with all of your real estate needs. </p>
                    <p className='Text-[24px] font-normal whitespace-nowrap mt-5'>We understand that buying or selling a home can be a stressful and <br /> overwhelming process, which is why we strive to make the experience <br /> as seamless and enjoyable as possible.</p>
                </div>
            </div>

            <div className='flex flex-col px-20 space-y-6 mt-6'>
                <div className='flex space-x-6'>
                    <img src={img} alt="" className='w-[780px] h-[370px]' />
                    <img src={img2} alt="" className='w-[361px] h-[370px]' />
                </div>

                <div className='flex space-x-6'>
                    <img src={img2} alt="" className='w-[361px] h-[370px]' />
                    <img src={img} alt="" className='w-[780px] h-[370px]' />
                </div>



            </div>
        </section>
    )
}

export default About