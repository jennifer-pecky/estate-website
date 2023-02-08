import React from 'react'
import image from '../../Asset/images/Group 15.png'
import img from '../../Asset/images/img-17.jpg'
import img2 from '../../Asset/images/img-12.jpg'
import img3 from '../../Asset/images/Group 19.png'
import img4 from '../../Asset/images/Group 21.png'
import img5 from '../../Asset/images/Group 22.png'
import img6 from '../../Asset/images/Group 23.png'
import './Second'
import Second from './Second'

const About = () => {
    return (
        <section>
            <div className='flex space-x-14 px-20'>
                <div className='text-[#000000]'>
                    <h1 className='text-[60px] font-black leading-tight whitespace-nowrap'>Who we are <br /> and what we do</h1>
                    <hr className="w-20 h-1 mt-4 bg-gray-100 border-0 rounded dark:bg-[#EC522E]"></hr>
                </div>
                <div className='text-[#232121] mt-4'>
                    <p className='Text-[30px] font-normal whitespace-nowrap leading-relaxed'>We are dedicated to helping our cilents buy, sell and rent properties. <br /> Our team of experienced and professional agents is ready to assist <br /> you with all of your real estate needs. </p>
                    <p className='Text-[30px] font-normal whitespace-nowrap mt-5 leading-relaxed'>We understand that buying or selling a home can be a stressful and <br /> overwhelming process, which is why we strive to make the experience <br /> as seamless and enjoyable as possible.</p>
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

                <div>
                    <p className='Text-[30px] font-medium'>Our agents are knowlwdgeable about the local real estate market and are equipped with the tools and resources necessary to help you <br /> find the perfect property or to market your home to potential buyers.</p>
                    <div className='grid grid-cols-2 gap-16 mt-20'>
                        <div>
                            <h1 className='text-[40px] font-black'>Our Value</h1>
                            <p className='Text-[30px] font-medium leading-relaxed'>At Major General Real Estate Agency (MGREA) we value <br /> transparency, honsety, and integrity. We believe that building <br /> long term relationship with our clients is the key to success. <br /> We are commited to providing our clients with the best <br /> possible service and experience.</p>
                        </div>
                        <div>
                            <h1 className='text-[40px] font-black'>Our Mission</h1>
                            <p className='Text-[30px] font-medium leading-relaxed'>Our Mission is to provide our clients with the highest level of <br /> service, expertise, and integrity in order to help them achieve <br /> their real estate goals.</p>
                        </div>
                        <div>
                            <h1 className='text-[40px] font-black'>Our Vision</h1>
                            <p className='Text-[30px] font-medium leading-relaxed'>Our vision is to be the premier real estate agency in the area known for providing exceptional service and achieving outstanding results for our clients. </p>
                        </div>

                        <div className='relative'>
                            <img src={image} alt="" className='left-[10rem] bottom-14 absolute' />
                        </div>
                    </div>
                </div>
            </div>


            <div className='grid grid-cols-2 gap-x-16 mt-20 px-20'>
                <div className='space-y-3 w-[563px] h-[300px] max-w-screen-mobile border-2 border-[#E3E3E3] p-3'>
                    <img src={img3} alt="" />
                    <h2 className='text-[18px] font-bold'>Property Management</h2>
                    <p className='Text-[30px] font-medium '>We offer management services for landlords and renters. Our  <br /> agency are experts in the field and are dedicated to ensuring that <br /> your rental property is well - maintained and that your tenants are satisfied. </p>
                </div>

                <div className='space-y-3 w-[563px] max-w-screen-mobile h-[300px] border-2 border-[#E3E3E3] p-4'>
                    <img src={img4} alt="" />
                    <h2 className='text-[18px] font-bold'>Property Valuation</h2>
                    <p className='Text-[30px] font-medium leading-relaxed'>Our valuation report also includes a detailed breakdown of comparable <br /> properties in your  area so you can see how your stocks up <br /> against the competition. This information can help you make  informed <br /> decisions about pricing, staging and marketing your property.</p>
                </div>

                <div className='mt-7 space-y-3 max-w-screen-mobile w-[563px] h-[300px] border-2 border-[#E3E3E3] p-[0.5rem]'>
                    <img src={img5} alt="" />
                    <h2 className='text-[18px] font-bold'>Find a Property</h2>
                    <p className='Text-[30px] font-medium leading-normal'>Our website offers a comprehensive and user-friendly search tool that <br /> makes it easy to find properties that meet your specific needs and <br /> preference. <br /> you can contact any agency directly to help you find what you find what your <br /> looking for </p>
                </div>

                <div className='mt-7 space-y-3 max-w-screen-mobile w-[563px] h-[300px] border-2 border-[#E3E3E3] p-4'>
                    <img src={img6} alt="" />
                    <h2 className='text-[18px] font-bold'>Buy, sell, lease, Rent of properties</h2>
                    <p className='Text-[30px]font-medium leading-relaxed '>Whether your looking for buy, sell, lease or rent a property,our agency <br /> has everything you need to make your real estate transaction a <br /> success. Browse our listings today and take the first step towards <br /> achieving your real estate goals!</p>
                </div>
            </div>
            <div >
                <Second />
            </div>

        </section>
    )
}

export default About