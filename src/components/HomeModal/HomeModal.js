import React, { useContext } from 'react'
import ReviewHome from './ReviewHome'
import img from '../../Asset/images/img-4.jpg'
import './HomeStyle.css'
import { ModalContext } from '../../Context/Modalcontext'

const HomeModal = () => {
    const { setHomeModal } = useContext(ModalContext)

    const handleModalClose = () => {
        setHomeModal(false)
    }
    return (
        <section className='absolute z-20' onClick={handleModalClose}>
            <div className='flex'>
                <div className='w-[630px] h-[650px] bg-[#00000040]'></div>
                <div className='max-w-full w-[683px] bg-[#fff] max-h-[600px] overflow-y-auto scroll pop-up'>
                    <div className='relative'>
                        <img src={img} alt="" className='w-[683px] h-[377px] max-w-full' />
                        <div className='absolute left-5 bg-[#fff] p-2 rounded-[20px] pl-5 font-bold bottom-[20rem] w-[7rem]'>Availble</div>
                        <div className='absolute right-7 bg-[#fff] p-[0.6rem] pl-5 rounded-[30px] w-[5rem] h-[2.6rem] font-bold bottom-[20rem]'>Sale</div>
                    </div>
                    <div className='p-2 space-y-3'>
                        <div className='flex justify-between'>
                            <h1 className='font-bold text-base tracking-wide'>4 Bedroom Duplex at Odili Road</h1>
                            <span className='text-[#EC522E] font-extrabold tracking-wide'>N50,000,000</span>
                        </div>
                        <h3 className='font-medium tracking-wide'>Odii Road, Port Harcourt, River State</h3>
                        <p className='Text-[30px] font-normal leading-relaxed'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem</p>

                        <div className='flex space-x-2'>
                            <button className='rounded-full tracking-wide text-xs border-[1px] font-semibold hover:bg-[#707070] border-[#707070] w-[96px] h-[40px]'>Watered</button>
                            <button className='rounded-full tracking-wide text-xs border-[1px] font-semibold hover:bg-[#707070] border-[#707070] w-[96px] h-[40px] whitespace-nowrap'>Car pack</button>
                            <button className='rounded-full tracking-wide text-xs border-[1px] font-semibold hover:bg-[#707070] border-[#707070] w-[96px] h-[40px] whitespace-nowrap'>Bar spot</button>
                            <button className='rounded-full tracking-wide text-xs border-[1px] font-semibold hover:bg-[#707070] border-[#707070] w-[144px] h-[40px] whitespace-nowrap'>Swimming pool</button>
                        </div>
                    </div>

                    <hr />
                    <ReviewHome />
                    <br />


                </div>
            </div>
        </section>
    )
}

export default HomeModal