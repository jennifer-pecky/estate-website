import React from 'react'
import { styles } from '../../../styles/styles.tailwind'
import GallaryCaro from '../Carosuel/GallaryCaro'


const Gallery = () => {
    const { globalPadding } = styles
    return (
        <section className={`px-20 ${globalPadding}`}>
            <div className='flex flex-col space-y-5 py-24 '>
                <h1 className='font-bold text-[#000] text-2xl tracking-[1.25px]'>Get in touch</h1>
                <div className='flex gap-x-1'>
                    <hr className="w-10 h-1 bg-gray-100 border-0 rounded dark:bg-[#EC522E] mt-4" />
                    <h3 className='text-[#000]'>Let's Work Together</h3>
                </div>
            </div>
            <div>
                <GallaryCaro />
            </div>

        </section>
    )
}

export default Gallery