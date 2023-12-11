// youtubeApi.js

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';


const baseQuery = fetchBaseQuery({
    baseUrl: `${import.meta.env.VITE_YOUTUBE_BASE_URL}`,
});

export const channelApis = createApi({
    reducerPath: 'channelApis',
    baseQuery,
    endpoints: (builder) => ({
        // getChannelById
        getChannelById: builder.query({
            query: (params) => ({
                url: `/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${params.channelId}&key=${import.meta.env.VITE_YOUTUBE_API_KEY}`,
            }),
        }),
        // getChannelPlaylistById
        getChannelPlaylistById: builder.query({
            query: (params) => ({
                url: `playlists?part=snippet%2CcontentDetails&channelId=${params.channelId}&maxResults=25&key=${import.meta.env.VITE_YOUTUBE_API_KEY}`,
            }),
        }),
    }),
});

export const { useGetChannelByIdQuery, useGetChannelPlaylistByIdQuery } = channelApis;
