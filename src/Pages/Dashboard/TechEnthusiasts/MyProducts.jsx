import useAuth from "../../../Hooks/useAuth";
import { Helmet } from "react-helmet-async";
import OwnProductDataRow from "../../../Components/DashboardCmp/MyProductsCmp/OwnProductDataRow";
import useProductsByEmail from "../../../Hooks/useProductsByEmail";

const MyProducts = () => {
    const { user } = useAuth();
    const { ProductsByEmail,loading, refetch } = useProductsByEmail(user?.email)
  
    const sortedProducts = [...ProductsByEmail].sort((a, b) => {
        const statusOrder = { pending: 0, accepted: 1, rejected: 2 };
        return statusOrder[a.status.toLowerCase()] - statusOrder[b.status.toLowerCase()];
      });

    return (
        <div className="font-mono">
            <Helmet>
                <title>TLI | My Product</title>
            </Helmet>
            <div className='container mx-auto px-4 sm:px-8'>
                <div className='py-8'>
                    <div className='-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto'>
                        <div className='inline-block min-w-full shadow rounded-lg overflow-hidden'>
                            <table className='min-w-full leading-normal'>
                                <thead>
                                    <tr>
                                        <th
                                            scope='col'
                                            className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                                        >
                                            Product Name
                                        </th>
                                        <th
                                            scope='col'
                                            className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                                        >
                                            Number of votes

                                        </th>
                                        <th
                                            scope='col'
                                            className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                                        >
                                            Status
                                        </th>
                                        <th
                                            scope='col'
                                            className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                                        >
                                            Delete
                                        </th>
                                        <th
                                            scope='col'
                                            className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                                        >
                                            Update
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {/* -------Product row data-------- */}

                                     {sortedProducts.map(ownProduct => ( 
                                         <OwnProductDataRow 
                                         key={ownProduct._id} 
                                         ownProduct={ownProduct}
                                         refetch={refetch} 
                                         loading={loading}/>
                                    ))} 
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyProducts;