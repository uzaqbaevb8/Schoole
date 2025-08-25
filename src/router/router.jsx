import React, { Profiler } from 'react'
import { createBrowserRouter } from 'react-router-dom'
import Layout from '../layout/Layout'
import Home from '../pages/Home/Home'
import Education from '../pages/Education/Education'
import News from '../pages/News/News'
import Rules from '../pages/Rules/Rules'
import Support from '../pages/Support/Support'
import Training from '../pages/Training/Training'
import Admin from '../pages/Admin/Admin'
import Users from '../pages/User/User'
import Album from '../pages/Album/Album'
import school from '../pages/School/School'
import Profile from '../pages/Profile/Profile'
import Employee from '../pages/Employee/employee'
import Document from '../pages/Document/document'
import Main from '../pages/Main/main'


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
    },
    {
        path: '/admin',
        element: <Admin />,
        children: [
            {
                path: 'users',
                element: <Users />
            },
            {
                path: 'album',
                element: <Album />
            },
            {
                path: 'news',
                element: <News />
            },
            {
                path: 'profile',
                element: <Profile />
            },
            {
                path: 'employee',
                element: <Employee />
            },
            {
                path: 'document',
                element: <Document />
            },
            {
                path: 'main',
                element: <Main />
            },
            {
                path: 'rules',
                element: <Rules />
            }
        ]
    }
]) 