import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import {AuthLayout ,Layout , LayoutMerchent } from '../layout'
import { Login, Register } from '../auth'
import { Merchent , Starred , Warehouse} from '../view'
import Guard from '../component/guard'


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
            } , 
            {path:"starred" , element:<Guard><Starred/></Guard>},
            {path:"warehouse" , element:<Guard><Warehouse/></Guard>}
        
        ]
        },
    ])
    return (
        <RouterProvider router={router} />
    )
}
