import React, { useContext, useState } from 'react'
import { styles } from '../../../styles/styles.tailwind'
import { CARD__DATA } from "../../../Asset/Data/Data"
import Card from './Card'
import Agency from '../../Agency/Agency'
import { ModalContext } from '../../../Context/Modalcontext'
import HomeModal from '../../HomeModal/HomeModal'


const Listing = () => {
    const { homeModal, contactModal } = useContext(ModalContext)

    const cards = CARD__DATA.map(item => {
        return (
            <Card
                key={item.id}
                imgUrl={item.imgUrl}
                title={item.title}
                prize={item.prize}
                desc={item.desc}
                openSpots={item.openSpots}
                rentSpots={item.rentSpots}
                rating={item.rating}
                reviews={item.reviews}
                handleButtonClick={item.handleButtonClick}
            />
        )
    })

    const { globalPadding } = styles
    return (
        <section>
            {homeModal && <HomeModal />}
            {contactModal && <Agency />}
            {/* <div className={`${globalPadding} px-20`}>
                <div className='flex justify-between'>
                    <h1 className='font-bold text-4xl'>Featured Listings</h1>
                    <a href="#" className='text-[#EC522E] mt-1 '>
                        VIEW MORE
                        <hr className="w-[5.4rem] h-[0.1rem] rounded dark:bg-[#EC522E]"></hr>
                    </a>
                </div>
            
                <div className="flex max-w-full w-full gap-x-7">
                    {cards}
                </div>
            </div> */}

            {/* <Agency /> */}
        </section>
    )
}


export default Listing