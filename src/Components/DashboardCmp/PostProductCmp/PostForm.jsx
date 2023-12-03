
import { ImSpinner10 } from "react-icons/im";
import { WithContext as ReactTags } from 'react-tag-input';
import { gradientBorder } from "../../Shared/StyleJS/border"


const PostForm = ({ handleFormSubmit, loading = false, handleImageChange, uploadButtonText, user,handleAddition,handleDelete,suggestions,tags }) => {


    return (
        <div className='w-full min-h-[calc(100vh-40px)] flex flex-col justify-center items-center text-gray-800 border py-6' style={{ ...gradientBorder }}>
            <form onSubmit={handleFormSubmit}>
                <div className='grid w-full grid-cols-1 lg:grid-cols-2 gap-10'>

                    <div className='space-y-6'>
                        {/* --------Product name------------ */}
                        <div className='space-y-1  w-full text-sm'>
                            <text htmlFor='location' className='block text-gray-600'>
                                Product Name
                            </text>
                            <input
                                className='w-full px-4 py-3 text-gray-800 border  focus:outline-black'
                                style={{ ...gradientBorder }}
                                name='productName'
                                id='productName'
                                type='text'
                                placeholder='Product Name'
                                required
                            />
                        </div>

                        {/* ------Product Image ------- */}
                        <div className='flex flex-col w-max mx-auto text-center'>
                            <label>
                                <input
                                    onChange={e => handleImageChange(e.target.files[0])}
                                    className='text-sm cursor-pointer w-36 hidden'
                                    type='file'
                                    name='image'
                                    id='image'
                                    accept='image/*'
                                    hidden
                                />
                                <div className='bg-rose-500 text-white border border-gray-300 rounded font-semibold cursor-pointer p-1 px-3 hover:bg-rose-500'>
                                    {uploadButtonText}
                                </div>
                            </label>
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
                    </div>

                    <div className='space-y-6'>
                        {/* ----owner name ----- */}
                        <div className='space-y-1 text-sm'>
                            <text htmlFor='title' className='block text-gray-600'>
                                Owner Name
                            </text>
                            <input
                                className='w-full px-4 py-3 text-gray-800 border focus:outline-black rounded-md '
                                readOnly
                                name='name'
                                defaultValue={user?.displayName}
                                id='name'
                                type='text'
                                placeholder=''
                                disabled
                            />
                        </div>
                        {/* ------owner email------ */}
                        <div className='space-y-1 text-sm'>
                            <text htmlFor='title' className='block text-gray-600'>
                                Owner Email
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
                        {/*------ owner image ------- */}
                        <div className='space-y-1 text-sm'>
                            <text htmlFor='title' className='block text-gray-600'>
                                Owner Image
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
                    </div>

                </div>


                {/* ------ tags ------ */}
                <div className='space-y-1  w-full text-sm'>
                    <text htmlFor='' className='block text-gray-600'>
                        Select Tags
                    </text>
                    <ReactTags
                        tags={tags}
                        suggestions={suggestions}
                        handleDelete={handleDelete}
                        handleAddition={handleAddition}
                        name="tags"
                        classNames={{
                            tag: 'border mx-2 px-2 py-1',
                            tagInput: 'border border-black',
                            tagInputField: 'py-2 px-4 focus:outline-none'
                        }}
                    />

                </div>

                {/* ----- External lings ---- */}
                <div className='space-y-1 text-sm my-4'>
                    <text htmlFor='title' className='block text-gray-600'>
                        External Links

                    </text>
                    <input
                        className='w-full px-4 py-3 text-gray-800 border focus:outline-black'
                        style={{ ...gradientBorder }}
                        name='externalLinks'
                        id='externalLinks'
                        type='url'
                        placeholder=''
                    />
                </div>

                <button
                    type='submit'
                    className='w-full p-3 mt-5 text-center font-medium text-white transition duration-200 rounded shadow-md bg- bg-gradient-to-r from-[#E63B60] via-[#102A43] to-[#af4053]'
                >
                    {loading ? (
                        <ImSpinner10 className='m-auto animate-spin' size={24} />
                    ) : (
                        'Send Request & Continue'
                    )}

                </button>
            </form>
        </div>
    );
};

export default PostForm;