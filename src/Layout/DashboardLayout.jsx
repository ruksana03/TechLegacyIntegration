import { Outlet } from "react-router-dom";
import NavbarDashboard from "../Components/Navbar/DashboardNavbar/NavbarDashboard";


const DashboardLayout = () => {
    return (
        <div>
            <NavbarDashboard/>
            <Outlet/>
        </div>
    );
};

export default DashboardLayout;