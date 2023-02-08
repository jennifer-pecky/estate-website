import React from 'react'

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
        <div className='flex mt-36 space-x-24'>
          <h1 className='text-[60px] font-bold leading-tight whitespace-nowrap'>Meet our teams <br /> at your service</h1>
          <p className='Text-[30px] font-normal whitespace-nowrap leading-loose'>At major General Real Estate Agency (MGREA), we value <br /> transparency, honesty and integrity. We believe that building <br /> long-term relationship with our cilents is the key to success. We <br /> are committed to providing our clients with the best possible <br />service amd experience.  </p>
        </div>

        <div className='flex space-x-20 px-14 mt-14'>
          <div>
            <div className='w-[279px] h-[279px] bg-[#C4C4C4] rounded-[8px]'></div>
            <h1>Major Jr.</h1>
            <h4>Chief Executive Officer</h4>
          </div>
          <div>
            <div className='w-[279px] h-[279px] bg-[#C4C4C4] rounded-[8px]'></div>
            <h1>Major Jr.</h1>
            <h4>Chief Executive Officer</h4>
          </div>
          <div>
            <div className='w-[279px] h-[279px] bg-[#C4C4C4] rounded-[8px]'></div>
            <h1>Major Jr.</h1>
            <h4>Chief Executive Officer</h4>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Second