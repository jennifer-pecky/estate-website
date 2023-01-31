import React from 'react'
import '@splidejs/splide/dist/css/splide.min.css';
import { Splide, SplideSlide } from '@splidejs/react-splide'
import img1 from '../../../Asset/images/img-4.jpg'
import img2 from '../../../Asset/images/img-5.jpg'
import img4 from '../../../Asset/images/img-7.jpg'
import img5 from '../../../Asset/images/img-8.jpg'
import img6 from '../../../Asset/images/img-9.jpg'

const Slide = () => {
    return (
        <div className='w-[1036px] mb-52'>
            <Splide options={{ rewind: true, gap: '1rem', }}>
                <SplideSlide>
                    <img src={img1} alt="Image 1" />
                </SplideSlide>
                <SplideSlide>
                    <img src={img2} alt="Image 2" />
                </SplideSlide>
                <SplideSlide className='h-[585px]'>
                    <img src={img4} alt="Image 3" />
                </SplideSlide>
                <SplideSlide className='h-[585px]'>
                    <img src={img5} alt="Image 3" />
                </SplideSlide>
                <SplideSlide className='h-[585px]'>
                    <img src={img6} alt="Image 3" />
                </SplideSlide>
            </Splide>
        </div>
    )
}

export default Slide