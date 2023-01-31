import React from 'react'
import { styles } from '../../../styles/styles.tailwind'
import { CARD__DATA } from "../../../Asset/Data/Data"
import Card from './Card'


const Listing = () => {
    const cards = CARD__DATA.map(item => {
        return (
            <Card
                key={item.id}
                imgUrl={item.imgUrl}
                title={item.title}
                prize={item.prize}
                desc={item.desc}
                openSpots={item.openSpots}
            />
        )
    })

    const { globalPadding } = styles
    return (
        <div className={`${globalPadding} px-20`}>
            <div className='flex justify-between'>
                <h1 className='font-bold text-4xl'>Featured Listings</h1>
                <a href="#" className='text-[#EC522E] mt-1 '>
                    VIEW MORE
                    <hr className="w-[5.4rem] h-[0.1rem] rounded dark:bg-[#EC522E]"></hr>
                </a>
            </div>
            {/* card */}
            <div className="flex max-w-full w-full gap-x-10">
                {cards}
            </div>
        </div>
    )
}


export default Listing