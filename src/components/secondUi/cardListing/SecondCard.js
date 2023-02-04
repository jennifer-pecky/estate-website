import React from 'react'
import './CardListing'

const SecondCard = ({ imgUrl, title, desc, prize }) => {
    return (

        <section className='max-w-[100%] mx-5 relative'>
            <div className='flex flex-col mt-10 mb-9 w-full h-[631px] border-2 border-[#707070] rounded-[8px] space-y-2'>
                <img src={`/images/${imgUrl}`} alt="" className='w-[390px] h-[340px] cursor-pointer' />
                <div className='absolute left-5 bg-[#fff] p-2 rounded-[20px] font-bold'>Available</div>
                <div className='absolute right-3 bg-[#fff] p-3 rounded-[20px]   font-bold'>Lease</div>
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