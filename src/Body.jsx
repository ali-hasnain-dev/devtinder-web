import React from 'react'
import Navabr from './Navabr'
import { Outlet } from 'react-router-dom'

const Body = () => {
    return (
        <div className=''>
            <Navabr />
            <Outlet />
        </div>
    )
}

export default Body