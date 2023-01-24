import React from 'react'
import { styles } from '../../../styles/styles.tailwind'
import img from "../../../Asset/images/png2.png"


const Card = () => {
    const { globalPadding } = styles
    return (
        <section className={`${globalPadding} px-20`}>
            <div className='flex justify-between'>
                <h1 className='font-bold text-4xl'>Featured Listings</h1>
                <a href="#" className='text-[#EC522E] mt-1 '>
                    VIEW MORE
                    <hr class="w-[5.4rem] h-[0.1rem] rounded dark:bg-[#EC522E]"></hr>
                </a>
            </div>

            <div className='flex flex-col mt-10 w-[370px] h-[631px] border-2 border-[#707070]'>
                <img src={img} alt="" className='w-[370px] h-[340px]' />
                <div className='px-5'>
                    <p className='font-bold text-base tracking-wide'>4 Bedroom Duplex at Odili Road</p>
                    <span className='text-[#EC522E] font-bold tracking-wide'>N50,000,000</span>
                    <p className='font-medium tracking-wide'>Odili Road, Port Harcourt,Rivers State</p>
                    <div className='flex space-x-3'>
                        <button className='rounded-full tracking-wide text-xs border-[1px] font-semibold border-[#707070] p-2 px-4 py-2'>Watered</button>
                        <button className='rounded-full tracking-wide text-xs border-[1px] font-semibold border-[#707070] p-2 px-4 py-2'>Car pack</button>
                        <button className='tracking-wide rounded-full text-xs border-[1px] font-semibold border-[#707070] p-2 px-4 py-2'>Bar spot</button> <br />
                    </div>
                    <button className='mt-3 tracking-wide rounded-full text-xs border-[1px] font-semibold border-[#707070] p-2 px-4 py-2'>Swimming pool</button>
                    <div className='flex space-x-3 mt-2'>
                        <button className='text-sm mt-3 font-semibold rounded-[6px] w-[129px] h-[42px] text-[#EC522E] border-2 border-[#EC522E]'>VIEW</button>
                        <button className='text-sm mt-3 font-semibold rounded-[6px] w-[185px] h-[42px] text-[#fff] border-2 border-[#EC522E] bg-[#EC522E]'>CONTACT</button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Card