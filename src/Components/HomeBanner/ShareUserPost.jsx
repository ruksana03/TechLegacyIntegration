import useAuth from "../../Hooks/useAuth";

import { TbSquarePlus2 } from "react-icons/tb";
import { PiCirclesThreePlusFill } from "react-icons/pi";
import { BsBookmarkPlusFill } from "react-icons/bs";
import { FaHistory } from "react-icons/fa";

const ShareUserPost = () => {
    const {user}= useAuth()
    console.log(user)
    return (
        <div>
            <div className="group h-36 m-4 ">
                <img className=" object-cover
                h-full 
                w-32
                group-hover:scale-110 
                transition" src={user?.photoURL} alt="" />
            </div>
            <div></div>
        </div>
    );
};

export default ShareUserPost;