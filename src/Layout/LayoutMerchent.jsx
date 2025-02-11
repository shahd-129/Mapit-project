import React from 'react'
import NavMerchent from '../Components/Navbar/NavMerchent'
import DrowerNavMerchent from '../View/DrowerNavMerchent'
import { Outlet } from 'react-router-dom'

export default function LayoutMerchent() {
    return (<>
    <NavMerchent/>
    <DrowerNavMerchent/>
         <Outlet/>
    </>
    )
}
