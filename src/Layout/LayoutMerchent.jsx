import React from 'react'
import NavMerchent from '../component/navbar/navMerchent'
import DrowerNavMerchent from '../view/drowerNavMerchent'
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
