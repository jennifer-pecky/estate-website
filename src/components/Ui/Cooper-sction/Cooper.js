import React from 'react'
import img from '../../../Asset/images/cooper.png'
import { styles } from '../../../styles/styles.tailwind'

const Cooper = () => {
    const { globalPadding } = styles
    return (
        <section className={`${globalPadding} mx-auto `}>
            <div className='flex'>
                <div className='flex'>
                    <div className='bg-[#666666] h-[389px] transform translate-x-2/3 rounded-[8px] w-[237px] bottom-24 '></div>
                    <img className='w-[270px] h-[270px] image transform -translate-x-2/3 mt-20' src={img} alt="" />
                </div>

                <div className='w-[70%] flex flex-col space-y-5 p-3'>
                    <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est</p>
                </div>
            </div>
        </section>
    )
}

export default Cooper