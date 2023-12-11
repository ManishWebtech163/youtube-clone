import ChannelBanner from "@components/ChannelBanner"
import ChannelDetailsBox from "@components/ChannelDetailsBox"
import ChannelPlayList from "@components/ChannelPlayList"

import MainLayout from "@components/MainLayout"

import { useParams } from "react-router-dom"

const ChannelDetail = () => {
    const { id } = useParams()

    return (
        <MainLayout>

            <div className="detailsContainer p-2">
                {/* --ChannelBanner-- */}
                <ChannelBanner channelId={id} />
                {/* --ChannelDetailsBox-- */}
                <ChannelDetailsBox channelId={id} />
                {/* --playlist-- */}
                <ChannelPlayList channelId={id} />
            </div>

        </MainLayout>
    )
}

export default ChannelDetail