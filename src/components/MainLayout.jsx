import Sidebar from "./Sidebar"



const MainLayout = ({ children }) => {
    return (
        <div className="container mx-auto p-2 flex items-start h-[91vh] overflow-hidden relative">
            <Sidebar />
            <div className="w-full h-full overflow-auto">
                {children}
            </div>
        </div>
    )
}

export default MainLayout