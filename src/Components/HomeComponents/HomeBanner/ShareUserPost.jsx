import { TbSquarePlus2 } from "react-icons/tb";
import { PiCirclesThreePlusFill } from "react-icons/pi";
import { BsBookmarkPlusFill } from "react-icons/bs";
import { FaHistory } from "react-icons/fa";
import { Link } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";

const ShareUserPost = () => {
    const { user } = useAuth()
    console.log(user)
    return (
        <div className="flex my-4 gap-4 lg:mx-16">
            <div className="group h-36 mr-4">
                <img className=" object-cover
                h-full 
                w-32
                group-hover:scale-110 
                transition" src={user?.photoURL} alt="" />
            </div>
            <div className=" ">
                Welcome {user?.displayName}

                <div className="flex flex-row justify-between  lg:flex-col lg:justify-between">
                <div className="flex gap-2 lg:justify-start lg:items-center">
                    <Link><TbSquarePlus2 /> </Link>
                    <p className="hidden lg:block">Share Your Tech story with us</p>
                </div>
                <div className="flex gap-2 lg:justify-start lg:items-center">
                    <Link><PiCirclesThreePlusFill /></Link>
                    <p className="hidden lg:block">Share Your Tech Product For review</p>
                </div>
                <div className="flex gap-2 lg:justify-start lg:items-center">
                    <Link><BsBookmarkPlusFill /></Link>
                    <p className="hidden lg:block">Look up your Bookmark</p>
                </div>
                <div className="flex gap-2 lg:justify-start lg:items-center">
                    <Link><FaHistory /></Link>
                    <p className="hidden lg:block">View your history</p>
                </div>
                </div>
            </div>
        </div>
    );
};

export default ShareUserPost;