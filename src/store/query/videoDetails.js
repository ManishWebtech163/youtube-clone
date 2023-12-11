import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'




// GET https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&videoId=_VB39Jo8mAQ&key=[YOUR_API_KEY] HTTP/1.1




const baseQuery = fetchBaseQuery({
    baseUrl: `${import.meta.env.VITE_YOUTUBE_BASE_URL}`,
});

export const videoDetails = createApi({
    reducerPath: 'videoDetails',
    baseQuery,
    endpoints: (builder) => ({
        getVideoStreamingData: builder.query({ //get video strimming
            query: (params) => ({
                url: `/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${params.id}&key=${import.meta.env.VITE_YOUTUBE_API_KEY}`,
            }),
        }),
        getVideoDetailsData: builder.query({ //get video  details
            query: (params) => ({
                url: `/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${params.id}&key=${import.meta.env.VITE_YOUTUBE_API_KEY}`,
            }),
        }),
        getVideoCommentsData: builder.query({ //get video comments
            query: (params) => ({
                url: `/commentThreads?part=snippet%2Creplies&videoId=${params.id}&maxResults=${params.maxResults ? params.maxResults : 10}&key=${import.meta.env.VITE_YOUTUBE_API_KEY}`,
            }),
        }),
        getVideoRelatedData: builder.query({ //get video Related Contents
            query: () => ({
                url: `/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=US&maxResults=20&key=${import.meta.env.VITE_YOUTUBE_API_KEY}`,
            }),
        }),
    }),
})

export const { useGetVideoStreamingDataQuery, useGetVideoDetailsDataQuery, useGetVideoCommentsDataQuery, useGetVideoRelatedDataQuery } = videoDetails