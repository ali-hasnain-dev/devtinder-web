import axios from 'axios'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { BASE_URL } from '../utils/constants'
import { useNavigate } from 'react-router-dom'
import { removeUser } from '../utils/userSlice'

const Navabr = () => {
    const user = useSelector(store => store.user)
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const handleLogout = async () => {
        try {
            const res = await axios.post(BASE_URL + '/logout', {}, { withCredentials: true });
            if (res.status === 200) {
                dispatch(removeUser());
                navigate('/login');
            }

        } catch (error) {
            console.log(error);

        }
    }

    return (
        <div className="navbar bg-base-200 dark:bg-base-300 px-4 md:px-8 lg-px-16">
            <div className="flex-1">
                <a className="btn btn-ghost text-xl">Devtinder💻</a>
            </div>
            {
                user && (
                    <div className="flex-none">
                        <p className='text-sm font-semibold'>Welcome, {user.firstName}</p>
                        <div className="dropdown dropdown-end">
                            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full">
                                    <img
                                        alt="Tailwind CSS Navbar component"
                                        src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                                </div>
                            </div>
                            <ul
                                tabIndex={0}
                                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                                <li>
                                    <a className="justify-between">
                                        Profile
                                        <span className="badge">New</span>
                                    </a>
                                </li>
                                <li><a>Settings</a></li>
                                <li className='text-red-500 cursor-pointer ml-3' onClick={handleLogout}>Logout</li>
                            </ul>
                        </div>
                    </div>
                )
            }

        </div>
    )
}

export default Navabr