// ReportModal.jsx

import { Fragment, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import toast from 'react-hot-toast';
// import axiosSecure from '../../API/axiosSecure';
import useAuth from '../../Hooks/useAuth';
import { addReport } from '../../API/report';

const ReportModal = ({ isReportModalOpen, closeReportModalOpen, product }) => {
    const { user } = useAuth();
    const [loading, setLoading] = useState(false)
    // const [reportText, setReportText] = useState('');

    const handleReport = async (e) => {
        setLoading(true);
        e.preventDefault();
        const form = e.target;

        const reportText = form.reportText.value;

        if (user?.email === product?.owner?.email) {
            toast.error('Product owners cannot report their own products.');
            setLoading(false);
            return;
        }

        const report = {
            reportText,
            productName:product?.productName,
            productId:product?._id,
            userEmail:user?.email,
            status: 'Reported',
            
        }
        console.log(report)

        try {
            const data = await addReport(report);
            console.log(data);

            toast.success('Review Added!');
            closeReportModalOpen();
        } catch (err) {
            console.log(err);
            toast.error(err.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <Transition appear show={isReportModalOpen} as={Fragment}>
            <Dialog as='div' className='relative z-10' onClose={closeReportModalOpen}>

                <div className='fixed inset-0 overflow-y-auto font-mono'>
                    <div className='flex min-h-full items-center justify-center p-4 text-center'>
                        <Dialog.Panel className='w-full max-w-md transform overflow-hidden rounded-2xl bg-[#102A43] text-white p-6 text-left align-middle shadow-xl transition-all'>
                            <Dialog.Title
                                as='h3'
                                className='text-lg font-bold text-center leading-6 text-white'
                            >
                                Report Product
                            </Dialog.Title>

                            <form onSubmit={handleReport} action="">
                            <textarea
                                className='mt-4 p-2 border rounded-md w-full text-black'
                                placeholder='Enter your report...'
                                name='reportText'
                            />

                            <div className='mt-4 flex justify-end space-x-4'>
                                <button
                                    type='submit'
                                    className='px-4 py-2 bg-[#CDAA35] text-white rounded-md'
                                >
                                    Report
                                </button>
                                <button
                                    onClick={closeReportModalOpen}
                                    className='px-4 py-2 bg-gray-500 text-white rounded-md'
                                >
                                    Cancel
                                </button>
                            </div>
                            </form>
                        </Dialog.Panel>
                    </div>
                </div>
            </Dialog>
        </Transition>
    );
};

export default ReportModal;
