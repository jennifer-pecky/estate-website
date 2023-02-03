import React from 'react'
import Hero from '../components/Ui/Hero-section/Hero'
import Listing from '../components/Ui/Card-section/Listing'
import Cooper from '../components/Ui/Cooper-sction/Cooper'
import Gallery from '../components/Ui/Gallary-section/Gallery'

const Home = () => {
    return (
        <>
            <Hero />
            <Listing />
            <Cooper />
            <Gallery />
        </>
    )
}

export default Home