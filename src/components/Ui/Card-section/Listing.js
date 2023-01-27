import React from 'react'
import { styles } from '../../../styles/styles.tailwind'

const Listing = () => {
    const { globalPadding } = styles
    return (
        <div className={`${globalPadding} px-20`}>
            <div className='flex justify-between'>
                <h1 className='font-bold text-4xl'>Featured Listings</h1>
                <a href="#" className='text-[#EC522E] mt-1 '>
                    VIEW MORE
                    <hr className="w-[5.4rem] h-[0.1rem] rounded dark:bg-[#EC522E]"></hr>
                </a>
            </div>
        </div>
    )
}


export default Listing