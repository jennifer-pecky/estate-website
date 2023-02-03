import React from 'react'
import img from "../../Asset/images/Group 2.png"
import Img from "../../Asset/images/Rectangle 2.png"
import { Link } from 'react-router-dom'


const Header = () => {
    return (
        <section className='px-12 flex relative'>
            <nav className='flex space-x-10 p-[15px]'>
                <div>
                    <img src={img} alt="" />
                </div>

                <div>
                    <ul className='md:flex flex text-[#666666] font-normal whitespace-nowrap mr-9'>
                        <li className='mx-5'>
                            <Link to="/" className='text-base hover:text-[#EC522E] duration-500'>Home</Link>
                        </li>
                        <li className='mx-5'>
                            <Link to="/listing" className='text-base hover:text-[#EC522E] duration-500'>Listing</Link>
                        </li>
                        <li className='mx-5'>
                            <Link to="/about" className='text-base hover:text-[#EC522E] duration-500 whitespace-nowrap'>About Us</Link>
                        </li>
                        <li className='mx-5'>
                            <Link to="/contact" className='text-base hover:text-[#EC522E] duration-500'>Contact</Link>
                        </li>
                    </ul>
                </div>

            </nav>
            <div className=''>
                <div className='bg-[#666666] w-[548px] h-[543px] -right-7 absolute'></div>
                <img src={Img} alt="" className=' absolute top-[6rem] right-[5rem]' />
                <div className='absolute right-20 mt-2'>
                    <button className='text-sm  font-semibold rounded-[9px] hover:text-[black] w-28 h-12 text-[#fff] border-2 border-[#fff]'>LOG IN</button>
                    <button className='text-sm ml-4 font-semibold rounded-[9px] hover:text-[black] w-28 h-12 text-[#fff] border-2 border-[#EC522E] bg-[#EC522E]'>SIGN UP</button>
                </div>
            </div>
        </section>
    )
}

export default Header
