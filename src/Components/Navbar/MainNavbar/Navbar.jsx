import { Link } from "react-router-dom";
import Container from "../../Shared/Container";
import Logo from "../../Shared/Logo";
import DropdownSM from "./DropdownSM";
import Menus from "./Menus";
import ProfileDropdown from "./ProfileDropdown";


const Navbar = () => {
    return (
        <div
            className='fixed w-full bg-gradient-to-t from-[#021631] to-[#1D3D54] text-white font-mono text-lg z-10 shadow-2xl'>
            <div
                className='py-4 border-b-[1px]'>
                {/* for sm and md  */}
                <div
                    className="flex justify-between text-center gap-4 w-11/12 mx-auto lg:hidden">
                    <Link
                        to='/'>
                        <div>
                            <Logo />
                        </div>
                    </Link>
                    <div>
                        <DropdownSM />
                    </div>
                </div>

                <Container>
                    {/* for lg:  */}
                    <div
                        className='hidden lg:grid grid-cols-12 gap-3 md:gap-0'>
                        <Link
                            to='/'>
                            <div
                                className="col-span-3 mx-4">
                                <Logo />
                            </div>
                        </Link>

                        <div
                            className="col-span-8 flex justify-center">
                            <Menus />
                        </div>
                        <div
                            className="col-span-1 border-2 rounded-lg h-full py-0 hover:p-1 hover:shadow-white hover:shadow-md transition">
                            <ProfileDropdown />
                        </div>
                    </div>
                </Container>
            </div>
        </div>
    );
};

export default Navbar;