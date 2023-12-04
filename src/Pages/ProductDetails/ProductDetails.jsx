// import { FaArrowsToEye } from "react-icons/fa6";
// import { MdOutlineReportProblem } from "react-icons/md";
import { BiSolidLike } from "react-icons/bi";
import { BiSolidDislike } from "react-icons/bi";
import { IoIosPeople } from "react-icons/io";
import { Helmet } from "react-helmet-async";
import { Link, useLoaderData } from "react-router-dom";
import Container from "../../Components/Shared/Container";
import { formatDate } from "../../API/formatDate";
import { useState } from "react";
import useAuth from "../../Hooks/useAuth";
import useAllProducts from "../../Hooks/useAllProducts";
import axiosSecure from "../../API/axiosSecure";
import { gradientBorder } from "../../Components/Shared/StyleJS/border"
import toast from "react-hot-toast";
import { MdOutlineReportProblem, MdOutlineReviews } from "react-icons/md";
import ReviewModal from "../../Components/ProductDetailsCmp/ReviewModal";
import Reviews from "../../Components/ProductDetailsCmp/Reviews";
// import Report from "../../Components/ProductDetailsCmp/ReportModal";
import ReportModal from "../../Components/ProductDetailsCmp/ReportModal";
// import reportProduct from "../../Components/ProductDetailsCmp/reportProduct";


const ProductDetails = () => {
    const { user } = useAuth();
    const { refetch } = useAllProducts();
    const product = useLoaderData();
    const [hasVoted, setHasVoted] = useState(false);
    let [isOpen, setIsOpen] = useState(false)
    let [isReportModalOpen, setIsReportModalOpen] = useState(false)

    const isProductOwner = user && user.email === product?.owner?.email;

    const handleProductVote = async (type) => {

        if (hasVoted) {
            console.log('You have already voted for this product.');
            toast("you have already vote for this product")
            return;
        }
        console.log('Making vote request with:', product._id, user?.email, type);

        try {
            await axiosSecure.post(`/vote/${product._id}/${user?.email}/${type}`);
            setHasVoted(true);
            refetch();
        } catch (error) {
            console.error('Error recording vote:', error);
        }
    };


    const closeModal = () => {
        setIsOpen(false);
    };
    const closeReportModalOpen = () => {
        setIsReportModalOpen(false);
    };

    return (
        <div className="font-mono">
            <Helmet>
                <title>TLI | {product?.productName}</title>
            </Helmet>
            <Container>
            { product?.length === 0 && <p>No featured products available.</p>}

                {
                    product? (
                        <div className="grid grid-cols-12">
                    <div className='col-span-8 flex flex-col  h-96 border-[1px] border-black px-4 py-2 mb-4'>
                        <div>
                            <div className='flex justify-between products-center gap-4 my-1'>
                                <div className="flex justify-center items-center gap-4">
                                    <img className='w-10 h-10 rounded-full' src={product?.owner?.image} alt="" />
                                    <p>{product?.owner?.name}</p>
                                </div>
                                <p>{formatDate(product?.timestamp)}</p>
                            </div>

                        </div>
                        <div className='aspect-square w-full h-52 relative overflow-hidden rounded-xl'>
                            <img className='object-cover h-full w-full group-hover:scale-110 transition' src={product?.image} alt="Featured" />
                        </div>
                        <div>
                            <h1
                                className="font-extrabold border-[1px] border-black rounded-md cursor-pointer mt-2 shadow-md shadow-black px-2">
                                {product?.productName}
                            </h1>

                            <p className="mt-2">{product?.description}</p>
                            <div className="flex justify-between">
                                <div>
                                    {
                                        product?.tags?.map((tag) => (
                                            <button className='border-[1px] border-black mr-2 my-2 px-2' key={tag.id}>
                                                {tag.text}
                                            </button>
                                        ))
                                    }
                                </div>
                                <div className="flex justify-start items-center gap-4">
                                    <button
                                        onClick={() => handleProductVote('like')} disabled={isProductOwner}
                                        className={isProductOwner ? 'cursor-not-allowed text-gray-400' : ''}>

                                        <BiSolidLike />
                                    </button>
                                    <button
                                        onClick={() => handleProductVote('dislike')} disabled={isProductOwner}
                                        className={isProductOwner ? 'cursor-not-allowed text-gray-400' : ''}>
                                        <BiSolidDislike />
                                    </button>
                                    <p className="flex justify-center items-center gap-1 border-[1px] px-1 " style={{ ...gradientBorder }}>{product.vote}<IoIosPeople /> </p>
                                </div>
                                <Link className="flex justify-between px-3 z-10 gap-2">
                                    <hr className="my-2" />
                                    <div className="group relative flex products-center">
                                        <button 
                                        onClick={() => setIsReportModalOpen(true)} className="text-2xl">
                                            <MdOutlineReportProblem />
                                        </button>
                                        <span className="hidden group-hover:inline-block ml-2 text-black bg-white text-sm font-extrabold p-2 rounded-md">
                                            Report
                                        </span>
                                    </div>
                                    <ReportModal closeReportModalOpen={closeReportModalOpen} isReportModalOpen={isReportModalOpen} product={product} />
                                </Link>

                            </div>
                        </div>

                    </div>
                    <div className="col-span-4 h-96 overflow-y-auto">
                        <button
                            onClick={() => setIsOpen(true)}
                            className="flex justify-center w-1/2 items-center text-center bg-[#CDAA35] py-2 border-2 rounded-full mx-auto gap-4 text-xl">
                            <MdOutlineReviews />
                            Add Review
                        </button>
                        <ReviewModal closeModal={closeModal} isOpen={isOpen} product={product} />

                        {/* Reviews Section start  */}
                        <div className="border-[1px] border-black w-10/12 px-4 py-8 mx-auto max-h-screen overflow-y-auto scroll-smooth md:scroll-auto">
                            <Reviews product={product} />
                        </div>
                        {/* Reviews Section end */}
                    </div>
                </div>
                    ): (
                        <div className="flex justify-center items-center h-screen">
                            <p className="text-2xl text-gray-500">No data available for this product ID.</p>
                        </div>
                    )
                }
            </Container>


        </div>
    );
};

export default ProductDetails;