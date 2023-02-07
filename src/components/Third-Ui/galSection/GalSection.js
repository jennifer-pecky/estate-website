import React from 'react'
// import { IMAGE__DATA } from '../../../Asset/Data/Data'
// import './GalImage'
import img from '../../../Asset/images/img-4.jpg'
import img2 from '../../../Asset/images/img-12.jpg'
// import GalImage from './GalImage'

const GalSection = () => {

    // const GalleryImage = IMAGE__DATA.map(item => {
    //     console.log(item.imageUrl, 'image')
    //     return (
    //         <GalImage
    //             key={item.id}
    //             imageUrl={item.imageUrl}
    //         // imagesUrl={item.ImagesUrl}
    //         />
    //     )
    // })
    return (
        <section>
            <div className='flex space-x-14 px-20'>
                <div className='text-[#000000]'>
                    <h1 className='text-[60px] font-black leading-tight whitespace-nowrap'>Welcome to our <br /> gallery & enjoy</h1>
                    <hr className="w-20 h-1 mt-4 bg-gray-100 border-0 rounded dark:bg-[#EC522E]"></hr>
                </div>
                <div className='text-[#666666] mt-6'>
                    <p className='Text-[24px] font-medium whitespace-nowrap'>Our gallery only contains properties that has already been sold, rented <br /> leased.</p>
                </div>
            </div>

            <div className='grid grid-cols-2 px-20 gap-4 mt-2'>
                <img src={img} alt="" className='w-[785px] h-[370px]' />
                <img src={img2} alt="" className='w-[361px] h-[370px]' />
            </div>
        </section>
    )
}

export default GalSection




/* <div className=" ">
                    <img src={'http://localhost:3000/images/img-3.png'} alt='hello' />
                    {
                        IMAGE__DATA.map((item) => {
                            <img src={'http://localhost:3000/images/img-3.png'} alt='hello' />
                        })
                    }
                </div> */