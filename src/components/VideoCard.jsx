import PropTypes from 'prop-types'; // ES6
import { useNavigate } from "react-router-dom"


const VideoCard = ({ details }) => {
    const navigate = useNavigate()
    return (
        <div className="videocard w-full">
            <div className="imgBox rounded-md overflow-hidden cursor-pointer" onClick={() => navigate(`/watch/${details.id}`)}>
                <img src={details.snippet.thumbnails.high.url} alt="" className="w-full aspect-video" />
            </div>
            <div className="content flex p-2 gap-2" onClick={() => navigate(`/channel/${details.snippet.channelId}`)}>
                <div className="authorImg mt-2 w-10">
                    {/* <img src={details.author.avatar[0].url} alt="" className="w-full  rounded-full border border-gray-100" /> */}
                </div>
                <div className="info">
                    <h5 className="text-lg line-clamp-2">{details.snippet.title}</h5>
                    <p className="text-sm opacity-70 mt-1">{details.snippet.channelTitle}</p>
                    <p className="time text-sm opacity-70 mt-1">
                        <span>{details.statistics.viewCount <= 99 && details.statistics.viewCount} {details.statistics.viewCount > 99 && "99+ views"} </span>
                        <span>{details.snippet.publishedAt}</span>
                    </p>
                </div>
            </div>
        </div>
    )
}

VideoCard.propTypes = {
    details: PropTypes.object
}

export default VideoCard