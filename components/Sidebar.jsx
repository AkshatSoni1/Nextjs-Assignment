import { IoPersonCircleOutline } from "react-icons/io5";
import { FaBell } from "react-icons/fa";
import { BiSolidMessageDetail } from "react-icons/bi";
import { GoTriangleDown } from "react-icons/go";
import { RiMoneyDollarCircleFill } from "react-icons/ri";

const Sidebar = (props) => {
    const {width, toggle} = props
    return (
        <div className={`w-${width} h-screen font-semibold bg-blue-950 text-white`}>
        {/* <div className=' w-0 h-screen font-semibold bg-blue-950 text-white'> */}
            {toggle && 
            <>
            <div className="flex items-center justify-between border-b-2 border-b-gray-400 py-2 px-2 mb-4">
                <div className="flex items-center p-4">
                    <IoPersonCircleOutline 
                        className="text-4xl me-2"
                    />
                    <h1>Hello, User</h1>
                </div>
                <FaBell 
                className="text-xl mx-4"
                />
            </div>
            <div className="flex items-center px-2 justify-between py-4 bg-indigo-950">
                <div className="flex items-center">
                <BiSolidMessageDetail 
                    className="mx-2 text-2xl"
                />
                <h1 className="px-2">Discussion Forum</h1>
                </div>
                <GoTriangleDown />
            </div>
            <div className="flex items-center px-2 py-4">
                <RiMoneyDollarCircleFill 
                    className="mx-2 text-2xl"
                />
                <h1 className="px-2">Market Stories</h1>
            </div>
            <div className="px-10">
                <div className="p-4">Sentiment</div>
                <div className="p-4">Market</div>
                <div className="p-4">Sector</div>
                <div className="p-4">Watchlist</div>
                <div className="p-4">Events</div>
                <div className="p-4">News/Interview</div>
            </div>
            </>
            } 
        </div>
    )
}

export default Sidebar
