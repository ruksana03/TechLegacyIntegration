/* eslint-disable react/prop-types */

import { formatDate } from "../../API/formatDate";
import { FaArrowsToEye } from "react-icons/fa6";
import { BiSolidLike } from "react-icons/bi";
import { BiSolidDislike } from "react-icons/bi";
import { Link, useNavigate } from "react-router-dom";
import { gradientBorder } from "../Shared/StyleJS/border"
import useAuth from "../../Hooks/useAuth";
import { useState } from "react";
import axiosSecure from "../../API/axiosSecure";
import { IoIosPeople } from "react-icons/io";

const ProductCard = ({ product, refetch }) => {
    const { user } = useAuth();
    const navigate = useNavigate();
    const [hasVoted, setHasVoted] = useState(false);
    const isProductOwner = user && user.email === product?.owner?.email;

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
            await axiosSecure.post(`/vote/${product._id}/${user?.email}/${type}`);
            setHasVoted(true);
            refetch();
        } catch (error) {
            console.error('Error recording vote:', error);
        }
    };

    return (
        <div className='flex flex-col  w-full h-96 border-[1px] border-black px-4 py-2 mb-4 font-mono'>
            <div className="flex flex-col justify-between gap-4">
                <div>
                    <div>
                        <div className='flex justify-start products-center gap-4'>
                            <img className='w-10 h-10 rounded-full' src={product?.owner?.image} alt="" />
                            <p>{product?.owner?.name}</p>
                        </div>
                        <p className="text-xs">{formatDate(product?.timestamp)}</p>
                    </div>
                    <div className=' aspect-square w-full  h-28 relative overflow-hidden rounded-xl'>
                        <img className='object-cover  h-full  w-full group-hover:scale-110 transition' src={product?.image} alt="Featured" />
                    </div>
                    <hr className="my-2 border-[1px] border-black" />
                    <div>
                        <Link
                            to={`/product/${product?._id}`}>

                            <p className="cursor-pointer border-[1px] border-black shadow-md shadow-black pl-4 rounded-full"> {product?.productName}</p>

                        </Link>
                        <p className="mt-2 overflow-hidden line-clamp-3 truncate">{product?.description}</p>
                    </div>
                </div>
                {/* <hr className="border" style={{ ...gradientBorder }} /> */}
                <div>
                        {
                            product?.tags?.map((tag) => (
                                <button className='border-[1px] border-black mr-2 px-2' key={tag.id}>
                                    {tag.text}
                                </button>
                            ))
                        }
                    </div>
                <div className="flex justify-between">
                  
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
                        <p className="flex justify-center items-center gap-1 border-[1px] px-1 " style={{ ...gradientBorder }}>{product.vote}<IoIosPeople /> </p>
                    </div>
                    <hr className="my-2" />
                    <Link to={`/product/${product?._id}`} className="flex justify-between px-3 z-10 gap-2">


                        <div className="group relative flex products-center">
                            <button className="text-2xl">
                                <FaArrowsToEye />
                            </button>
                            <span className="hidden group-hover:inline-block ml-2 text-black bg-white text-sm font-extrabold p-2 rounded-md">
                                View Details
                            </span>
                        </div>
                    </Link>
                </div>
            </div>

        </div>
    );
};

export default ProductCard;