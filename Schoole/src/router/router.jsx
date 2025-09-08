import React, { Profiler } from 'react'
import { createBrowserRouter } from 'react-router-dom'
import Layout from '../layout/Layout'
import Home from '../pages/Home/Home'
import Education from '../pages/Education/Education'
import News from '../pages/News/News'
import Support from '../pages/Support/Support'
import Training from '../pages/Training/Training'
import Admin from '../pages/Admin/Admin'
import Users from '../pages/User/User'
import Album from '../pages/Album/Album'
import school from '../pages/School/School'
import Profile from '../pages/Profile/Profile'
import Employee from '../pages/Employee/Employee'
import Document from '../pages/Document/Document'
import Main from '../pages/Main/Main'
import Rules from '../pages/Rules/Rules'
import Value from '../pages/Value/value'
import Club from '../pages/Club/Club'
import FAQ from '../pages/FAQ/FAQ'
import Schoolhours from '../pages/SchoolHours/Schoolhours'
import Target from '../pages/Target/Target'
import History from '../pages/History/History'
import Information from '../pages/Information/Information'
import Schedule from '../pages/Schedule/schedule'
import Vacansy from '../pages/Vacansy/vacansy';
import Position from '../pages/Position/Position'
import School from '../pages/School/School'



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
                path: 'School',
                element: <School />
            },
            {
                path: 'Position',
                element: <Position />
            },
            {
                path: 'Users',
                element: <Users />
            },
            {
                path: 'Album',
                element: <Album />
            },
            {
                path: 'News',
                element: <News />
            },
            {
                path: 'Profile',
                element: <Profile />
            },
            {
                path: 'Employee',
                element: <Employee />
            },
            {
                path: 'Document',
                element: <Document />
            },
            {
                path: 'Main',
                element: <Main />
            },
            {
                path: 'Rules',
                element: <Rules />
            },
            {
                path: 'Value',
                element: <Value />
            },
            {
                path: 'Club',
                element: <Club />
            },
            {
                path: 'FAQ',
                element: <FAQ />
            },
            {
                path: 'Schoolhours',
                element: <Schoolhours />
            },
            {
                path: 'Target',
                element: <Target />
            },
            {
                path: 'History',
                element: <History />
            },
            {
                path: 'Information',
                element: <Information />
            },
            {
                path: 'Schedule',
                element: <Schedule />
            },
            {
                path: 'vacancy',
                element: <Vacansy />
            }
        ]
    }
]) 