import { GrLogout } from 'react-icons/gr'
// import { FcSettings } from 'react-icons/fc'
import { AiOutlineBars } from 'react-icons/ai'
// import { BsGraphUp } from 'react-icons/bs'
// import MenuItem from './MenuItem'

import Logo from '../../Shared/Logo'
import { useState } from 'react'
import useUserRole from '../../../Hooks/useUserRole';
import AdminMenu from './AdminMenu';
import { Link } from 'react-router-dom';
import TechEnthusiastsMenu from './TechEnthusiastsMenu';
import ModeratorMenu from './ModeratorMenu';
import useAuth from '../../../Hooks/useAuth';
// import useAllUsers from '../../../Hooks/useAllUsers';
// import MyProfile from '../../../Pages/Dashboard/TechEnthusiasts/MyProfile';

const NavbarDashboard = () => {
  
    const { logOut, user } = useAuth();
    console.log(user)
    const [isActive, setActive] = useState(false)
    const [role] = useUserRole();
    const handleToggle = () => {
        setActive(!isActive)
    }
    return (
        <>
            {/* Small Screen Navbar */}
            <div className='bg-gray-100 font-mono text-gray-800 flex justify-between md:hidden'>
                <div>
                    <div className='block cursor-pointer p-4 font-bold'>
                        <Logo />
                    </div>
                </div>

                <button
                    onClick={handleToggle}
                    className='mobile-menu-button p-4 focus:outline-none focus:bg-gray-200'
                >
                    <AiOutlineBars className='h-5 w-5' />
                </button>
            </div>

            {/* Sidebar */}
            <div
                className={`z-10 md:fixed flex flex-col font-mono justify-between overflow-x-hidden bg-gray-100 w-64 space-y-6 px-2 py-4 absolute inset-y-0 left-0 transform ${isActive && '-translate-x-full'
                    }  md:translate-x-0  transition duration-200 ease-in-out`}>


                <Link to='/'>
                    <div className='w-full hidden md:flex px-4 py-2 shadow-lg rounded-lg justify-center items-center mx-auto'>
                        <Logo />
                    </div>
                </Link>

                <div className='flex flex-col justify-between flex-1 mt-6'>
                    {role === 'TechEnthusiasts' && <TechEnthusiastsMenu />}
                    {role === 'Moderator' && <ModeratorMenu />}
                    {role === 'Admin' && <AdminMenu />}
                </div>

                <div>
                    <hr />
                    <div className='flex justify-start items-center gap-4 mt-5'>
                        <img className='w-14 h-14 rounded-full border-2 p-1 border-black' src={user.photoURL} alt="" />
                        <p>{user.displayName}</p>
                    </div>



                    <button
                        onClick={logOut}
                        className='flex w-full items-center px-4 py-2  text-gray-600 hover:bg-gray-300   hover:text-gray-700 transition-colors duration-300 transform'
                    >
                        <GrLogout className='w-5 h-5' />

                        <span className='mx-4 font-medium'>Logout</span>
                    </button>
                </div>
            </div>
        </>
    );
};

export default NavbarDashboard;