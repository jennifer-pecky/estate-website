import React from 'react'
import img from '../../Asset/images/img-4.jpg'
import '../../Asset/styles/styles.css'
const Modals = ({ handleOpenModal }) => {
    return (
        <section className='fixed z-20' onClick={handleOpenModal}>
            <div className='flex'>
                <div className='w-[640px] h-[768px] bg-[#00000040]'></div>
                <div className='max-w-full bg-[#fff] max-h-[760px] overflow-y-scroll scroll pop-up'>
                    <img src={img} alt="" className='w-[683px] h-[377px] max-w-full' />
                    <div className='flex justify-between'>
                        <h1>4 Bedroom Duplex at Odili Road</h1>
                        <span>N50,000,000</span>
                    </div>
                    <h3>Odii Road, Port Harcourt, River State</h3>
                    <p className='Text-[30px] font-medium leading-normal w-[683px] h-[377px]'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod  tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero  eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet,  consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est</p>


                </div>
            </div>
        </section>

    )
}

export default Modals


// <div className='flex'>
// <button className='rounded-full tracking-wide text-xs border-[1px] font-semibold hover:bg-[#707070] border-[#707070] w-[96px] h-[40px]'>Watered</button>
// <button className='rounded-full tracking-wide text-xs border-[1px] font-semibold hover:bg-[#707070] border-[#707070] w-[96px] h-[40px] whitespace-nowrap'>Car pack</button>
// <button className='rounded-full tracking-wide text-xs border-[1px] font-semibold hover:bg-[#707070] border-[#707070] w-[96px] h-[40px] whitespace-nowrap'>Bar spot</button>
// <button className='rounded-full tracking-wide text-xs border-[1px] font-semibold hover:bg-[#707070] border-[#707070] w-[144px] h-[40px] whitespace-nowrap'>Swimming pool</button>
// </div>