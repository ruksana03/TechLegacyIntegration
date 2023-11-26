import { Outlet } from "react-router-dom";
import BannerButton from "./BannerButton";


const HomeBanner = () => {
    return (
        <div className="h-56 border-2 mt-2 rounded-lg shadow-md shadow-sky-900">
            <BannerButton/>
            <Outlet/>
        </div>
    );
};

export default HomeBanner;