import React from 'react'
import img from '../../../Asset/images/cooper.png'
import { styles } from '../../../styles/styles.tailwind'
import left from '../../../Asset/images/left.png'
import right from '../../../Asset/images/right.png'

const Cooper = () => {
    const { globalPadding } = styles
    return (
        <section className={`${globalPadding} mb-20`}>
            <div className='flex'>
                <div className='flex relative'>
                    <div className='text-8xl font-semibold text-[#fff] absolute left-[20rem] z-50 mt-2'>
                        “
                    </div>
                    <div className='bg-[#666666] h-[389px] transform translate-x-2/3 rounded-[8px] w-[237px] bottom-24 '></div>
                    <img className='w-[270px] h-[270px] image transform -translate-x-2/3 mt-20' src={img} alt="" />
                </div>

                <div className='w-[60%] flex flex-col mt-9 space-y-7'>
                    <p className='max-w-[90%] leading-tight tracking-wider font-normal text-[#000000]'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est</p>
                    <div className='flex space-x-[50%]'>
                        <div className='space-y-3 mt-10'>
                            <h2 className='text-[1.3rem] leading-[1rem] text-[#000000] font-bold'>Elijah Cooper</h2>
                            <h6 className='text-[#666666] text-[0.9rem]'>872 Douglas pass</h6>
                        </div>

                        <div className='flex space-x-5 mt-6 '>
                            <div className='w-[63px] h-[64px] border-[0.2px] hover:bg-[#666666]  border-[#707070] p-4 rounded-[8px]'>
                                <a href="">
                                    <img src={left} alt="" />
                                </a>
                            </div>

                            <div className='w-[64px] h-[64px] border-2 p-4 hover:bg-[#666666] rounded-[8px] bg-[#EC522E]'>
                                <a href="">
                                    <img src={right} alt="" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </section>
    )
}

export default Cooper