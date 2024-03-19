import { IoPersonCircleOutline } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { CgEye } from "react-icons/cg";
import { FaShareAlt } from "react-icons/fa";
import { BiComment } from "react-icons/bi";

const DiscussCard = (props) => {
    const {profile, name, description, sector, time, likes, views, comments} = props;
    return (
        <div className='w-full rounded-lg shadow-md shadow-gray-300 pb-4 my-8'>
            <div className="flex">
                <div className="p-4">
                    <IoPersonCircleOutline
                        className="text-4xl me-2"
                    />
                    {/* Profile pic will be added here of different users */}
                </div>
                <div className="flex flex-col py-4 pe-4 w-full">
                    <div className="flex items-center justify-between">
                        <div className="flex">
                            <h1>{name}</h1>
                            <h1 className='bg-blue-800 text-white px-4 rounded-2xl text-sm mx-3 flex items-center justify-center'>{sector}</h1>
                        </div>
                        <div className="">
                        <h1 className="text-sm text-blue-800 font-semibold">{time}</h1>
                        </div>
                    </div>
                    <div className="">
                        <p>{description}</p>
                    </div>
                </div>
            </div>
                <div className="flex flex-wrap justify-evenly px-2">
                    <div className="flex items-center"><FaRegHeart className="text-lg cursor-pointer"/><span className="px-1 text-sm">{likes}</span></div>
                    <div className="flex items-center"><CgEye className="text-lg cursor-pointer"/><span className="px-1 text-sm">{views}</span></div>
                    <div className="flex items-center"><BiComment className="text-lg cursor-pointer"/><span className="px-1 text-sm">{comments} comments</span></div>
                    <div className="flex items-center"><FaShareAlt className="text-lg cursor-pointer"/><span className="px-1 text-sm">Share</span></div>
                </div>
        </div>
    )
}

export default DiscussCard
