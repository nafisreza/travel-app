'use client'

import Sidebar from './_sidebar/sidebar'
import Navbar from './_navbar/navbar'
import { OnlyChildrenProps } from './layout'
import { useState } from 'react'
import { LocationProvider } from './contexts/LocationContext'
import { Provider } from 'react-redux';
// import store from './store-old/store'
import store from './store/store'

export default function App({ children }: OnlyChildrenProps) {
    const [open, setopen] = useState<boolean>(true)
    const handleSidebar = () => { setopen(!open) }

    return (
        <Provider store={store}>
        <div className={["flex"].join(" ")}>
            {open && <Sidebar open={open} />}
            <div className='flex-grow'>
                <Navbar open={open} handleSidebar={handleSidebar} />
                {children}
            </div>
        </div>
        </Provider>
    )
}
