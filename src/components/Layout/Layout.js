import React from 'react'
import NavLinks from '../NavLinks/NavLinks'
import Footer from '../Footer/Footer'
import Routers from '../../routes/Routers'

const Layout = () => {
    return (
        <>
            <NavLinks />
            <div>
                <Routers />
            </div>
            <Footer />
        </>

    )
}

export default Layout