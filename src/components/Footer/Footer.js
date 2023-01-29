import React from 'react'
import { styles } from '../../styles/styles.tailwind'


const Footer = () => {
    const { globalPadding } = styles
    return (
        <section className={`px-20 bg-[#666666] ${globalPadding}`}>
            <div className='flex gap-x-20'>
                <div className='flex flex-col space-y-5 py-24 '>
                    <h1 className='font-bold text-[#fff] text-2xl tracking-[1.25px]'>Get in touch</h1>
                    <div className='flex gap-x-1'>
                        <hr className="w-10 h-1 bg-gray-100 border-0 rounded dark:bg-[#EC522E] mt-4" />
                        <h3 className='text-[#fff]'>Let's Work Together</h3>
                    </div>
                </div>

                <div className='flex relative px-10'>
                    <div className='flex w-[690px]  bg-[#fff]  absolute bottom-6'>
                        <div className='p-10'>
                            <form action="/action_page-php" className='space-y-5'>
                                <input className='p-6 w-[289px] h-4 border-[0.5px] border-[#707070] rounded-[8px]' type="text" placeholder='Your Name' />
                                <input className='p-6 w-[289px] h-4 border-[0.5px] border-[#707070] rounded-[8px]' type="text" placeholder='Your Email' />
                                <input className='p-8 w-[570px] h-[166px] border-[1px]  border-[#707070]  rounded-[8px]' type="text" placeholder='Your Message' />
                            </form>
                            <button className='w-[154px] h-[61px] ml-[69%] mt-4 hover:bg-[#666666] rounded-[4px] border-[#EC522E] border-2 bg-[#EC522E] text-[#fff]'>Submit</button>
                        </div>

                    </div>
                </div>

            </div>

            <div className='mt-20 text-[#fff] pt-5 flex justify-between'>
                <ul className='flex gap-x-12 p-5 font-bold '>
                    <li>
                        <a href="" className=''>Home</a>
                    </li>
                    <li>
                        <a href="" className=''>Portfolio</a>
                    </li>
                    <li>
                        <a href="" className=''>Product</a>
                    </li>
                    <li>
                        <a href="" className=''>About Us</a>
                    </li>
                </ul>

                <div className='mt-4'>
                    <p>COPYRIGHT 2020 ALL RIGHT RESERVED</p>
                </div>
            </div>
        </section>
    )
}

export default Footer