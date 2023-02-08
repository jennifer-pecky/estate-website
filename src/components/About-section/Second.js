import React from 'react'

const Second = () => {
  return (
    <section className=''>
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
    </section>
  )
}

export default Second