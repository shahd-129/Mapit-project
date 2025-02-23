import React from 'react'
import NavMerchent from '../Components/Navbar/NavMerchent'
import DrowerNavMerchent from '../View/DrowerNavMerchent'
import { Outlet } from 'react-router-dom'
import { Container, Toolbar } from '@mui/material'

export default function LayoutMerchent() {
    return (<>
    <NavMerchent/>
    <DrowerNavMerchent/>
    <Toolbar />
    <Container sx={{mt:15 , mb:5}}>
         <Outlet/>

    </Container>
    </>
    )
}
