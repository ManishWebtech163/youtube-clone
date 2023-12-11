// youtubeApi.js

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';


const baseQuery = fetchBaseQuery({
    baseUrl: `${import.meta.env.VITE_YOUTUBE_BASE_URL}`,
});

export const searchVideos = createApi({
    reducerPath: 'searchVideos',
    baseQuery,
    endpoints: (builder) => ({
        getSearchVideos: builder.query({
            query: (params) => ({
                url: `/search?part=snippet&maxResults=${params.maxResults}&q=${params.q}&key=${import.meta.env.VITE_YOUTUBE_API_KEY}`,
            }),
        }),
    }),
});

export const { useGetSearchVideosQuery } = searchVideos;
