import { Link } from "react-router-dom";
import {gradientBorder} from "../../Shared/StyleJS/border";
import { RiDeleteBinFill } from "react-icons/ri";
import { toast } from 'react-toastify';
import { deleteSingleProduct } from "../../../API/products.js";
import { deleteReport } from "../../../API/report.js";


const ReportedDataRow = ({reportedProduct,refetch}) => {

    const handleReportedDataDelete = async () => {
        try {
            await toast.promise(
                deleteSingleProduct(reportedProduct?.productId),
                {
                    loading: 'Deleting...',
                    success: (res) => {
                        if (res.deletedCount > 0) {
                            refetch();
                            return `${reportedProduct.productName} has been deleted`;
                        } else {
                            throw new Error(`Failed to delete ${reportedProduct.productName}`);
                        }
                    },
                    error: (error) => `Error: ${error.message || 'Something went wrong'}`,
                }
            );
    
            // After product deletion, delete the associated report
            await deleteReport(reportedProduct._id);
    
            refetch();
            toast.success("Product and Report Deleted Successfully");
            console.log('Product and report deleted successfully.');
        } catch (error) {
            console.error('Error deleting product and report:', error);
    
            // Show an error toast
            toast.error('Error deleting product and report. Please try again.');
        }
    };
    
    return (
        <tr>
            <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                <p className='text-gray-900 whitespace-no-wrap'>{reportedProduct?.productName}</p>
            </td>
            <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                <Link to={`/product/${reportedProduct?.productId}`}><button className="border px-4  shadow-md hover:bg-slate-500 hover:text-white" style={{ ...gradientBorder }}>View</button></Link>
            </td>
            <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                <button
                onClick={handleReportedDataDelete}
                    className="px-4 py-2 border"
                    style={{ ...gradientBorder }}
                    // onClick={() => setIsOpen(true)}

                >
                    <RiDeleteBinFill className="text-red-900 text-xl"/>

                </button>
            </td>
        </tr>
    );
};

export default ReportedDataRow;