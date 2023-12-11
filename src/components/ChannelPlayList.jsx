import { useGetChannelPlaylistByIdQuery } from "src/store/query/channelApis"
import LoadingBox from "./LoadingBox"

const ChannelPlayList = ({ channelId }) => {
    const { isLoading: playlistApiLoading, data: playlistData } = useGetChannelPlaylistByIdQuery({ channelId })
    console.log(playlistApiLoading, playlistData, "playlistApiLoading")
    let data = playlistData?.items
    if (playlistApiLoading) {
        return <LoadingBox />
    }
    return (
        <div>
            <hr className="mt-5 opacity-50" />
            <div className="my-3 lg:my-5 text-2xl capitalize" >
                playlist
            </div>
            {data?.map((e) => (
                <div className="videocard w-full flex mb-3 lg:mb-5" key={e.etag}>
                    <div className="imgBox rounded-md overflow-hidden cursor-pointer w-4/12" onClick={() => navigate(`/watch/${e.id.videoId}`)}>
                        <img src={e.snippet.thumbnails.high.url} alt="" className="w-full aspect-video object-cover" />
                    </div>
                    <div className="content flex p-2 ">
                        <div className="info">
                            <h5 className="text-lg line-clamp-2">{e.snippet.title}</h5>
                            <p className="text-sm opacity-90 mt-1">{e.contentDetails.itemCount} Items</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default ChannelPlayList