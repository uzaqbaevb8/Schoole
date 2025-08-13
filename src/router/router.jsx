import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import Layout from '../layout/Layout'
import Home from '../pages/Home/Home'
import Education from '../pages/Education/Education'
import News from '../pages/News/News'
import Rules from '../pages/Rules/Rules'
import Support from '../pages/Support/Support'
import Training from '../pages/Training/Training'

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