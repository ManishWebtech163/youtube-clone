import { useState } from "react"
import PropTypes from 'prop-types'
import ErrorBox from "./ErrorBox"
import { numberFormate } from "src/utils/numberFormate"

const ViderActions = ({ videoDetails, detailsLoading, detailsError }) => {
    const [seeMore, setseeMore] = useState(false)
    if (detailsLoading) {
        return (
            <div>
                Loading
            </div>
        )
    }
    if (detailsError) {
        return (
            <div>
                <ErrorBox />
            </div>
        )
    }
    // --details--
    let details = videoDetails.items[0]
    return (
        <div className="mt-3">
            <h1 className="text-lg font-semibold">{details.snippet.title}</h1>
            <div className="mt-3 flex justify-between items-center">
                <div className="flex items-center">
                    {/* <img src={`${videoDetails.author?.avatar[0].url}`} alt="https://picsum.photos/200/300" className="w-10 h-10 rounded-full object-cover mr-3" /> */}
                    <div className="mr-3 lg:mr-5">
                        <p className="text-base flex items-center gap-1">{details.snippet.channelTitle}
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                                </svg>
                            </span>
                        </p>
                        {/* <p className="text-sm text-gray-400">{videoDetails.author?.stats.subscribersText}  </p> */}
                    </div>
                    <div>
                        <button className="bg-red-600 text-white text-base px-5 pb-2 pt-1 rounded-full">Subscribe</button>
                    </div>
                </div>
                <div className="text-black">
                    <div className="flex gap-3 ">
                        <div className="flex bg-gray-300 items-center rounded-full  overflow-hidden">
                            <span className="flex text-sm gap-1 p-2  px-3 cursor-pointer hover:bg-gray-400 border-r border-gray-400">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.633 10.5c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75A2.25 2.25 0 0116.5 4.5c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23H5.904M14.25 9h2.25M5.904 18.75c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 01-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 10.203 4.167 9.75 5 9.75h1.053c.472 0 .745.556.5.96a8.958 8.958 0 00-1.302 4.665c0 1.194.232 2.333.654 3.375z" />
                                </svg>
                                {numberFormate(details.statistics.likeCount)}
                            </span>
                            <span className=" p-2 pr-4 cursor-pointer hover:bg-gray-400">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 15h2.25m8.024-9.75c.011.05.028.1.052.148.591 1.2.924 2.55.924 3.977a8.96 8.96 0 01-.999 4.125m.023-8.25c-.076-.365.183-.75.575-.75h.908c.889 0 1.713.518 1.972 1.368.339 1.11.521 2.287.521 3.507 0 1.553-.295 3.036-.831 4.398C20.613 14.547 19.833 15 19 15h-1.053c-.472 0-.745-.556-.5-.96a8.95 8.95 0 00.303-.54m.023-8.25H16.48a4.5 4.5 0 01-1.423-.23l-3.114-1.04a4.5 4.5 0 00-1.423-.23H6.504c-.618 0-1.217.247-1.605.729A11.95 11.95 0 002.25 12c0 .434.023.863.068 1.285C2.427 14.306 3.346 15 4.372 15h3.126c.618 0 .991.724.725 1.282A7.471 7.471 0 007.5 19.5a2.25 2.25 0 002.25 2.25.75.75 0 00.75-.75v-.633c0-.573.11-1.14.322-1.672.304-.76.93-1.33 1.653-1.715a9.04 9.04 0 002.86-2.4c.498-.634 1.226-1.08 2.032-1.08h.384" />
                                </svg>
                            </span>
                        </div>
                        <div className="flex bg-gray-300 p-2 px-4  rounded-full text-sm gap-1 hover:bg-gray-400 cursor-pointer">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z" />
                            </svg>
                            <span>share</span>
                        </div>
                        <div className="flex bg-gray-300 p-2 px-4  rounded-full text-sm gap-1 hover:bg-gray-400 cursor-pointer">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3" />
                            </svg>

                            <span>download</span>
                        </div>
                        <div className="flex bg-gray-300 p-2 px-4  rounded-full text-sm gap-1 hover:bg-gray-400 cursor-pointer">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>

                            <span>thanks</span>
                        </div>
                        <div className="flex bg-gray-300 p-2 px-4  rounded-full text-sm gap-1 hover:bg-gray-400 cursor-pointer">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z" />
                            </svg>

                            <span>save</span>
                        </div>
                    </div>
                </div>
            </div>
            {/* ---captions--- */}
            <div className="rounded-lg bg-gray-500 mt-4 relative " style={{ height: seeMore ? "auto" : "125px", overflow: "hidden" }}>
                <div className=" p-3 rounded-lg ">
                    <div className="viwsRow flex flex-wrap gap-2 text-base">
                        <p>{numberFormate(details.statistics.viewCount)} views</p>
                        <p>23 hours ago</p>
                        <div className="tags flex flex-wrap gap-1 text-base opacity-60">
                            {details.snippet.tags?.slice(0, 10).map((e) => (
                                <span key={e}>#{e}</span>
                            ))}
                        </div>

                    </div>
                    <p className="dec text-sm mt-2">
                        {details.snippet.description}
                    </p>
                </div>

                {
                    !seeMore ?
                        <div className="absolute cursor-pointer bottom-0 text-black text-end px-2 text-base  w-full" style={{ background: " linear-gradient(257deg, rgba(255,255,255,1) 6%, rgba(254,254,254,0.09567577030812324) 93%)" }}>
                            <span onClick={() => setseeMore(true)}>See more</span>
                        </div>
                        :
                        <div className="cursor-pointer pb-2 text-end px-2 text-base  w-full" >
                            <span onClick={() => setseeMore(false)}>Show less</span>
                        </div>
                }
            </div>
        </div>
    )
}

// --
ViderActions.propTypes = {
    videoDetails: PropTypes.object, detailsLoading: PropTypes.bool, detailsError: PropTypes.bool
}

export default ViderActions