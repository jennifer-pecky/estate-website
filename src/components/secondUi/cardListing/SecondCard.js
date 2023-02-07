import React from 'react'
import './CardListing'
import ReactStars from "react-rating-stars-component"
import { render } from "react-dom"

const SecondCard = ({ imgUrl, title, desc, openSpots, rentSpots, prize, rating, reviews }) => {
    let badgeText
    if (openSpots === 2) {
        badgeText = "Available"
    } else if (rentSpots === "Lease") {
        badgeText = "lease"
    }

    const ratingChanged = (newRating) => {
        console.log(newRating)
    }
    return (
        <section className='max-w-[100%] mx-5 relative'>
            <div className='flex flex-col mt-5 mb-9 w-full h-[650px] border-2 border-[#707070] rounded-[8px] space-y-2'>
                <img src={`/images/${imgUrl}`} alt="" className='w-[390px] h-[340px] cursor-pointer' />
                {badgeText && <div className='absolute left-5 bg-[#fff] p-2 rounded-[20px] font-bold'>{badgeText}</div>}
                {badgeText && <div className='absolute right-7 bg-[#fff] p-[0.6rem] pl-4 rounded-[30px] w-[5rem] h-[2.6rem] font-bold'>{rentSpots}</div>}
                <div className='px-7'>
                    <p className='font-bold text-base tracking-wide'>{title}</p>
                    <p className='text-[#EC522E] font-extrabold tracking-wide'>{prize}</p>
                    <p className='font-medium tracking-wide'>{desc}</p>
                    <div className='grid grid-cols-3 relative'>
                        <button className='rounded-full tracking-wide text-xs border-[1px] font-semibold hover:bg-[#707070] border-[#707070] w-[96px] h-[40px]'>Watered</button>
                        <button className='rounded-full tracking-wide text-xs border-[1px] font-semibold whitespace-nowrap hover:bg-[#707070] border-[#707070] w-[96px] h-[40px]'>Car pack</button>
                        <button className='mt-1 tracking-wide rounded-full text-xs border-[1px] font-semibold hover:bg-[#707070] border-[#707070] w-[96px] h-[40px]'>Bar spot</button> <br />
                        <button className='whitespace-nowrap tracking-wide rounded-full text-xs border-[1px] font-semibold hover:bg-[#707070] border-[#707070] w-[144px] h-[40px] absolute top-12'>Swimming pool</button>
                    </div>
                    <div className='flex space-x-4 '>
                        <div className='mt-8'>
                            <ReactStars
                                count={5}
                                onChange={ratingChanged}
                                size={24}
                                activeColor="#ffd700"

                            />
                        </div>
                        <p className='text-[#666666] font-[30px] text-[13px] mt-9'>{rating}</p>
                        <h4 className='text-[#666666] font-[30px] text-[13px] mt-[2.8rem]'>{reviews}</h4>
                    </div>
                    <div className='flex space-x-3'>
                        <button className='text-sm  font-semibold mt-2 rounded-[6px] w-[95px] h-[42px] hover:bg-[#707070] text-[#EC522E] border-2 border-[#EC522E]'>VIEW</button>
                        <button className='text-sm  font-semibold mt-2 rounded-[6px] w-[200px] h-[42px] hover:bg-[#707070] text-[#fff] border-2 border-[#EC522E] bg-[#EC522E]'>CONTACT FOR INSPECTION</button>
                    </div>

                </div>


            </div>
        </section>
    )
}

export default SecondCard