import { Link } from "react-router-dom";

const TechEnthusiastsMenu = () => {
    const links = [`myProfile`, 'postProduct', 'myProducts'];
    const menuNames = ['My Profile', 'Add Product', 'My Products'];
    return (
        <div className="flex flex-col lg:gap-4">
            {
                links.map((link, index) =>
                    <ol key={link}>
                        <li>
                            <Link to={`/dashboard/${link}`}>{menuNames[index]}</Link>
                        </li>
                    </ol>)
            }
        </div>
    );
};

export default TechEnthusiastsMenu;
