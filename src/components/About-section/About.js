import React from 'react'
import image from '../../Asset/images/Group 15.png'
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
                            <h1 className='text-[40px] font-black leading-relaxed'>Our Value</h1>
                            <p className='Text-[30px] font-medium'>At Major General Real Estate Agency (MGREA) we value <br /> transparency, honsety, and integrity. We believe that building <br /> long term relationship with our clients is the key to success. <br /> We are commited to providing our clients with the best <br /> possible service and experience.</p>
                        </div>
                        <div>
                            <h1 className='text-[40px] font-black leading-relaxed'>Our Mission</h1>
                            <p className='Text-[30px] font-medium'>Our Mission is to provide our clients with the highest level of <br /> service, expertise, and integrity in order to help them achieve <br /> their real estate goals.</p>
                        </div>
                        <div>
                            <h1 className='text-[40px] font-black leading-relaxed'>Our Vision</h1>
                            <p className='Text-[30px] font-medium'>Our vision is to be the premier real estate agency in the area known for providing exceptional service and achieving outstanding results for our clients. </p>
                        </div>

                        <div className='relative'>
                            <img src={image} alt="" className='left-[10rem] bottom-14 absolute' />
                        </div>
                    </div>


                </div>



            </div>
        </section>
    )
}

export default About