import React from 'react'
import img from "../../../Asset/images/666666.png"
import { styles } from '../../../styles/styles.tailwind'

const CEO = () => {
    const { globalPadding } = styles
    return (
        <section className={`pt-10 px-20 bg-[#F9F9F9] ${globalPadding}`}>
            <div className='flex w-full max-w-full space-x-10 '>
                <div className='w-full max-w-[30%] relative'>

                    <div className={`bg-[#666666] h-[450px]  rounded-lg mb-10 absolute w-full -top-20 `}></div>
                </div>

                <div className=' w-[70%] flex flex-col space-y-6'>
                    <h1 className='text-[2rem] leading-[2.6rem] text-[#000000] font-bold'>We've been working in real estate <br /> markets since in the 90s</h1>
                    <p className='max-w-[90%] leading-loose tracking-wide'>"With over 20 years of experience in the real estate industry, we have the knowledge and expertise to help you navigate the ever-changing market.Since the 90s we've been working in various real estate markets and have built a reputation for providing exceptional service and delivering results. Our team of experienced agents is dedicated to helping you find your dream home, whether your first time homebuyer or a seasoned investor. Trust in our experience and let us guide you to your next real estate endeavor."</p>
                    <h2 className='text-[1.3rem] leading-[1rem] text-[#000000] font-semibold'>Major Jr. - CEO</h2>
                </div>
            </div>
        </section>
    )
}

export default CEO