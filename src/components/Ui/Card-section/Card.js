import React from 'react'
import { styles } from '../../../styles/styles.tailwind'
import img from "../../../Asset/images/png.png"


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

            <div className=''>
                <img src={img} alt="" />
                <div className='px-5'>
                    <p className='font-bold text-base tracking-wide'>4 Bedroom Duplex at Odili Road</p>
                    <span className='text-[#EC522E] font-bold'>N50,000,000</span>
                    <p className='font-medium'>Odili Road, Port Harcourt,Rivers State</p>
                    <div className='flex space-x-3'>
                        <button className='rounded-full text-xs border-[1px] font-semibold border-[#707070] p-2 px-4 py-2'>Watered</button>
                        <button className='rounded-full text-xs border-[1px] font-semibold border-[#707070] p-2 px-4 py-2'>Car pack</button>
                        <button className='rounded-full text-xs border-[1px] font-semibold border-[#707070] p-2 px-4 py-2'>Bar spot</button> <br />
                    </div>
                    <button className='mt-3 rounded-full text-xs border-[1px] font-semibold border-[#707070] p-2 px-4 py-2'>Swimming pool</button>
                </div>

                <div className='px-5'>
                    <button>VIEW</button>
                    <button>CONTACT</button>
                </div>
            </div>
        </section>
    )
}

export default Card