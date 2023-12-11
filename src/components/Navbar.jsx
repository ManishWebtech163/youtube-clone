import { NavLink } from "react-router-dom"
import SearchBar from "./SearchBar"
import { useUser, SignOutButton } from "@clerk/clerk-react";

import { useState } from "react";

const Navbar = () => {
    const { isSignedIn, user } = useUser();
    const [dropDown, setdropDown] = useState(false)

    return (
        <header className="text-white bg-black sticky top-0 z-10">
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                <NavLink to="/" className="flex title-font font-medium items-center mb-4 md:mb-0">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-8 h-8">
                        <path strokeLinecap="round" d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z" />
                    </svg>
                    <span className="ml-3 text-xl">Youtube</span>
                </NavLink>
                <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center gap-2 md:gap-3 lg:gap-4">
                    {/* <a className="mr-5 hover:text-gray-900">First Link</a>                     */}
                    <SearchBar />
                    {isSignedIn &&
                        <div className="relative">
                            <img className="w-10 h-10 p-1 rounded-full ring-2 ring-gray-300 dark:ring-gray-500 cursor-pointer" src={`${user.imageUrl}`} alt="Bordered avatar" onClick={() => setdropDown(!dropDown)} />
                            {dropDown &&
                                <div className="absolute top-2/2 right-0 pt-2">
                                    <ul className="bg-gray-300 min-w-[150px] rounded-sm p-1">
                                        <SignOutButton>
                                            <li className="py-1 px-2 text-black capitalize rounded-sm cursor-pointer hover:bg-black hover:text-white">Sign Out</li>
                                        </SignOutButton>
                                    </ul>
                                </div>
                            }
                        </div>
                    }
                </nav>
            </div>
        </header>

    )
}

export default Navbar