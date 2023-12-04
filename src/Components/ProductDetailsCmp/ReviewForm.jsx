import { useLoaderData } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import {gradientBorder} from "../Shared/StyleJS/border"

const ReviewForm = () => {
    const {user} = useAuth();
    const product = useLoaderData();
    console.log(product)
    return (
        <>
            <form className="font-mono">
                <div>
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
                    <div></div>
                </div>
            </form>
        </>
    );
};

export default ReviewForm;