import React from 'react'
import './CardListing'

const SecondCard = ({ imgUrl, title, desc, openSpots, rentSpots, prize }) => {
    let badgeText
    if (openSpots === 2) {
        badgeText = "Available"
    } else if (rentSpots === "Lease") {
        badgeText = "lease"
    }

    return (
        <section className='max-w-[100%] mx-5 relative'>
            <div className='flex flex-col mt-10 mb-9 w-full h-[631px] border-2 border-[#707070] rounded-[8px] space-y-2'>
                <img src={`/images/${imgUrl}`} alt="" className='w-[390px] h-[340px] cursor-pointer' />
                {badgeText && <div className='absolute left-5 bg-[#fff] p-2 rounded-[20px] font-bold'>{badgeText}</div>}
                <div className='absolute right-7 bg-[#fff] p-[0.6rem] pl-4 rounded-[30px] w-[5rem] h-[2.6rem] font-bold'>{rentSpots}</div>
                <div className='px-9 space-y-1'>
                    <p className='font-bold text-base tracking-wide'>{title}</p>
                    <p className='text-[#EC522E] font-extrabold tracking-wide'>{prize}</p>
                    <p className='font-medium tracking-wide'>{desc}</p>
                    <div className='flex space-x-3'>
                        <button className='rounded-full tracking-wide text-xs border-[1px] font-semibold hover:bg-[#707070] border-[#707070] p-2 px-4 py-2'>Watered</button>
                        <button className='rounded-full tracking-wide text-xs border-[1px] font-semibold hover:bg-[#707070] border-[#707070] p-2 px-4 py-2'>Car pack</button>
                        <button className='mt-1 tracking-wide rounded-full text-xs border-[1px] font-semibold hover:bg-[#707070] border-[#707070] p-2 px-4 py-2'>Bar spot</button> <br />
                    </div>
                    <button className='mt-3 tracking-wide rounded-full text-xs border-[1px] font-semibold hover:bg-[#707070] border-[#707070] p-2 px-4 py-2'>Swimming pool</button>
                    <div className='flex space-x-3'>
                        <button className='text-sm mt-5 font-semibold rounded-[6px] w-[95px] h-[42px] hover:bg-[#707070] text-[#EC522E] border-2 border-[#EC522E]'>VIEW</button>
                        <button className='text-sm mt-5 font-semibold rounded-[6px] w-[200px] h-[42px] hover:bg-[#707070] text-[#fff] border-2 border-[#EC522E] bg-[#EC522E]'>CONTACT FOR INSPECTION</button>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default SecondCard