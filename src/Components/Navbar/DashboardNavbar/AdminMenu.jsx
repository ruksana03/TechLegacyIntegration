import { Link } from "react-router-dom";

const AdminMenu = () => {
    const links = ['statistics', 'mngUsers','mngCoupons'];
    const menuNames = ['Statistics','Manage Users',' Manage Coupons'];
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
    )
};

export default AdminMenu;