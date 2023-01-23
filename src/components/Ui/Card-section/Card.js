import React from 'react'
import { styles } from '../../../styles/styles.tailwind'
import img from "../../../Asset/images/png.png"


const Card = () => {
    const { globalPadding } = styles
    return (
        <section className={`${globalPadding} px-20`}>
            <div className='flex justify-between'>
                <h1 className='font-bold text-4xl'>Featured Listings</h1>
                <a href="#" className='text-[#EC522E] mt-1 -space-y-8'>
                    VIEW MORE
                    <hr class="w-[5.4rem] h-[0.1rem] rounded dark:bg-[#EC522E]"></hr>
                </a>
            </div>

            <div className=''>
                <img src={img} alt="" />
                <div className=''>
                    <p>4 Bedroom Duplex at Odili Road</p>
                    <span>N50,000,000</span>
                    <p>Odili Road, Port Harcourt,Rivers State</p>
                </div>
                <div>
                    <button>Watered</button>
                    <button>Car pack</button>
                    <button>Bar spot</button> <br />
                    <button>Swimming pool</button>
                </div>

                <div>
                    <button>VIEW</button>
                    <button>CONTACT</button>
                </div>
            </div>
        </section>
    )
}

export default Card