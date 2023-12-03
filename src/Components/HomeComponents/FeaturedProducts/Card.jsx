// import { FcLike } from "react-icons/fc";
// import { FcLikePlaceholder } from "react-icons/fc";
import { FaArrowsToEye } from "react-icons/fa6";
import { BiSolidLike } from "react-icons/bi";
import { BiSolidDislike } from "react-icons/bi";
import { IoIosPeople } from "react-icons/io";

import { Link, useNavigate } from 'react-router-dom';
import { formatDate } from "../../../API/formatDate";
import { useState } from "react";
import axiosSecure from "../../../API/axiosSecure";
import useAuth from "../../../Hooks/useAuth";
import {gradientBorder} from "../../Shared/StyleJS/border"


const Card = ({ item,refetch }) => {
    const {user} =useAuth();
    const navigate = useNavigate();
    const [hasVoted, setHasVoted] = useState(false);
    const isProductOwner = user && user.email === item?.owner?.email;

    const handleVote = async (type) => {
        if (!user) {
            navigate('/login');
            return;
        }
        if (hasVoted) {
            console.log('You have already voted for this product.');
            return;
        }

        try {
            await axiosSecure.post(`/vote/${item._id}/${user?.email}/${type}`);
            setHasVoted(true);
            refetch();
        } catch (error) {
            console.error('Error recording vote:', error);
        }
    };
    return (

        <div className='flex flex-col w-full h-96 border-[1px] border-black px-4 py-2 mb-4'>
            <div>
                <div className='flex justify-start items-center gap-4'>
                    <img className='w-10 h-10 rounded-full' src={item?.owner?.image} alt="" />
                    <p>{item?.owner?.name}</p>
                </div>
                <p>{formatDate(item?.timestamp)}</p>
            </div>
            <div className=' aspect-square w-full h-52 relative overflow-hidden  rounded-xl'>
                <img className='object-cover h-full w-full group-hover:scale-110 transition' src={item?.image} alt="Featured" />
            </div>
            <div>
                <Link
                    to={`/product/${item._id}`}>
                    <h1
                        className="font-extrabold border-[1px] border-black rounded-md cursor-pointer mt-2 shadow-md shadow-black px-2">
                        {item?.productName}
                    </h1>
                </Link>
                <p className="mt-2">{item?.description}</p>
                <div className="flex justify-between">
                    <div>
                        {
                            item?.tags?.map((tag) => (
                                <button className='border-[1px] border-black mr-2 my-2 px-2' key={tag.id}>
                                    {tag.text}
                                </button>
                            ))
                        }
                    </div>

                    <div className="flex justify-start items-center gap-4">
                        <button 
                        onClick={() => handleVote('like')} disabled={isProductOwner}
                        className={isProductOwner ? 'cursor-not-allowed text-gray-400' : ''}>
                           
                            <BiSolidLike />
                        </button>
                        <button 
                        onClick={() => handleVote('dislike')} disabled={isProductOwner}
                        className={isProductOwner ? 'cursor-not-allowed text-gray-400' : ''}>
                            <BiSolidDislike />
                        </button>
                        <p className="flex justify-center items-center gap-1 border-[1px] px-1 " style={{...gradientBorder}}>{item.vote}<IoIosPeople /> </p>
                    </div>

                    <Link className="flex justify-between px-3 z-10 gap-2">
                        <hr className="my-2" />

                        <div className="group relative flex items-center">
                            <button className="text-2xl">
                                <FaArrowsToEye />
                            </button>
                            <Link to={`/product/${item._id}`}>
                                <span className="hidden group-hover:inline-block ml-2 text-black bg-white text-sm font-extrabold p-2 rounded-md">
                                    View Details
                                </span>
                            </Link>
                        </div>
                    </Link>
                </div>
            </div>

        </div>

    );
};

export default Card;



