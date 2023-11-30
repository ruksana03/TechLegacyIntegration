import { Link } from "react-router-dom";

const TechEnthusiastsMenu = () => {
    const links = ['myProfile', 'postProduct', 'MyProducts'];
    const menuNames = [' My Profile', 'Add Product', 'My Products'];

    // You can set the userId dynamically based on your application logic
    const userId = '123'; // Replace with the actual userId

    return (
        <div className="flex flex-col lg:gap-4">
            {links.map((link, index) => (
                <ol key={link}>
                    <li>
                        {link === 'myProfile' ? (
                            <Link to={`dashboard/myProfile/${userId}`}>{menuNames[index]}</Link>
                        ) : (
                            <Link to={`dashboard/${link}`}>{menuNames[index]}</Link>
                        )}
                    </li>
                </ol>
            ))}
        </div>
    );
};

export default TechEnthusiastsMenu;
