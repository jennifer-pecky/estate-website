import React from 'react'
import { MdOutlineKeyboardArrowDown } from 'react-icons/md'
import "react-responsive-carousel/lib/styles/carousel.min.css"
import CEO from '../second-hero/CEO'
import { FiSearch } from 'react-icons/fi';

const Hero = () => {
    return (
        <section>
            <div className='p-7 mx-10 mt-10'>
                <strong className='text-[3rem] leading-[3rem] text-[black] font-black'>Get Your <br /> Dream Home</strong>
                <hr class="w-14 h-1 mt-4 bg-gray-100 border-0 rounded dark:bg-[#EC522E]"></hr>
                <p className='text-[#666666] font-semibold max-w-xl mt-6 leading-[1.5rem]'>Welcome to our website, where you'll find the perfect home to match your dreams and desires. Whether your a first-time home buyer or a seasoned real estate investor. we are here to help you every step of the way. with our vest selection of propeties, expert knowledge of the local market and dedication to finding you the perfect home, you can trust that we will make the home buying process or smooth and enjoying as possible. Dont wait any longer, start browsing our listings and find your dream home today!</p>
            </div>

            <div className='relative'>
                <label htmlFor="">
                    <FiSearch className='absolute mt-3 left-[4.5rem] h-6 w-6 text-[#000000]' />
                    <input type="text" placeholder='Search location, property type ' className=' mx-14 w-[593px] h-[50px] border-[0.20rem] border-[#6666] rounded-[31px] px-12' />
                </label>
            </div>


            {/* <div '>
                <div className='flex mx-6'>
                    <a href="https://google.com" target="_blank" rel="">
                    
                    </a> *

                    <p className='p-[0.37rem] text-[#666666] font-medium '></p>
                </div>
            </div> */}




            <CEO />
        </section >


    )
}

export default Hero
