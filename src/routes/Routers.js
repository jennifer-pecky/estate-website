import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Home from '../pages/Home'
import Listing from '../pages/Listing'
import Gallery from '../pages/Gallery'
import About from '../pages/AboutUs'
import Contact from '../pages/Contact'



const Routers = () => {
    return (
        <Routes>
            <Route path='/' element={<Navigate to='/home' />} />
            <Route path='/home' element={<Home />} />
            <Route path='/listing' element={<Listing />} />
            <Route path='/gallery' element={<Gallery />} />
            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<Contact />} />
        </Routes>
    )
}

export default Routers