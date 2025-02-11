import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import AuthLayout from '../Layout/LayoutAuth'
import Layout from '../Layout/Layout'
import { Login, Register } from '../Auth'
import LayoutMerchent from '../Layout/LayoutMerchent'
import Merchent from '../Components/Merchent'
import Starred from '../Components/Starred'
import Guard from '../Components/Guard'


export default function Routes() {
    let router = createBrowserRouter([
        {
            path: "/auth", element: <AuthLayout />,
            children:
                [{ path: "signup", element:<Guard><Register /></Guard>  },

                { path: "login", element: <Login />  }
                ]
        },
        {
            path: "/",
            element: <Layout />,
        },
        {
            path: "/merchent",
            element: <LayoutMerchent />, children:[{
                path:"inbox" , element:<Guard><Merchent/></Guard>
            } , {path:"starred" , element:<Guard><Starred/></Guard>} ]
        },
    ])
    return (
        <RouterProvider router={router} />
    )
}
