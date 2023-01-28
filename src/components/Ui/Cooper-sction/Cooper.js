import React from 'react'
import img from '../../../Asset/images/cooper.png'
import { styles } from '../../../styles/styles.tailwind'

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
                    <p className='max-w-[90%] leading-loose tracking-wider font-normal'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est</p>
                    <div>
                        <h2 className='text-[1.3rem] leading-[1rem] text-[#000000] font-bold'>Elijah Cooper</h2>
                        <h6>872 Douglas pass</h6>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Cooper