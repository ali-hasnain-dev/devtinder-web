import axios from 'axios'
import React, { useEffect } from 'react'
import { BASE_URL } from '../utils/constants'
import { useDispatch, useSelector } from 'react-redux'
import { addFeed } from "../utils/feedSlice";
import UserCard from './common/UserCard'

const Feed = () => {
    const feed = useSelector(store => store.feed)
    const dispatch = useDispatch()

    const getFeeds = async () => {
        if (feed) return;
        try {
            const feeds = await axios.get(BASE_URL + '/user/feed', { withCredentials: true });
            dispatch(addFeed(feeds?.data));
        } catch (error) {
            console.log(error);

        }

    }

    useEffect(() => {
        getFeeds();
    }, [])

    return (
        feed && <div className="flex justify-center mt-10">
            <UserCard user={feed[0]} />
        </div >

    )
}

export default Feed