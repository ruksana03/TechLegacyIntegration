import { BiStreetView } from "react-icons/bi";
import { Link } from "react-router-dom";
import { HiCursorClick } from "react-icons/hi";

const TrendingProductCard = ({ trendingProduct }) => {
    return (
        <Link to={`/product/${trendingProduct._id}`}>
            <div className="bg-[#8E1E1C] my-4 p-2 text-white rounded-md shadow-md shadow-gray-900">
                <div className="flex flex-col lg:flex-row justify-start gap-2">
                    <img className="w-16 h-16 rounded-full border-2 p-2" src={trendingProduct?.image} alt="" />
                    <div className=" text-sm font-semibold my-auto">
                        <div className="flex justify-start items-center gap-2">
                            <BiStreetView />
                            <p className="text-xs">{trendingProduct.vote} Votes</p>
                        </div>
                        <p className="border-[1px] mt-1 text-xs rounded-sm shadow-sm px-1 shadow-white"> {trendingProduct?.product_name}</p>
                    </div>
                </div>

                <div>
                    {
                        trendingProduct?.tags?.map((tag) => (<button className='border-[1px] border-black mr-2 my-2 px-1 text-sm' key={tag}>{tag}</button>))
                    }
                    
                    <hr className="my-2" />

                    <div className="group relative flex items-center">
                        <button className="text-2xl">
                            <HiCursorClick className=""/>
                        </button>
                        <span className="hidden group-hover:inline-block ml-2 text-white  text-sm font-extrabold ">
                            View Details
                        </span>
                    </div>

                </div>


            </div>
        </Link>
    );
};

export default TrendingProductCard;

