import React from 'react'
import './Listing'

// import img from "../../../Asset/images/png2.png"
// import {CARD__DATA} from "../../../Asset/Data/Data"

const Card = ({ imgUrl, title, desc, prize }) => {
    return (
        <section className='max-w-[1160px] mx-auto'>
            <div className=''>
                <div className='flex flex-col mt-10 mb-9 w-[370px] h-[631px] border-2 border-[#707070] rounded-[8px] space-y-2'>
                    <img src={`/images/${imgUrl}`} alt="" className='w-[370px] h-[340px] cursor-pointer' />
                    <div className='px-5 space-y-1'>
                        <p className='font-bold text-base tracking-wide'>{title}</p>
                        <p className='text-[#EC522E] font-bold tracking-wide'>{prize}</p>
                        <p className='font-medium tracking-wide'>{desc}</p>
                        <div className='flex space-x-3'>
                            <button className='rounded-full tracking-wide text-xs border-[1px] font-semibold hover:bg-[#707070] border-[#707070] p-2 px-4 py-2'>Watered</button>
                            <button className='rounded-full tracking-wide text-xs border-[1px] font-semibold hover:bg-[#707070] border-[#707070] p-2 px-4 py-2'>Car pack</button>
                            <button className='mt-1 tracking-wide rounded-full text-xs border-[1px] font-semibold hover:bg-[#707070] border-[#707070] p-2 px-4 py-2'>Bar spot</button> <br />
                        </div>
                        <button className='mt-3 tracking-wide rounded-full text-xs border-[1px] font-semibold hover:bg-[#707070] border-[#707070] p-2 px-4 py-2'>Swimming pool</button>
                        <div className='flex space-x-3'>
                            <button className='text-sm mt-5 font-semibold rounded-[6px] w-[129px] h-[42px] hover:bg-[#707070] text-[#EC522E] border-2 border-[#EC522E]'>VIEW</button>
                            <button className='text-sm mt-5 font-semibold rounded-[6px] w-[185px] h-[42px] hover:bg-[#707070] text-[#fff] border-2 border-[#EC522E] bg-[#EC522E]'>CONTACT</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Card