
const VideoReviewForm = () => {
    return (
        <div className="flex my-4 gap-4">
            <div className="name bg-pink-300 w-10 h-10 flex items-center justify-center rounded-full">
                M
            </div>
            <form className="w-full flex gap-2">
                <input type="text" className="w-full bg-transparent border-b px-2 text-sm" />
                <button className="bg-gray-100 text-black px-5 rounded-full text-base">Comment</button>
            </form>
        </div>
    )
}

export default VideoReviewForm