import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


const baseQuery = fetchBaseQuery({
    baseUrl: `${import.meta.env.VITE_YOUTUBE_BASE_URL}`,
});

export const videos = createApi({
    reducerPath: 'youtubeApi',
    baseQuery,
    endpoints: (builder) => ({
        getVideos: builder.query({
            query: (params) => ({
                url: `/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=US&maxResults=${params.maxResults}&key=${import.meta.env.VITE_YOUTUBE_API_KEY}`,

            }),
        }),
    }),
})

export const { useGetVideosQuery } = videos