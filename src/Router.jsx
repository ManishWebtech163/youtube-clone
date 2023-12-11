import { createBrowserRouter } from "react-router-dom";
import Navbar from "@components/Navbar";
import Home from "@pages/home/Home";
import VideoDetail from "@pages/videoDetail/VideoDetail";
import ChannelDetail from "@pages/channelDetail/ChannelDetail";
import SearchFeed from "@pages/searchFeed/SearchFeed";
import VideosByCategories from "@pages/videosByCategories/VideosByCategories";
import VideoWatch from "@pages/videoWatch/VideoWatch";
import { Sign_in, Sign_up } from "@pages/auth";



export const router = createBrowserRouter([
    {
        path: "/",
        element: <><Navbar /><Home /></>,
    },
    {
        path: "/sign-in/*",
        element: <><Navbar /><Sign_in /></>,
    },
    {
        path: "/sign-up/*",
        element: <><Navbar /><Sign_up /></>,
    },
    {
        path: "/video/:id",
        element: <><Navbar /> <VideoDetail /></>,
    },
    {
        path: "/channel/:id",
        element: <><Navbar /> <ChannelDetail /></>,
    },
    {
        path: "/search/:id",
        element: <><Navbar /> <SearchFeed /></>,
    },
    {
        path: "/category/:id",
        element: <><Navbar /> <VideosByCategories /></>,
    },
    {
        path: "/watch/:id",
        element: <><Navbar /> <VideoWatch /></>,
    },
]);