import { useState } from "react";
import UpdateUserRoleModal from "./UpdateUserRoleModal";
import { updateUserRole } from "../../../API/verify";
import toast from "react-hot-toast";


const UserDataRow = ({ loginUser, refetch }) => {
    // console.log(loginUser)
    const [isOpen, setIsOpen] = useState(false);
    const modalHandler = async role => {
        try {
            const data = await updateUserRole({ email: loginUser?.email, role })
            console.log(data)
            toast.success("Role updated")
            refetch()
        } catch (err) {
            console.log(err)
            toast.error(err.message)
        } finally {
            setIsOpen(false)
        }
    }
    return (
        <tr>
            <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                <p className='text-gray-900 whitespace-no-wrap'>{loginUser?.name}</p>
            </td>
            <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                <p className='text-gray-900 whitespace-no-wrap'>{loginUser?.email}</p>
            </td>
            <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                <span className='relative'>{loginUser.role}</span>
            </td>

            <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                <button
                    onClick={() => setIsOpen(true)}
                    className='relative bg-red-950 px-4 py-2 rounded-md text-white my-4'
                    disabled={loginUser?.role == 'Moderator'}
                >
                    {loginUser?.role !== 'Moderator' && (

                        <button className="">Update Role</button>

                    )}
                </button>
            </td>


            <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                <button
                    onClick={() => setIsOpen(true)}
                    className='relative bg-red-950 px-4 py-2 rounded-md text-white'
                    disabled={loginUser?.role == 'Admin'}
                >
                    {loginUser?.role !== 'Admin' && (
                        <button>Update Role</button>
                    )}
                </button>

            </td>
            <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>

                <span className='relative'>{loginUser.status}</span>
            </td>

            <UpdateUserRoleModal
                isOpen={isOpen}
                setIsOpen={setIsOpen}
                user={loginUser}
                modalHandler={modalHandler}
            />
        </tr>

    );
};

export default UserDataRow;