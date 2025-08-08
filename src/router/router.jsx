import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import Layout from '../layout/layout'
import Home from '../pages/Home'
import Education from '../pages/education'
import News from '../pages/News'
import Rules from '../pages/Rules'
import Support from '../pages/Support'
import Training from '../pages/Training'

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/Education',
                element: <Education />
            },
            {
                path: '/Training',
                element: <Training />
            },
            {
                path: '/Rules',
                element: <Rules />
            },
            {
                path: '/News',
                element: <News />
            },
            {
                path: '/Support',
                element: <Support />
            }
        ]
    }
]) 