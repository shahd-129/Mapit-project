import React from 'react'
import { Outlet } from 'react-router-dom'
import NavAuth from '../Components/Navbar/NavAuth'

export default function LayoutAuth() {
  return (<>
  
  <NavAuth/>
 <Outlet/>
  
  </>
  )
}
