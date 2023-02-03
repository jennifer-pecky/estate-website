import React from 'react'
import Img from "../../Asset/images/Rectangle 2.png"



const Header = () => {
    return (
        <section className=' relative'>
            <div className=''>
                <div className='bg-[#666666] w-[548px] h-[543px] -right-7 absolute'></div>
                <img src={Img} alt="" className=' absolute top-[6rem] right-[5rem]' />
            </div>
        </section>
    )
}

export default Header
