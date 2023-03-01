import React, { useContext } from 'react'
import { ModalContext } from '../../Context/Modalcontext'

const Agency = () => {
    const { setContactModal } = useContext(ModalContext)

    const handleContactModal = () => {
        setContactModal(false)
    }

    return (
        <section className='fixed z-20' onClick={handleContactModal}>
            <div className='flex'>
                <div className='w-[640px] h-[600px] bg-[#00000040]'></div>
                <div className='bg-[#fff] p-[1.3rem] space-y-4'>

                    <h1 className='font-bold'>Contact Agency</h1>
                    <hr className='w-[90%] ' />

                    <p>Good to know that you are progress in purchasing of the listed property, kindly <br /> provide the necessary details and let us know in the message if you have any <br /> question or specification in mind.</p>

                    <div className='flex'>
                        <div className='flex w-[670px]'>
                            <div className=''>
                                <form action="/action_page-php" className='space-y-5'>
                                    <div className='space-x-4'>
                                        <input className='p-4 w-[289px] border-[0.5px] border-[#707070] rounded-[8px]' type="text" placeholder='Your Name' />
                                        <input className='p-4 w-[289px] border-[0.5px] border-[#707070] rounded-[8px]' type="text" placeholder='Your Email' />
                                    </div>
                                    <input className='p-4 w-[590px]  border-[0.5px] border-[#707070] rounded-[8px]' type="text" placeholder='Phone Number (WhatsApp Number if avaiable)' />
                                    <input className=' w-[590px] h-[166px] px-2 border-[1px]  border-[#707070]  rounded-[8px]' type="text" placeholder='Your Questions or Message' />
                                </form>
                                <button className='w-[147px] h-[55px] ml-[67%] mt-4 hover:bg-[#666666] rounded-[4px] border-[#EC522E] border-2 bg-[#EC522E] text-[#fff] font-semibold'>Send</button>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Agency