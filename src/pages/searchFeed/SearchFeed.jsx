import LoadingBox from "@components/LoadingBox";
import MainLayout from "@components/MainLayout"
import { useNavigate, useParams } from "react-router-dom";
import { useGetSearchVideosQuery } from "src/store/query/searchVideos";

const SearchFeed = () => {
    const { id } = useParams()
    const navigate = useNavigate()
    const { data, isLoading, isFetching } = useGetSearchVideosQuery({
        maxResults: '20',
        q: `${id}`
    });

    console.log(isLoading, isFetching, "isLoading")
    return (
        <MainLayout>
            <div className=" w-full h-full overflow-auto">
                <h1 className="ps-4 text-3xl font-bold">Search <span className="text-red-600"> {id} </span></h1>
                <div className="searchBoxes p-4">
                    {
                        isLoading || isFetching ? <div><LoadingBox /></div>
                            :
                            data?.items.map((e) => (
                                <div className="videocard w-full flex mb-3 lg:mb-5" key={e.etag}>
                                    <div className="imgBox rounded-md overflow-hidden cursor-pointer w-4/12" onClick={() => navigate(`/watch/${e.id.videoId}`)}>
                                        <img src={e.snippet.thumbnails.high.url} alt="" className="w-full aspect-video object-cover" />
                                    </div>
                                    <div className="content flex p-2 ">
                                        <div className="info">
                                            <h5 className="text-lg line-clamp-2">{e.snippet.title}</h5>
                                            <p className="text-sm opacity-90 mt-1">{e.snippet.description}</p>
                                            <p className="time text-sm opacity-70 mt-1">
                                                <span>{e.snippet.publishTimes}</span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))
                    }

                </div>
            </div>
        </MainLayout>
    )
}

export default SearchFeed