import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'



const baseQuery = fetchBaseQuery({
    baseUrl: `${import.meta.env.VITE_YOUTUBE_BASE_URL}`,
});

export const videosCategories = createApi({
    reducerPath: 'youtubevideosCategoriesApi',
    baseQuery,
    endpoints: (builder) => ({
        getVideosCategories: builder.query({
            query: () => ({
                url: `/videoCategories?part=snippet&regionCode=US&key=${import.meta.env.VITE_YOUTUBE_API_KEY}`,
            }),
        }),
    }),
})

export const { useGetVideosCategoriesQuery } = videosCategories