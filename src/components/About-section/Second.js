import React from 'react'
import { IoIosArrowForward } from 'react-icons/io'

const Second = () => {
  return (
    <section>
      <div className='px-20 bg-[#EFEFEF] mt-10'>
        <div className='p-12 flex space-x-[5rem]'>
          <p className='text-xl font-medium whitespace-nowrap'>Subscibe to our mailing list and be the first to <br /> know when a new feature or listing drops.</p>
          <div className='flex'>
            <input className='p-6 w-[370px] h-4 rounded-[8px] text-[#666666] font-medium' type="text" placeholder='Your Email' />
            <button className='w-[154px] h-[47px] hover:bg-[#666666] rounded-[4px] border-[#EC522E] border-2 bg-[#EC522E] text-[#fff]'>
              SUMBIT
            </button>
          </div>
        </div>
      </div>


      <div className='px-20'>
        <div className='flex mt-36 justify-between'>
          <h1 className='text-[40px] font-bold leading-tight whitespace-nowrap'>Meet our teams <br /> at your service</h1>
          <p className='Text-[30px] font-normal whitespace-nowrap leading-6 opacity-95'>At major General Real Estate Agency (MGREA), we value <br /> transparency, honesty and integrity. We believe that building <br /> long-term relationship with our cilents is the key to success. We <br /> are committed to providing our clients with the best possible <br />service amd experience.  </p>
        </div>

        <div className='flex space-x-20 px-14 mt-14 max-w-ful'>
          <div>
            <div className='w-[279px] h-[279px] bg-[#C4C4C4] rounded-[8px]'></div>
            <div className='flex flex-col items-center'>
              <h1>Major Jr.</h1>
              <h4>Chief Executive Officer</h4>
            </div>
          </div>
          <div>
            <div className='w-[279px] h-[279px] bg-[#C4C4C4] rounded-[8px]'></div>
            <div className='flex flex-col items-center'>
              <h1>Marvellous Major</h1>
              <h4>Creative Director</h4>
            </div>
          </div>
          <div>
            <div className='w-[279px] h-[279px] bg-[#C4C4C4] rounded-[8px]'></div>
            <div className='flex flex-col items-center'>
              <h1>John Elusiahu</h1>
              <h4>Field Agent</h4>
            </div>
          </div>
        </div>
      </div>

      <div className='px-20 mt-36 max-w-ful'>
        <div className='bg-[#EFEFEF] w-[1166px] h-[677px]'>
          <div className='text-center flex flex-col'>
            <h1 className='text-[45px] font-bold leading-tight mt-12'>Frequently asked  questions</h1>
            <p className='text-center font-normal'>We provide a complete serives for the sale, purchase or rental of real estate. we provide a complete, we <br /> provide a complete service for the sale. </p>
          </div>

          <div className='grid grid-cols-2 gap-x-8 gap-6 p-7  mt-14 max-w-ful'>
            <div className='w-[534px] h-[100px] p-8 bg-[#fff]'>
              <p className='flex items-center justify-between'>what services dose MGREA offer? <IoIosArrowForward /> </p>
            </div>
            <div className='w-[534px] h-[100px] p-8 bg-[#fff]'>
              <p className='flex items-center justify-between'>How long has MGREA been in business? <IoIosArrowForward /> </p>
            </div>
            <div className='w-[534px] h-[100px] p-8 bg-[#fff]'>
              <p className='flex items-center justify-between leading-6'>Dose MGREA only specilaize in residential <br /> properties ? <IoIosArrowForward /> </p>
            </div>
            <div className='w-[534px] h-[100px] p-8 bg-[#fff]'>
              <p className='flex items-center justify-between'>How much fee dose MGREA charges? <IoIosArrowForward /> </p>
            </div>
            <div className='w-[534px] h-[100px] p-8 bg-[#fff]'>
              <p className='flex items-center justify-between leading-6'>Can i trust MGREA to handle my property <br /> transactions? <IoIosArrowForward /> </p>
            </div>
            <div className='w-[534px] h-[100px] p-8 bg-[#fff]'>
              <p className='flex items-center justify-between leading-6'>Dose MGREA offer any guarantees on the <br /> properties they sell? <IoIosArrowForward /> </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Second