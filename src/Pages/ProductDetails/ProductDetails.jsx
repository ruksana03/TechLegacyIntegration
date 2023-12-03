// import { FaArrowsToEye } from "react-icons/fa6";
import { MdOutlineReportProblem } from "react-icons/md";
import { BiSolidLike } from "react-icons/bi";
import { BiSolidDislike } from "react-icons/bi";
import { Helmet } from "react-helmet-async";
import { Link, useLoaderData } from "react-router-dom";
import Container from "../../Components/Shared/Container";
import { formatDate } from "../../API/formatDate";

const ProductDetails = () => {
    const product = useLoaderData();
    console.log(product)
    return (
        <div className="font-mono">
            <Helmet>
                <title>TLI | {product?.productName}</title>
            </Helmet>
            <Container>
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
                            <Link
                                to={`/product/${product._id}`}>
                                <h1
                                    className="font-extrabold border-[1px] border-black rounded-md cursor-pointer mt-2 shadow-md shadow-black px-2">
                                    {product?.productName}
                                </h1>
                            </Link>
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
                                <div className="flex justify-start products-center gap-4">
                                    <BiSolidLike />
                                    <BiSolidDislike />
                                    <p>{product.vote}</p>
                                </div>
                                <Link className="flex justify-between px-3 z-10 gap-2">
                                    <hr className="my-2" />

                                    <div className="group relative flex products-center">
                                        <button className="text-2xl">
                                            <MdOutlineReportProblem />
                                        </button>
                                        <span className="hidden group-hover:inline-block ml-2 text-black bg-white text-sm font-extrabold p-2 rounded-md">
                                            Report
                                        </span>
                                    </div>
                                </Link>
                            </div>
                        </div>

                    </div>
                    <div className="col-span-4 h-96 overflow-y-auto">

                    </div>
                </div>
            </Container>


        </div>
    );
};

export default ProductDetails;