import React from 'react'

const GalSection = () => {
    return (
        <section>
            <div className='flex space-x-14 px-20'>
                <div className='text-[#000000]'>
                    <h1 className='text-[60px] font-black leading-tight whitespace-nowrap'>Welcome to our <br /> gallery & enjoy</h1>
                    <hr class="w-20 h-1 mt-4 bg-gray-100 border-0 rounded dark:bg-[#EC522E]"></hr>
                </div>
                <div className='text-[#666666] mt-6'>
                    <p className='Text-[24px] font-medium whitespace-nowrap'>Our gallery only contains properties that has already been sold, rented <br /> leased.</p>
                </div>

                <input type="text" />
            </div>
        </section>
    )
}

export default GalSection