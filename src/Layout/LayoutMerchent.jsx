import React from 'react'
import NavMerchent from '../Components/Navbar/NavMerchent'
import DrowerNavMerchent from '../Components/DrowerNavMerchent'
import Merchent from '../Components/Merchent'
import { Outlet } from 'react-router-dom'

export default function LayoutMerchent() {
    return (<>
    <NavMerchent/>
    <DrowerNavMerchent/>
         <Outlet/>
    </>
    )
}
