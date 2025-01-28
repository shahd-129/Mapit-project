import React from 'react'
import { About, Navbar, Home, Solutions, FAQs, Supporting, Footer } from '../Components'

export default function Layout() {
    return (<>
    <Navbar/>
    <Home/>
    <Solutions/>
    <About/>
    <Supporting/>
    <FAQs/>
    <Footer/>
    </>
    )
}
