import { Dialog, Transition } from '@headlessui/react'
// import { Elements } from '@stripe/react-stripe-js';
import { Fragment, useState } from 'react';
import useAuth from '../../Hooks/useAuth';
import { gradientBorder } from '../Shared/StyleJS/border'
import { addReview } from '../../API/review';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
// import { ImSpinner10 } from 'react-icons/im';

const ReviewModal = ({ isOpen, closeModal, product }) => {
    const { user } = useAuth();
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false)
    const handleReview = async (e) => {
        setLoading(true);
        e.preventDefault();
        const form = e.target;

        const ProductId = form.productId.value;
        const ProductName = form.productName.value;
        const rating = form.rating.value;
        const reviewerName = form.reviewerName.value;
        const img = form.img.value;
        const email = form.email.value;
        const description = form.description.value;


        if (user?.email === product?.owner?.email) {
            toast.error('Product owners cannot review their own products.');
            setLoading(false);
            return;
        }

        const review = {
            ProductId,
            ProductName,
            rating,
            reviewerName,
            img,
            email,
            description
        }
        console.log(review)

        try {
            const data = await addReview(review);
            console.log(data);

            toast.success('Review Added!');
           closeModal();
        } catch (err) {
            console.log(err);
            toast.error(err.message);
        } finally {
            setLoading(false);
        }
    }
    return (
        <Transition appear show={isOpen} as={Fragment}>
            <Dialog as='div' className='relative z-10' onClose={closeModal}>
                <Transition.Child
                    as={Fragment}
                    enter='ease-out duration-300'
                    enterFrom='opacity-0'
                    enterTo='opacity-100'
                    leave='ease-in duration-200'
                    leaveFrom='opacity-100'
                    leaveTo='opacity-0'
                >
                    <div className='fixed inset-0 bg-black bg-opacity-25 font-mono' />
                </Transition.Child>

                <div className='fixed inset-0 overflow-y-auto font-mono'>
                    <div className='flex min-h-full items-center justify-center p-4 text-center'>
                        <Transition.Child
                            as={Fragment}
                            enter='ease-out duration-300'
                            enterFrom='opacity-0 scale-95'
                            enterTo='opacity-100 scale-100'
                            leave='ease-in duration-200'
                            leaveFrom='opacity-100 scale-100'
                            leaveTo='opacity-0 scale-95'
                        >
                            <Dialog.Panel className='w-full max-w-md transform overflow-hidden rounded-2xl bg-[#102A43] text-white p-6 text-left align-middle shadow-xl transition-all'>
                                <Dialog.Title
                                    as='h3'
                                    className='text-lg font-bold text-center leading-6 text-white'
                                >
                                    Post Your Review
                                </Dialog.Title>
                                <form onSubmit={handleReview}>
                                    <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                                        <div>
                                            {/*------  Product Id ------- */}
                                            <div className='space-y-1  w-full text-sm'>
                                                <text htmlFor='location' className='block text-gray-600'>
                                                    Product Id
                                                </text>
                                                <input
                                                    className='w-full px-4 py-3 text-gray-800 border  focus:outline-black'
                                                    style={{ ...gradientBorder }}
                                                    name='productId'
                                                    id='productId'
                                                    defaultValue={product?._id}
                                                    readOnly
                                                    type='text'
                                                    placeholder='Product Id'
                                                    required
                                                />
                                            </div>
                                            {/* ----product name ----- */}
                                            <div className='space-y-1 text-sm'>
                                                <text htmlFor='title' className='block text-gray-600'>
                                                    Product Name
                                                </text>
                                                <input
                                                    className='w-full px-4 py-3 text-gray-800 border focus:outline-black rounded-md '
                                                    readOnly
                                                    name='productName'
                                                    defaultValue={product?.productName}
                                                    id='name'
                                                    type='text'
                                                    placeholder=''
                                                    disabled
                                                />
                                            </div>
                                            {/* ----product Rating ----- */}
                                            <div className='space-y-1 text-sm'>
                                                <text htmlFor='title' className='block text-gray-600'>
                                                    Product Rating
                                                </text>
                                                <input
                                                    className='w-full px-4 py-3 text-gray-800 border focus:outline-black rounded-md '
                                                    name='rating'
                                                    id='rating'
                                                    type='number'
                                                    placeholder='Add Rating Out Of 5'

                                                />
                                            </div>
                                        </div>
                                        <div>
                                            {/*------  Reviewer name ------- */}
                                            <div className='space-y-1  w-full text-sm'>
                                                <text htmlFor='location' className='block text-gray-600'>
                                                    Reviewer Name
                                                </text>
                                                <input
                                                    className='w-full px-4 py-3 text-gray-800 border  focus:outline-black'
                                                    style={{ ...gradientBorder }}
                                                    name='reviewerName'
                                                    id='reviewerName'
                                                    defaultValue={user.displayName}
                                                    readOnly
                                                    type='text'
                                                    placeholder='Reviewer Name'
                                                    required
                                                />
                                            </div>
                                            {/*------  Reviewer image ------- */}
                                            <div className='space-y-1 text-sm'>
                                                <text htmlFor='title' className='block text-gray-600'>
                                                    Reviewer Image
                                                </text>
                                                <input
                                                    className='w-full px-4 py-3 text-gray-800 border focus:outline-black rounded-md '
                                                    readOnly
                                                    name='img'
                                                    defaultValue={user?.photoURL}
                                                    id='img'
                                                    type='url'
                                                    placeholder=''
                                                    disabled
                                                />
                                            </div>

                                            {/* ------owner email------ */}
                                            <div className='space-y-1 text-sm'>
                                                <text htmlFor='title' className='block text-gray-600'>
                                                    Reviewer Email
                                                </text>
                                                <input
                                                    className='w-full px-4 py-3 text-gray-800 border focus:outline-black rounded-md '
                                                    readOnly
                                                    name='email'
                                                    defaultValue={user?.email}
                                                    id='email'
                                                    type='email'
                                                    placeholder=''
                                                    disabled
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    {/* --Product Description -- */}
                                    <div className='space-y-1  w-full text-sm'>
                                        <label htmlFor='description' className='block text-gray-600'>
                                            Product Description
                                        </label>
                                        <textarea
                                            id='description'  // Provide a meaningful id
                                            name='description'  // Provide a meaningful name
                                            className='block w-full h-32 px-4 py-3 text-gray-800  border focus:outline-black '
                                            style={{ ...gradientBorder }}
                                        ></textarea>
                                    </div>
                                    <button
                                        type='submit'
                                        className='w-full p-3 mt-5 text-center font-medium text-white transition duration-200 rounded shadow-md bg- bg-gradient-to-r from-[#E63B60] via-[#102A43] to-[#af4053]'
                                    >

                                        Send Request & Continue


                                    </button>
                                </form>
                                <hr className='mt-8 ' />
                                {/* Card data form */}
                                {/* checkout form */}
                                {/* <Elements stripe={stripePromise}>
                                    <CheckoutForm
                                        closeModal={closeModal}
                                        subscriptionInfo={subscriptionInfo}
                                    />
                                </Elements> */}
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition>
    );
};

export default ReviewModal;