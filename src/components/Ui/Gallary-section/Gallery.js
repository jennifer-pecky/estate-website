import React from 'react'
import { styles } from '../../../styles/styles.tailwind'
import Slide from '../Carosuel/Slide'
// import GallaryCaro from '../Carosuel/GallaryCaro'


const Gallery = () => {
    const { globalPadding } = styles
    return (
        <section className={`px-20 ${globalPadding}`}>
            <div className='flex flex-col space-y-6 '>
                <h1 className='font-bold text-[#000] text-2xl tracking-[1.25px]'>Our Gallery</h1>
                <div className='flex gap-x-1'>
                    <hr className="w-[2.9rem] h-1 bg-gray-100 border-0 rounded dark:bg-[#EC522E] mt-4" />
                    <h3 className='text-[#000]'>Lorem Ipsum Dolor Sit Amet</h3>
                </div>
            </div>
            <div>
                <Slide />
            </div>

        </section>
    )
}

export default Gallery













{/* <GallaryCaro /> */ }