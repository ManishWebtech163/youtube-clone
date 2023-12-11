import { NavLink, useParams } from "react-router-dom"
import { useGetVideosCategoriesQuery } from "src/store/query/videosCategories"
import { twMerge } from "tailwind-merge"

const Sidebar = () => {
    const location = useParams()
    const { isLoading, data } = useGetVideosCategoriesQuery()
    console.log(location.id, 'cate')

    return (

        <div className="sidebar w-full max-w-[300px]  h-full overflow-auto">
            {isLoading ?
                <div
                    role="status"
                    className=" p-4 space-y-4 border-r border-gray-200 divide-y divide-gray-200 rounded shadow animate-pulse dark:divide-gray-700 md:p-6 dark:border-gray-700"
                >
                    <div className="flex items-center justify-between">
                        <div>
                            <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5" />
                            <div className="w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700" />
                        </div>
                        {/* <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12" /> */}
                    </div>
                    <div className="flex items-center justify-between pt-4">
                        <div>
                            <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5" />
                            <div className="w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700" />
                        </div>

                    </div>
                    <div className="flex items-center justify-between pt-4">
                        <div>
                            <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5" />
                            <div className="w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700" />
                        </div>

                    </div>
                    <div className="flex items-center justify-between pt-4">
                        <div>
                            <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5" />
                            <div className="w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700" />
                        </div>

                    </div>
                    <div className="flex items-center justify-between pt-4">
                        <div>
                            <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5" />
                            <div className="w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700" />
                        </div>

                    </div>
                    <div className="flex items-center justify-between pt-4">
                        <div>
                            <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5" />
                            <div className="w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700" />
                        </div>

                    </div>
                    <div className="flex items-center justify-between pt-4">
                        <div>
                            <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5" />
                            <div className="w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700" />
                        </div>

                    </div>
                    <div className="flex items-center justify-between pt-4">
                        <div>
                            <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5" />
                            <div className="w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700" />
                        </div>

                    </div>
                    <div className="flex items-center justify-between pt-4">
                        <div>
                            <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5" />
                            <div className="w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700" />
                        </div>

                    </div>

                    <span className="sr-only">Loading...</span>
                </div>

                :
                <div className="px-4 relative items">
                    <NavLink to={`/`} className={twMerge(`block py-2 px-4 mb-1 text-lg cursor-pointer rounded-full hover:bg-white hover:text-black ${!location.id && "bg-red-700"}`)}>New</NavLink>
                    {data?.items.map((e, ind) => (
                        <NavLink to={`/category/${e.snippet.title.replace("/", " ")}`} key={e.id + ind} className={twMerge(`block py-2 px-4 text-lg cursor-pointer rounded-full mb-1 hover:bg-white hover:text-black ${e.snippet.title.replace("/", " ") == location.id && "bg-red-700"}`)}>{e.snippet.title}</NavLink>
                    ))}
                </div>
            }
        </div>
    )
}

export default Sidebar