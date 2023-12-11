import { configureStore } from '@reduxjs/toolkit'

import { setupListeners } from '@reduxjs/toolkit/query'
import { videos } from './query/videos'
import { videosCategories } from './query/videosCategories'
import { searchVideos } from './query/searchVideos'
import { videoDetails } from './query/videoDetails'
import { channelApis } from './query/channelApis'


export const store = configureStore({
    reducer: {
        // Add the generated reducer as a specific top-level slice
        [videos.reducerPath]: videos.reducer,
        [videosCategories.reducerPath]: videosCategories.reducer,
        [searchVideos.reducerPath]: searchVideos.reducer,
        [videoDetails.reducerPath]: videoDetails.reducer,
        [channelApis.reducerPath]: channelApis.reducer,

    },
    // Adding the api middleware enables caching, invalidation, polling,
    // and other useful features of `rtk-query`.
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(videos.middleware, videosCategories.middleware, searchVideos.middleware, videoDetails.middleware, channelApis.middleware),
})

// optional, but required for refetchOnFocus/refetchOnReconnect behaviors
// see `setupListeners` docs - takes an optional callback as the 2nd arg for customization
setupListeners(store.dispatch)