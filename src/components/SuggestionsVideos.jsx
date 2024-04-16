import { useNavigate } from "react-router-dom"
import { timeFormat, timeFormat2 } from "src/utils/timeFormate"
import ErrorBox from "./ErrorBox"
import { numberFormate } from "src/utils/numberFormate"
import PropTypes from 'prop-types'


const SuggestionsVideos = ({ videoRelatedData, relatedDataLoading, relatedError }) => {
    console.log(videoRelatedData, "videoRelatedData")
    const navigate = useNavigate()
    if (relatedDataLoading) {
        return (
            <p>loading</p>
        )
    }

    if (relatedError) {
        return (
            <div>
                <ErrorBox />
            </div>
        )
    }
    return (
        <div className="boxes pt-3">
            {videoRelatedData.items.map((e) => (
                <div className="box flex gap-2 mb-5 cursor-pointer" key={e.id} onClick={() => navigate(`/watch/${e.id}`)}>
                    <div className="imgBox w-5/12 aspect-video rounded-lg overflow-hidden relative">
                        <img src={`${e.snippet.thumbnails.medium.url}`} alt="" className="w-full h-full" />
                        <span className="absolute bottom-2 right-2 bg-black text-white text-xs px-1 font-bold rounded-md">{timeFormat(e.lengthSeconds)}</span>
                    </div>
                    <div className="info w-7/12">
                        <p className="title line-clamp-2 text-base">
                            {e.snippet.title}
                        </p>
                        <div className="author mt-1 flex items-center gap-1 text-sm capitalize">
                            <p className="name line-clamp-1">
                                {e.snippet.channelTitle}
                            </p>
                            {/* {e.author.badges[0]?.text === "Verified"
                                &&
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-3 h-3">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                                    </svg>
                                </span>
                            } */}
                        </div>
                        <div className="viws flex  text-sm gap-2 opacity-80">
                            <p>{numberFormate(e.statistics.viewCount)} views</p>
                            <p>{timeFormat2(e.snippet.publishedAt)} Ago</p>
                        </div>
                    </div>
                </div>
            ))}

        </div>
    )
}

// --
SuggestionsVideos.propTypes = {
    videoRelatedData: PropTypes.object, relatedDataLoading: PropTypes.bool, relatedError: PropTypes.bool
}

export default SuggestionsVideos