// import { FcLike } from "react-icons/fc";
// import { FcLikePlaceholder } from "react-icons/fc";
import { BiSolidLike } from "react-icons/bi";
import { BiSolidDislike } from "react-icons/bi";

import { Link } from 'react-router-dom';

const Card = ({ item }) => {
    return (
        <Link>
            <div className='flex flex-col w-full h-96 border-2 border-black px-4 py-2'>
                <div>
                    <div className='flex justify-start items-center gap-4'>
                        <img className='w-10 h-10 rounded-full' src={item?.owner?.image} alt="" />
                        <p>{item?.owner?.name}</p>
                    </div>
                    <p>{item?.timestamp}</p>
                </div>
                <div className=' aspect-square 
              w-full 
              h-52
              relative 
              overflow-hidden 
              rounded-xl'>
                    <img className='object-cover 
                h-full 
                w-full 
                group-hover:scale-110 
                transition' src={item?.image} alt="Featured" />
                </div>
                <div>
                    <h1>{item?.product_name}</h1>
                    <p>{item?.description}</p>
                    <div className="flex justify-between">
                        <div>
                            {
                                item?.tags?.map((tag) => (<button className='border-[1px] border-black mr-2 my-2 px-2' key={item}>{tag}</button>))
                            }
                        </div>
                        <div className="flex justify-start items-center gap-4">
                            <BiSolidLike />
                            <BiSolidDislike />
                            <p>{item.vote}</p>

                        </div>
                    </div>
                </div>

            </div>
        </Link>
    );
};

export default Card;