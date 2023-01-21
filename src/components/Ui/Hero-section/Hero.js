import React from 'react'
import { MdOutlineKeyboardArrowDown } from 'react-icons/md'
import img from "../../../Asset/images/Rectangle 2.png"
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css"
import CEO from '../second-hero/CEO'

const Hero = () => {
    return (
        <section>
            <div className='p-5 px-16 py-8 mx-10 mt-5'>
                <strong className='text-[3rem] leading-[3rem] text-[black] font-black'>Get Your <br /> Dream Home</strong>
                <hr class="w-14 h-1 mt-4 bg-gray-100 border-0 rounded dark:bg-[#EC522E]"></hr>
                <p className='text-[#666666] font-semibold max-w-xl mt-6 leading-[1.5rem]'>Welcome to our website, where you'll find the perfect home to match your dreams and desires. Whether your a first-time home buyer or a seasoned real estate investor. we are here to help you every step of the way. with our vest selection of propeties, expert knowledge of the local market and dedication to finding you the perfect home, you can trust that we will make the home buying process or smooth and enjoying as possible. Dont wait any longer, start browsing our listings and find your dream home today!</p>
            </div>


            <div className='border-2 border-[#666666] max-w-[42%] mx-[7%] rounded-md'>
                <div className='flex mx-5 text-[#666666] font-medium text-base p-2 items-center justify-between'>
                    <li className='flex items-center'>Search location < MdOutlineKeyboardArrowDown /></li>
                    <li className='flex items-center'>Property type < MdOutlineKeyboardArrowDown /></li>
                    <li className='flex items-center'>Price Range < MdOutlineKeyboardArrowDown /></li>
                    <button className='text-lg px-4 p-2 font-semibold rounded-[5px] hover:text-[black]  text-[#fff] border-2 border-[#EC522E] bg-[#EC522E]'>EXPLORE</button>
                </div>
            </div>



            <div className='absolute top-[5.5rem] right-[7%] w-[38%]'>
                <div>
                    <img src={img} alt="" />
                </div>
                {/* <div>
                    <img src={img} alt="" />
                </div>
                <div>
                    <img src={img} alt="" />
                </div> */}
            </div>
            <CEO />
        </section >

    )
}

export default Hero