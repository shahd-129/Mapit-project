import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import AuthLayout from '../Layout/LayoutAuth'
import Layout from '../Layout/Layout'
import { Login, Register } from '../Auth'


export default function Routes() {
    let router = createBrowserRouter([
        {
            path: "/auth", element: <AuthLayout />,
            children:
                [{ path: "signup", element: <Register /> },

                { path: "login", element: <Login /> }
                ]
        },
        {
            path: "/",
            element: <Layout />,
        },
    ])
    return (
        <RouterProvider router={router} />
    )
}
