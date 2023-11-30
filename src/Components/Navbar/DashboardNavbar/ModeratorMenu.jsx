import { Link } from "react-router-dom";

const ModeratorMenu = () => {
    const links = ['mngProductReview','mngProductReview'];
    const menuNames = ['Product Review Queue',' Reported Contents'];
    return (
        <div className="flex flex-col lg:gap-4">
            {
                links.map((link, index) =>
                    <ol key={link}>
                        <li >
                            <Link to={`dashboard/${link}`}>{menuNames[index]}</Link>
                        </li>
                    </ol>)
            }
        </div>
    )
};

export default ModeratorMenu;