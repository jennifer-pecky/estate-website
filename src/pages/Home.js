import React from 'react'
import Hero from '../components/Ui/Hero-section/Hero'
import Listing from '../components/Ui/Card-section/Listing'
import Cooper from '../components/Ui/Cooper-sction/Cooper'
import Images from '../components/Ui/Gallary-section/Images'
import Header from '../components/Header/Header'

const Home = () => {
    return (
        <>
            <Header />
            <Hero />
            <Listing />
            <Cooper />
            <Images />
        </>
    )
}

export default Home