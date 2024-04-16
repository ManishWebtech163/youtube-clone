import ErrorBox from "@components/ErrorBox"
import LoadingBox from "@components/LoadingBox"
import MainLayout from "@components/MainLayout"
import VideoCard from "@components/VideoCard"
import { useRef, useState } from "react"
import { useGetVideosQuery } from "src/store/query/videos"


const Home = () => {
    const contentRef = useRef()
    const [maxResults, setmaxResults] = useState(10)
    const { data, error, isLoading, isFetching } = useGetVideosQuery({ maxResults })
    //  --infiniteLoad--
    const scrollBox = (e) => {
        if (maxResults < data.pageInfo.totalResults && !isFetching) {
            if (e.target.scrollTop + e.target.clientHeight > contentRef.current.clientHeight) {
                setmaxResults(pre => pre + 10)
            }
        }
    }
    return (
        <MainLayout>
            <div className=" w-full h-full overflow-auto" onScroll={scrollBox}>
                <h1 className="ps-4 text-3xl font-bold">New <span className="text-red-600"> Videos </span></h1>
                {isLoading ? <div className="p-3"><LoadingBox /></div> : error ? <div className="p-3"> <ErrorBox /></div> :
                    <>
                        <div className="cards p-4 w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5" ref={contentRef}>
                            {
                                data?.items?.map((e) => (<VideoCard details={e} key={e.id} />))
                            }
                        </div>
                    </>
                }
                {!isLoading && isFetching && <LoadingBox />}
            </div>
        </MainLayout>

    )
}

export default Home