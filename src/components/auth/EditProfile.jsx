import axios from 'axios'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { BASE_URL } from '../../utils/constants'
import { addUser } from '../../utils/userSlice'

const EditProfile = ({ user }) => {
    const [firstName, setFirstName] = useState(user?.firstName)
    const [lastName, setLastName] = useState(user?.lastName)
    const [age, setAge] = useState(user?.age)
    const [gender, setGender] = useState(user?.gender)
    const [about, setAbout] = useState(user?.about)
    const [photoUrl, setPhotoUrl] = useState(user?.photoUrl)
    const dispatch = useDispatch()

    const handleEditProfile = async () => {
        try {
            const res = await axios.patch(BASE_URL + '/profile/edit', {
                firstName,
                lastName,
                age,
                gender,
                about,
                photoUrl
            }, {
                withCredentials: true
            })

            dispatch(addUser(res?.data?.data));
        } catch (error) {
            console.log(error);

        }
    }

    return (
        <div className='flex justify-center mt-10'>
            <div className="card bg-base-100 w-96 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title">Edit Profile</h2>
                    <div className='flex justify-center items-center cursor-pointer'>
                        <div className="avatar">
                            <div className="w-24 rounded-full">
                                <img src={photoUrl ? photoUrl : "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"} />
                            </div>
                        </div>
                    </div>
                    <div>
                        <label className="form-control w-full max-w-xs">
                            <div className="label">
                                <span className="label-text">First Name</span>
                            </div>
                            <input type="text" value={firstName} onChange={e => setFirstName(e.target.value)} className="input input-bordered w-full max-w-xs" />
                        </label>
                    </div>
                    <div>
                        <label className="form-control w-full max-w-xs">
                            <div className="label">
                                <span className="label-text">Last Name</span>
                            </div>
                            <input type="text" value={lastName} onChange={e => setLastName(e.target.value)} className="input input-bordered w-full max-w-xs" />
                        </label>
                    </div>
                    <div>
                        <label className="form-control w-full max-w-xs">
                            <div className="label">
                                <span className="label-text">Age</span>
                            </div>
                            <input type="text" value={age} onChange={e => setAge(e.target.value)} className="input input-bordered w-full max-w-xs" />
                        </label>
                    </div>
                    <div>
                        <label className="form-control w-full max-w-xs">
                            <div className="label">
                                <span className="label-text">Gender</span>
                            </div>
                            <select className="select select-bordered w-full max-w-xs" alue={gender} onChange={e => setGender(e.target.value)}>
                                <option>Male</option>
                                <option>Female</option>
                                <option>Other</option>
                            </select>
                        </label>
                    </div>
                    <div>
                        <label className="form-control w-full max-w-xs">
                            <div className="label">
                                <span className="label-text">About</span>
                            </div>
                            <textarea
                                placeholder="Bio"
                                className="textarea textarea-bordered textarea-md w-full max-w-xs resize-none" rows={5} value={about} onChange={e => setAbout(e.target.value)}></textarea>
                        </label>
                    </div>
                    <div>
                        <label className="form-control w-full max-w-xs">
                            <div className="label">
                                <span className="label-text">PhotoUrl</span>
                            </div>
                            <input type="text" value={photoUrl} onChange={e => setPhotoUrl(e.target.value)} className="input input-bordered w-full max-w-xs" />
                        </label>
                    </div>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary" onClick={handleEditProfile}>Save Changes</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EditProfile