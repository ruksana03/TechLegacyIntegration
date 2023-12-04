import { Helmet } from "react-helmet-async";
import useReport from "../../../Hooks/useReport";
import ReportedDataRow from "../../../Components/DashboardCmp/MngReportedContentCmp/ReportedDataRow";


const MngReportedContent = () => {
    const { AllReport, loading, refetch } = useReport();
    console.log(AllReport)
    return (
        <div className="font-mono">
            <Helmet>
                <title>TLI | Manage Products Report</title>
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

                                        Delete Product
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                             

                                {AllReport.map((reportedProduct) => (
                                    <ReportedDataRow
                                        key={reportedProduct._id}
                                        reportedProduct={reportedProduct}
                                        refetch={refetch}
                                    />
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MngReportedContent;