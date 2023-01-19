import React from 'react'
import img from "../../Asset/images/Group 2.png"

const Header = () => {
    return (
        <section className='flex'>
            <nav className='flex p-5 md:gap-20 px-16 py-8 mx-10'>
                <span className=' cursor-pointer'>
                    <img src={img} alt="" />
                </span>
                <ul className='md:flex flex text-[#666666] font-normal'>
                    <li className='mx-4'>
                        <a href="#" className='text-base hover:text-rose-500 duration-500'>Home</a>
                    </li>
                    <li className='mx-4'>
                        <a href="#" className='text-base hover:text-rose-500 duration-500'>Listing</a>
                    </li>
                    <li className='mx-4'>
                        <a href="#" className='text-base hover:text-rose-500 duration-500'>About Us</a>
                    </li>
                    <li className='mx-4'>
                        <a href="#" className='text-base hover:text-rose-500 duration-500'>Contact</a>
                    </li>
                </ul>
            </nav>

            <div className='flex gap-3 mx-24 z-10'>
                <button className='text-sm px-6 py-2 mx-4 mt-5 font-semibold rounded-[9px] hover:text-[black] w-28 h-12 text-[#fff] border-2 border-[#fff]'>
                    LOG IN
                </button>

                <button className='text-sm px-6 py-2 mx-4 mt-5 font-semibold rounded-[9px] hover:text-[black] w-28 h-12 text-[#fff] border-2 border-[#EC522E] bg-[#EC522E]'>
                    SIGN UP
                </button>
            </div>

            {/* <div className='z-30 flex gap-5 px-[8rem]'>
                <button className='px-6 py-2 mx-4 mt-5 font-medium rounded-[9px] hover:text-[black] w-[90%] h-[60%] text-[#fff] border-2 border-[#fff]'>LOG IN</button>
                <button className='bg-[#EC522E] text-[#fff] w-[90%] h-[60%] px-6 py-2 mx-4 mt-5 font-medium rounded-[9px]'>SIGN UP</button>
            </div> */}

            <div className='absolute top-0 right-0 w-[42%] h-[450px] bg-[#666666] opacity-[1]'></div>
        </section>
    )
}

export default Header