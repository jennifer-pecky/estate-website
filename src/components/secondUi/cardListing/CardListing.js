import React, { useState } from 'react'
import Modals from '../../Modal/Modals';
import { FiSearch } from 'react-icons/fi';
import img1 from '../../../Asset/images/flilter.png'
import { MdOutlineArrowDropDown } from 'react-icons/md'
import img2 from '../../../Asset/images/property.png'
import img3 from '../../../Asset/images/price.png'
import img4 from '../../../Asset/images/rating.png'
import img5 from '../../../Asset/images/country.png'
import img6 from '../../../Asset/images/city.png'
import SecondCard from './SecondCard';
import { LISTING__DATA } from '../../../Asset/Data/Data'


const CardListing = () => {
    const [openModal, setOpenModal] = useState(false)
    const handleOpenModal = () => {
        setOpenModal(!openModal)
    }
    const Cards = LISTING__DATA.map(item => {
        return (
            <SecondCard
                key={item.id}
                imgUrl={item.imgUrl}
                title={item.title}
                prize={item.prize}
                desc={item.desc}
                openSpots={item.openSpots}
                rentSpots={item.rentSpots}
                rating={item.rating}
                reviews={item.reviews}
                handleOpenModal={handleOpenModal}
            />
        )
    })



    return (
        <section>
            {openModal && <Modals handleOpenModal={handleOpenModal} />}
            <div className='relative flex'>
                <label htmlFor="" className=''>
                    <FiSearch className='absolute mt-3 left-[4.5rem] h-6 w-6 text-[#000000]' />
                    <input type="text" placeholder='Search location, property type ' className='hover:bg-[#666666] mx-[2.8rem] w-[1055px] h-[50px] border-[0.20rem] border-[#6666] rounded-[31px] px-16' />
                </label>
                <div className=' w-[50px] h-[50px] rounded-[30px] border-2 border-[#6666] hover:bg-[#EC522E] left-[70rem] absolute'>
                    <img src={img1} alt="" className='p-3' />
                </div>
            </div>



            <div className='flex space-x-8 text-[#666666] mx-10 mt-10'>
                <div className='flex w-[270px] h-[50px] border-2 border-[#6666] p-3 space-x-2'>
                    <img src={img2} alt="" />
                    <div className='flex'>
                        <h2 className='font-medium whitespace-nowrap'>All property type</h2>
                        <MdOutlineArrowDropDown className='mt-1 mx-12 ' />
                    </div>
                </div>

                <div className='flex  w-[204px] h-[50px] border-2 border-[#6666] p-3  space-x-2'>
                    <img src={img3} alt="" />
                    <div className='flex'>
                        <h2 className='font-medium whitespace-nowrap'>Price Range</h2>
                        <MdOutlineArrowDropDown className='mt-1 mx-10 ' />
                    </div>
                </div>

                <div className='flex  w-[204px] h-[50px] border-2 border-[#6666] p-3  space-x-2'>
                    <img src={img4} alt="" />
                    <div className='flex'>
                        <h2 className='font-medium whitespace-nowrap'>Ratings</h2>
                        <MdOutlineArrowDropDown className='mt-1 mx-16 ' />
                    </div>
                </div>
                <div className='flex  w-[204px] h-[50px] border-2 border-[#6666] p-3  space-x-2'>
                    <img src={img5} alt="" />
                    <div className='flex'>
                        <h2 className='font-medium whitespace-nowrap'>Country</h2>
                        <MdOutlineArrowDropDown className='mt-1 mx-14 ' />
                    </div>
                </div>
                <div className='flex  w-[204px] h-[50px] border-2 border-[#6666] p-3  space-x-4'>
                    <img src={img6} alt="" />
                    <div className='flex'>
                        <h2 className='font-medium whitespace-nowrap'>City</h2>
                        <MdOutlineArrowDropDown className='mt-1 mx-20 ' />
                    </div>
                </div>
            </div>


            <div className="grid grid-cols-3 ">
                {Cards}
            </div>
        </section>
    )
}

export default CardListing