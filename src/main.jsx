import { createRoot } from 'react-dom/client'
import App from './App.jsx'

import { MantineProvider } from '@mantine/core';
import { ModalsProvider } from '@mantine/modals';
import { Notifications } from '@mantine/notifications';
createRoot(document.getElementById('root')).render(
    <MantineProvider>
        <ModalsProvider>
            <App />
        </ModalsProvider>
    </MantineProvider>
)
