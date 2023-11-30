import { Helmet } from "react-helmet-async";
import useAuth from "../../../Hooks/useAuth";
import useUserRole from "../../../Hooks/useUserRole";
import { gradientBorder } from "../../../Components/Shared/StyleJS/border";
import { FcLikePlaceholder } from "react-icons/fc";
import { useEffect, useState } from "react";
import PayModal from "../../../Components/DashboardCmp/MyProfileCmp/PayModal";
import axiosSecure from "../../../API/axiosSecure";



const MyProfile = () => {
    const { user } = useAuth()
    const [role] = useUserRole()
    const [activeUser, setActiveUser] = useState(null);
    let [isOpen, setIsOpen] = useState(false)

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const response = await axiosSecure.get(`/user/email/${user?.email}`);
                const userData = response.data;
                setActiveUser(userData);
            } catch (error) {
                console.error('Error fetching user data:', error);
            }
        };

        fetchUserData();
    }, [user]);


    // console.log("active USer", activeUser)

    const [subscriptionInfo, setSubscriptionInfo] = useState({})

    useEffect(() => {
        setSubscriptionInfo({
            techEnthusiasts: {
                name: user?.displayName,
                email: user?.email,
                image: user?.photoURL,
            },
            userID: activeUser?._id || null,
            pay: 500,
        });
    }, [user, activeUser]);

    // console.log("userID:", subscriptionInfo.userID);

    const closeModal = () => {
        setIsOpen(false);
    };



    return (
        <div className='font-mono flex justify-start items-center h-screen mt-12 lg:mt-0'>
            <Helmet>
                <title>TLI | My Profile</title>
            </Helmet>
            <div className='bg-white rounded-2xl w-full mt-12'>
                <img
                    alt='profile'
                    src='https://i.ibb.co/frxfndF/Profile-cover.jpg'
                    className='w-full mb-4 rounded-t-lg h-64' />
                <div className='flex flex-col  justify-start p-4 -mt-16'>
                    <div className="flex gap-4 mb-4">
                        <img
                            alt='profile'
                            src={user.photoURL}
                            className='object-cover h-24 w-24  border-2 p-1'
                            style={{ ...gradientBorder }} />
                        <p className='mt-16 bg-[#102A43] text-white px-4 py-2 text-center rounded-full shadow-md shadow-slate-800'>
                            {role && role}
                        </p>
                    </div>
                    <div className=" border-[1px] px-4 py-2" style={{ ...gradientBorder }}>
                        <div className="grid grid-cols-12 gap-4">
                            <div className="col-span-6">
                                <p className='mt-2 font-medium text-gray-800 '>
                                    User Id: {user?.uid}
                                </p>
                                <p className='mt-2 font-medium text-gray-800'>
                                    User Id2: {activeUser?._id}
                                </p>
                            </div>
                            <button
                                onClick={() => setIsOpen(true)}
                                className='flex justify-center items-center gap-8 bg-gradient-to-r from-[#E63B60] via-[#102A43] to-[#af4053]  px-10 py-1 rounded-lg text-white col-span-6 cursor-pointer hover:bg-[#af4053] mb-1'>
                                <FcLikePlaceholder /> Subscribe by Pay BDT 500 +
                            </button>
                        </div>
                        <PayModal closeModal={closeModal} isOpen={isOpen} subscriptionInfo={subscriptionInfo} />
                        <hr className="border[1px] mx-6 my-3" style={{ ...gradientBorder }} />

                        <div className="grid grid-cols-12 gap-4">
                            <p className='flex col-span-6 '>
                                User Name:
                                <span className='font-bold text-black '>
                                    {user.displayName}
                                </span>
                            </p>
                            <p className='flex col-span-6'>
                                User Email:
                                <span className='font-bold text-black '>{user.email}</span>
                            </p>

                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default MyProfile;