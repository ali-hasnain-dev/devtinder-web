import React, { useEffect } from 'react'
import Navabr from './Navabr'
import { Outlet, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { addUser } from '../utils/userSlice'
import { BASE_URL } from '../utils/constants'

const Body = () => {
    const naviagte = useNavigate()
    const dispatch = useDispatch();
    const userData = useSelector(store => store.user)
    const checkAuth = async () => {
        try {
            const user = await axios.get(BASE_URL + '/profile', { withCredentials: true });
            console.log('user', user?.data);

            if (!user) {
                return naviagte('/login');
            }

            dispatch(addUser(user?.data));

        } catch (error) {
            if (error.status === 401) {
                return naviagte('/login');
            }

            console.log(error);
        }

    }

    useEffect(() => {
        if (!userData) {
            checkAuth()
        }
    }, [])

    return (
        <div className=''>
            <Navabr />
            <Outlet />
        </div>
    )
}

export default Body