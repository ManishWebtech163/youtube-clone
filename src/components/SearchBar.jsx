import { useState } from "react"
import { useNavigate } from "react-router-dom"

const SearchBar = () => {
    const navigate = useNavigate()
    const [searchText, setsearchText] = useState("")

    return (
        <div>
            <div className="flex items-center justify-center">
                <div className="flex rounded-full bg-white  w-full max-w-[900px]">
                    <input
                        type="text"
                        className="w-full bg-[#0d1829] flex bg-transparent px-4 text-black outline-0 line-clamp-1"
                        placeholder="Search name movie or.."
                        onChange={(e) => setsearchText(e.target.value)}
                        autoComplete
                    />
                    <button type="submit" className="relative p-2 px-4 bg-red-500 rounded-r-full" onClick={() => searchText != "" && navigate(`/search/${searchText}`)}>
                        Search
                    </button>
                </div>
            </div>

        </div>
    )
}

export default SearchBar