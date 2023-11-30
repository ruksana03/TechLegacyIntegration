import { Outlet } from "react-router-dom";
import NavbarDashboard from "../Components/Navbar/DashboardNavbar/NavbarDashboard";


const DashboardLayout = () => {
    // const activeUser = useLoaderData();
    // console.log('active USer:', activeUser)
    return (
        <div className="relative min-h-screen md:flex">
            <NavbarDashboard />
            <div className='flex-1  md:ml-64'>
                <div className='p-5'>
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;