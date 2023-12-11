import { useGetChannelByIdQuery } from "src/store/query/channelApis"
import LoadingBox from "./LoadingBox"
import { numberFormate } from "src/utils/numberFormate"

const ChannelDetailsBox = ({ channelId }) => {
    const { isLoading: channelApiLoading, data: channelData } = useGetChannelByIdQuery({ channelId })
    console.log(channelApiLoading, channelData, "channelApiLoading")
    let data = channelData?.items[0]
    if (channelApiLoading) {
        return <LoadingBox />
    }
    return (
        <div className="InfoBox mt-3 lg:mt-5 max-w-5xl mx-auto flex justify-between gap-5 items-start">
            <div className="flex gap-2 lg:gap-5 items-start">
                <div className="w-[150px] aspect-square rounded-full overflow-hidden border border-white">
                    <img src={`${data?.snippet.thumbnails.default.url}`} alt="" className="w-full h-full" />
                </div>
                <div>
                    <h1 className="text-2xl capitalize">{data?.snippet.title}</h1>
                    <div className="flex text-base gap-2 opacity-80">
                        <p className="tag ">{data?.snippet.customUrl}</p>
                        <p>{numberFormate(data?.statistics.subscriberCount)} subs</p>
                        <p>{numberFormate(data?.statistics.videoCount)} videos</p>
                    </div>
                    <p className="text-base gap-2 opacity-80 line-clamp-2">{data?.snippet.description}</p>
                </div>
            </div>
            <button className="bg-red-700 py-2 px-5 text-base rounded-full">Subscribe</button>
        </div>
    )
}

export default ChannelDetailsBox