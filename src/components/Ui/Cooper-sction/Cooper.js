import React from 'react'
import img from '../../../Asset/images/cooper.png'
import { styles } from '../../../styles/styles.tailwind'

const Cooper = () => {
    const { globalPadding } = styles
    return (
        <section className={`${globalPadding} mx-auto `}>
            <div className='flex'>
                <div className='bg-[#666666] h-[389px] transform translate-x-2/3 rounded-[8px] w-[237px] bottom-24 '></div>
                <img className='w-[270px] h-[270px] image transform -translate-x-2/3 mt-20' src={img} alt="" />
            </div>
        </section>
    )
}

export default Cooper