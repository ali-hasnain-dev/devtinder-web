import axios from 'axios'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addUser } from '../utils/userSlice'
import { useNavigate } from 'react-router-dom'
import { BASE_URL } from '../utils/constants'

const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleLogin = async () => {
        try {
            const res = await axios.post(BASE_URL + '/login', {
                email, password
            }, {
                withCredentials: true
            });

            dispatch(addUser(res?.data?.data));
            navigate('/')
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className='flex justify-center mt-10'>
            <div className="card bg-base-100 w-96 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title">Login</h2>
                    <div>
                        <label className="form-control w-full max-w-xs">
                            <div className="label">
                                <span className="label-text">Email</span>
                            </div>
                            <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" className="input input-bordered w-full max-w-xs" />
                        </label>
                        <label className="form-control w-full max-w-xs">
                            <div className="label">
                                <span className="label-text">Password</span>
                            </div>
                            <input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Password" className="input input-bordered w-full max-w-xs" />
                        </label>
                    </div>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary" onClick={handleLogin}>Login</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login