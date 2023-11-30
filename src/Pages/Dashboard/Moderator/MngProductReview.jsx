import { Helmet } from "react-helmet-async";
import ProductsDataRow from "../../../Components/DashboardCmp/MngProductReviewCmp/ProductsDataRow";
import useAllProducts from "../../../Hooks/useAllProducts";



const MngProductReview = () => {
const { AllProducts, refetch } = useAllProducts();

    return (
        <>
           <div className='container mx-auto px-4 sm:px-8 font-mono' >
                <Helmet>
                    <title>TLI | Manage Products Review</title>
                </Helmet>
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
                                            Product Details
                                        </th>
                                        <th
                                            scope='col'
                                            className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                                        >
                                            Make Featured
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
                                            

                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {AllProducts &&
                                        AllProducts?.map(eachProduct => (
                                            <ProductsDataRow
                                                key={eachProduct._id}
                                                eachProduct={eachProduct}
                                                refetch={refetch}
                                               
                                            />
                                        ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default MngProductReview;