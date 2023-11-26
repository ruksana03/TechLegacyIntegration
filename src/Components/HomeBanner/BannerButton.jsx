import { NavLink } from "react-router-dom";
import { gradientBorder } from "../Shared/StyleJS/border";

const BannerButton = () => {
    const bannerLinks = ['share', 'ourStory'];
    const bannerMenu = ['Share', 'Our Story'];
    return (
        <div className="grid grid-cols-12 gap-4 py-2 px-4 shadow-md shadow-pink-900 rounded-lg bg-slate-200">
            {bannerLinks.map((link, index) => (
                <div key={link} className="col-span-6">
                    <NavLink
                        to={`/${link}`}
                        className='block text-center w-full border border-gray-300 hover:bg-gray-100'
                        style={({ isActive, isPending }) => ({
                            fontWeight: isActive ? "bold" : "",
                            color: isActive ? "white" : "black",
                            padding: isPending?'0.5rem':"",
                            background: isActive? "linear-gradient(#E63B60, #1A3951, #0A223C,#1B3A51, #E63B60)":"white",
                            ...gradientBorder,
                        })}
                    >
                        {bannerMenu[index]}
                    </NavLink>
                </div>
            ))}
        </div>
    );
};

export default BannerButton;
