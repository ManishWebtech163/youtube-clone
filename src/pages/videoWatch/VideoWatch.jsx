import SuggestionsVideos from "@components/SuggestionsVideos"
import VideoComments from "@components/VideoComments"
import VideoPlay from "@components/VideoPlay"
import ViderActions from "@components/ViderActions"
import { useParams } from "react-router-dom"
import { useGetVideoDetailsDataQuery, useGetVideoRelatedDataQuery } from "src/store/query/videoDetails"

const VideoWatch = () => {
    const { id } = useParams()
    // --get video data--
    const { data: videoDetails, isLoading: detailsLoading, isError: detailsError } = useGetVideoDetailsDataQuery({ id })
    const { data: videoRelatedData, isLoading: relatedDataLoading, isError: relatedError } = useGetVideoRelatedDataQuery({ id })

    return (
        <div className="container mx-auto py-3">
            <div className="boxes flex gap-3 lg:gap-5">
                <div className="box w-9/12">
                    <div className="videoDiv w-full">
                        <VideoPlay data={videoDetails} isLoading={detailsLoading} isError={detailsError} />
                    </div>
                    <div>
                        <ViderActions videoDetails={videoDetails} detailsError={detailsError} detailsLoading={detailsLoading} />
                    </div>
                    <div>
                        <VideoComments videoId={id} />
                    </div>
                </div>
                <div className="box w-3/12">
                    <SuggestionsVideos videoRelatedData={videoRelatedData} relatedError={relatedError} relatedDataLoading={relatedDataLoading} />
                </div>
            </div>
        </div>
    )
}

export default VideoWatch