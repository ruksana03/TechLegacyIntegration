import { useEffect, useState } from "react";
import UpdateReviewModal from "./UpdateReviewModal";
import { gradientBorder } from "../../Shared/StyleJS/border"
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import { updateProductFeatured, updateProductStatus } from "../../../API/products";

const ProductsDataRow = ({ eachProduct, refetch }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [isAccepted, setIsAccepted] = useState(false);
    const [isRejected, setIsRejected] = useState(false);

    const modalHandlerProductReview = async (features) => {
        try {
            const data = await updateProductFeatured({ id: eachProduct._id, featured: features });
            console.log(data);
            toast.success("Featured Updated");
            refetch()
        } catch (err) {
            console.error("Error updating product:", err);
            toast.error(err.message);
        } finally {
            setIsOpen(false);
        }
    };

    const handleAccept = async () => {
        try {
            await updateProductStatus(eachProduct._id, 'accept');
            setIsAccepted(true);
            refetch()
        } catch (error) {
            console.error(error);
        }
    };

    const handleReject = async () => {
        try {
            await updateProductStatus(eachProduct._id, 'reject');
            setIsRejected(true);
            refetch()
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        console.log('isAccepted:', isAccepted);
    }, [isAccepted]);

    useEffect(() => {
        console.log('isReject:', isRejected);
    }, [isRejected]);



    return (
        <tr>
            <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                <p className='text-gray-900 whitespace-no-wrap'>{eachProduct?.productName}</p>
            </td>
            <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                <Link to={`/product/${eachProduct._id}`}><button className="border px-4  shadow-md hover:bg-slate-500 hover:text-white" style={{ ...gradientBorder }}>View</button></Link>
            </td>
            <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                <button
                    className="px-4 py-2 border"
                    style={{ ...gradientBorder }}
                    onClick={() => setIsOpen(true)}

                >
                    {eachProduct.featured}

                </button>
            </td>
            <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                <button
                    className="px-4 py-2 border"
                    style={{ ...gradientBorder }}


                >
                    {eachProduct.status}

                </button>
            </td>
            <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm '>
                {eachProduct.status === 'pending' && (
                    <div className="flex">
                        <button
                            onClick={handleAccept}
                            disabled={isAccepted || isRejected}
                            className={`cursor-pointer ${isAccepted ? 'bg-[#93B65F]' : 'bg-[#D9CBB1]'} px-4 py-2 text-black`}
                        >
                            Accept
                        </button>
                        <button
                            onClick={handleReject}
                            disabled={isAccepted || isRejected}
                            className={`cursor-pointer ${isRejected ? 'bg-[#9F0908]' : 'bg-[#D9CBB1]'} px-4 py-2 text-black ml-2`}
                        >
                            Reject
                        </button>
                    </div>
                )}
                {eachProduct.status === 'Accepted' && (
                    <span className="text-green-500">Accepted</span>
                )}
                {eachProduct.status === 'Rejected' && (
                    <span className="text-red-500">Rejected</span>
                )}
            </td>


            {/* <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                <button
                    onClick={handleAccept}
                    disabled={isAccepted || isRejected || eachProduct.status.toLowerCase() !== 'pending'}
                    className={`cursor-pointer ${isAccepted ? 'bg-green-500' : 'bg-gray-300'} px-4 py-2 rounded-md text-white`}
                >
                    Accept
                </button>
                <button
                    onClick={handleReject}
                    disabled={isAccepted || isRejected || eachProduct.status.toLowerCase() !== 'pending'}
                    className={`cursor-pointer ${isRejected ? 'bg-red-500' : 'bg-gray-300'} px-4 py-2 rounded-md text-white ml-2`}
                >
                    Reject
                </button>
            </td> */}




            <UpdateReviewModal
                isOpen={isOpen}
                setIsOpen={setIsOpen}
                eachProduct={eachProduct}
                modalHandlerProductReview={modalHandlerProductReview}
            />
        </tr>
    );
};

export default ProductsDataRow;