import React from 'react'
import { Outlet } from 'react-router-dom'
import NavAuth from '../component/navbar/navAuth'

export default function LayoutAuth() {
  return (<>
  
  <NavAuth/>
 <Outlet/>
  
  </>
  )
}
