import React from 'react'
import ReactStars from "react-rating-stars-component"
import img from "../../Asset/images/Ellipse 6.png"

const Review = () => {

    const ratingChanged = (newRating) => {
        console.log(newRating)
    }

    return (
        <section>
            <div>
                <div className='flex justify-between p-5'>
                    <h1 className='font-black text-xl'>Reviews</h1>
                    <button className='w-[200px] border-[#EC522E] border-2 text-[#EC522E] p-2 hover:bg-[#666666] whitespace-nowrap'>WRITE A REVIEW</button>
                </div>

                <div className='space-y-7'>
                    <div className='flex space-x-3'>
                        <img src={img} alt="" className='h-[30%]' />
                        <div>
                            <h3>Johanna Emeka</h3>
                            <div className=''>
                                <ReactStars
                                    count={5}
                                    onChange={ratingChanged}
                                    size={24}
                                    activeColor="#ffd700"
                                />
                            </div>
                            <p className='Text-[30px] font-normal leading-relaxed'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem</p>
                        </div>
                    </div>

                    <div className='flex space-x-3'>
                        <img src={img} alt="" className='h-[30%]' />
                        <div>
                            <h3>Johanna Emeka</h3>
                            <div className=''>
                                <ReactStars
                                    count={5}
                                    onChange={ratingChanged}
                                    size={24}
                                    activeColor="#ffd700"
                                />
                            </div>
                            <p className='Text-[30px] font-normal leading-relaxed'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Review