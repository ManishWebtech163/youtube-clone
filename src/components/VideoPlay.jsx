
"use client";
import PropTypes from 'prop-types'
import ReactPlayer from 'react-player'
import LoadingBox from './LoadingBox'
import { useUser } from '@clerk/clerk-react';
import { useRef, useState } from 'react';
import { NavLink } from 'react-router-dom';

const VideoPlay = ({ data, isLoading }) => {
    const videoRef = useRef()
    const { isSignedIn } = useUser();

    const [loginPopup, setloginPopup] = useState(false)

    // --checkLogin--
    const checkLogin = () => {
        if (videoRef.current && videoRef.current.getInternalPlayer) {
            setTimeout(() => {
                if (!isSignedIn) {
                    videoRef.current.getInternalPlayer().stopVideo();
                    setloginPopup(true)
                }
            }, 2000);
        }
    }


    // ----------------------------------------
    if (isLoading) {
        return (
            <LoadingBox />
        )
    }

    return (
        <div className='videoPlayer rounded-lg overflow-hidden relative aspect-video'>
            <ReactPlayer ref={videoRef} url={`https://www.youtube.com/embed/${data.items[0]?.id}?si=mRqA6yB2eHfWhdxG`} controls width="100%" height="auto" style={{ aspectRatio: "16/9" }} onPlay={checkLogin} />
            {loginPopup && <div className='w-full h-full bg-[rgba(0,0,0,0.7)] flex items-center justify-center flex-col absolute top-0 z-30 p-3 lg:p-5'>
                <h2 className='text-3xl mb-3 capitalize max-w-sm text-center font-semibold'>Watch for video please first sign in or sign up</h2>
                <NavLink to={"/sign-in/*"} className="bg-red-700 p-2 px-10 rounded-full text-base">Sign In</NavLink>
            </div>}
        </div>
    )
}

VideoPlay.propTypes = {
    data: PropTypes.object,
    isLoading: PropTypes.bool,
}

export default VideoPlay