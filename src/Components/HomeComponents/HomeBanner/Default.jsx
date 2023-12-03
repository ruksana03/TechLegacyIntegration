import { TbSquarePlus2 } from "react-icons/tb";
import { PiCirclesThreePlusFill } from "react-icons/pi";
import { BsBookmarkPlusFill } from "react-icons/bs";
import { FaHistory } from "react-icons/fa";
import { Link } from "react-router-dom";


const Default = () => {
    return (
        <div className="flex flex-row justify-between items-center text-center mt-10 lg:flex-col lg:justify-between ">
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
    );
};

export default Default;