import React from 'react'

const Listing = () => {
    return (
        <div className='flex justify-between px-20'>
            <h1 className='font-bold text-4xl'>Featured Listings</h1>
            <a href="#" className='text-[#EC522E] mt-1 '>
                VIEW MORE
                <hr className="w-[5.4rem] h-[0.1rem] rounded dark:bg-[#EC522E]"></hr>
            </a>
        </div>
    )
}

export default Listing