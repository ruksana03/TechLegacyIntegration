import { Link } from "react-router-dom";
// import Container from "../Shared/Container";
import Logo from "../Shared/Logo";
import { FaFacebook, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import Container from "../Shared/Container";


const Footer = () => {
    return (
        <div className="w-full bg-[#A69CAC] py-6 font-mono bg-cover object-cover" style={{ backgroundImage: "url('https://i.ibb.co/SdQGPNh/footer-bg-img.jpg')" }}>

            <Container>
                <div className="flex justify-center mb-12">
                    <Logo />
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-12">

                    {/* add location start  */}
                    <div className=" text-center lg:text-left lg:col-span-4 flex flex-col gap-4 justify-between">
                        <p className="pt-12">Level-4, 34, Awal Centre, Mirpur, Dhaka <br />
                            Support: techlegacy@integration.com <br />
                            Helpline: 01869864382 , 04545454455 <br />
                            (Available : Sat - Thu, 10:00 AM to 7:00 PM)</p>
                    </div>
                     {/* add location end  */}

                     {/* Add link start  */}
                    <div className="text-center lg:text-left lg:col-span-4 px-8 pt-12 font-bold ">
                        <p className="font-normal">Useful Links</p>
                        <div className="grid grid-cols-1 gap-2 ">
                        <Link>Blog</Link>
                        <Link>About Us</Link>
                        <Link>Our Achievement</Link>
                        <Link>Refund policy</Link>
                        <Link>Terms and Conditions</Link>
                        <Link>Privacy & App Privacy Policy</Link>
                        </div>
                    </div>
                      {/* Add link end  */}
                    <div className="text-center lg:text-left lg:col-span-4 px-6 pt-12">
                        <p className="">Follow Us</p>
                        <div className="flex gap-4 justify-center lg:justify-between items-center text-center lg:w-5/12 my-4 text-2xl">
                            <FaFacebook />
                            <BsTwitterX />
                            <FaLinkedinIn />
                            <FaYoutube />
                        </div>

                    </div>
                </div>

                <p className="text-center text-sm font-extrabold mt-12">© 2023 TechLegacyIntegration<span className="text-base">(TLI)</span> Inc. All rights reserved.</p>
            </Container>



        </div>
    );
};

export default Footer;