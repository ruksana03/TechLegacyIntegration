import { Link } from "react-router-dom";


const Menus = () => {
    const links = ['', 'products'];
    const menuNames = ['Home', 'Products'];
    return (
        <div className="flex flex-col lg:flex-row lg:gap-4">
            {
                links.map((link, index) =>
                    <ol key={link}>
                        <li >
                            <Link to={`/${link}`}>{menuNames[index]}</Link>
                        </li>
                    </ol>)
            }
        </div>
    )
}


export default Menus;