import ErrorBox from "@components/ErrorBox";
import LoadingBox from "@components/LoadingBox";
import MainLayout from "@components/MainLayout"
import { useNavigate, useParams } from "react-router-dom";
import { useGetSearchVideosQuery } from "src/store/query/searchVideos";

const VideosByCategories = () => {
    const { id } = useParams()
    const navigate = useNavigate()
    const { data, isLoading, isFetching, isError } = useGetSearchVideosQuery({
        maxResults: '20',
        q: `${id}`
    });




    return (
        <MainLayout>
            <div className="w-full">
                <h1 className="ps-4 text-3xl font-bold">New <span className="text-red-600"> {id} </span></h1>
                {isLoading || isFetching ? <div className="p-3"><LoadingBox /></div> : isError ? <div className="p-3"><ErrorBox /></div> :
                    <>
                        <div className="cards p-4 w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                            {
                                data?.items.map((e) => (
                                    <>
                                        {e.id.videoId && <div className="videocard w-full" key={e.etag}>
                                            <div className="imgBox rounded-md overflow-hidden cursor-pointer" onClick={() => navigate(`/watch/${e.id.videoId}`)}>
                                                <img src={e.snippet.thumbnails.high.url} alt="" className="w-full aspect-video" />
                                            </div>
                                            <div className="content flex p-2 ">
                                                <div className="info">
                                                    <h5 className="text-lg line-clamp-2">{e.snippet.title}</h5>
                                                    {/* <p className="text-sm opacity-70 mt-1">{details.author.title}</p> */}
                                                    {/* <p className="time text-sm opacity-70 mt-1"> */}
                                                    {/* <span>{details.stats.views <= 99 && details.stats.views} {details.stats.views > 99 && "99+ views"} </span> */}
                                                    {/* <span>{details.publishedTimeText}</span> */}
                                                    {/* </p> */}
                                                </div>
                                            </div>
                                        </div>}
                                    </>
                                ))
                            }
                        </div>
                    </>
                }
            </div>
        </MainLayout>
    )
}

export default VideosByCategories