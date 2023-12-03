import { MdAutoDelete } from "react-icons/md";
import { CiEdit } from "react-icons/ci";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { deleteSingleProduct } from "../../../API/products";
import { Link } from "react-router-dom";


const OwnProductDataRow = ({ ownProduct, refetch }) => {

 const handleDelete = async () => {
  try {
    await toast.promise(
      deleteSingleProduct(ownProduct._id),
      {
        loading: 'Deleting...',
        success: (res) => {
          if (res.deletedCount > 0) {
            refetch();
            return `${ownProduct.productName} has been deleted`;
          } else {
            throw new Error(`Failed to delete ${ownProduct.productName}`);
          }
        },
        error: (error) => `Error: ${error.message || 'Something went wrong'}`,
      }
    );
    refetch();
    toast.success("Product Deleted Successfully");
    console.log('Product deleted successfully.');
  } catch (error) {
    console.error('Error deleting product:', error);

    // Show an error toast
    toast.error('Error deleting product. Please try again.');
  }
};


  return (
    <tr>
      <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
        <div className='flex items-center'>
          <div className='flex-shrink-0'>
            <div className='block relative'>
              <p>{ownProduct?.productName}</p>
            </div>
          </div>
        </div>
      </td>
      <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
        <p className='text-gray-900 whitespace-no-wrap'>{ownProduct?.vote}</p>
      </td>
      <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
        <p className='text-gray-900 whitespace-no-wrap'>{ownProduct?.status}</p>
      </td>
      <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
        <span className='relative cursor-pointer inline-block px-3 py-1 font-semibold text-green-900 leading-tight'>
          <span
            aria-hidden='true'
            className='absolute inset-0 bg-red-900 text-white'
          ></span>
          <button onClick={handleDelete} className='relative text-white text-xl'><MdAutoDelete /></button>
        </span>
      </td>
      <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
        <span className='relative cursor-pointer inline-block px-3 py-1 font-semibold text-green-900 leading-tight'>
          <span
            aria-hidden='true'
            className='absolute inset-0 bg-blue-400 opacity-50'
          ></span>
          <Link to={`/dashboard/updateProducts/${ownProduct._id}`}> <button className='relative text-black text-xl'><CiEdit /></button></Link>
         
        </span>
      </td>
    </tr>
  );
};

export default OwnProductDataRow;