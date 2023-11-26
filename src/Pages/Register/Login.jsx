import { Link, useLocation, useNavigate } from "react-router-dom";
import SocialLogin from "./SocialLogin";
import { noStyle, customTextBorder, gradientBorder } from '../../Components/Shared/StyleJS/border';
import { gradientText } from '../../Components/Shared/StyleJS/text';
import useAuth from "../../Hooks/useAuth";
import toast from "react-hot-toast";
import { Helmet } from "react-helmet-async";
import { ImSpinner10 } from "react-icons/im";
import { getToken } from "../../API/verify";

const Login = () => {
    const { signIn,loading } = useAuth();
    const navigate = useNavigate()
    const location = useLocation()
    const from = location?.state?.from?.pathname || '/'

    //Login form submit function
    const handleSubmit = async event => {
        event.preventDefault()
        const form = event.target
        const email = form.email.value
        const password = form.password.value

        try {
            const result = await signIn(email, password)

            // code for token 
            await getToken(result?.user?.email)

            navigate(from, { replace: true })
            toast.success('Login Successful')
        } catch (err) {
            console.log(err)
            toast.error(err?.message)
        }
    }

    return (
        <>
            <Helmet>
                <title>TLI | Sign Up</title>
            </Helmet>
            <div
                className="mx-auto mb-8 border-2 p-4 font-mono bg-neutral-300 w-11/12 shadow-2xl shadow-black md:w-8/12 lg:w-4/12"
                style={{ ...gradientBorder }}>
                <h1 className="text-3xl font-bold text-center mb-6">Welcome Again </h1>

                {/* register form start */}
                <form onSubmit={handleSubmit}>
                    <div>
                        {/* email field start */}
                        <div className="flex flex-col my-2">
                            <label className="text-sm text-neutral-600">Email address</label>
                            <input
                                required
                                type="email"
                                name="email"
                                id=""
                                placeholder="name@domain.com"
                                className="focus:border-black focus:border-1 hover:shadow-md hover:shadow-black"
                                style={{ ...noStyle, ...customTextBorder }}
                            />
                        </div>

                        {/* email field end */}

                        {/* password field start */}
                        <div className="flex flex-col my-2">
                            <label className="text-sm text-neutral-600">Password</label>
                            <input
                                required
                                type="password"
                                name="password"
                                id=""
                                placeholder="******"
                                className="focus:border-black focus:border-1 hover:shadow-md hover:shadow-black"
                                style={{ ...noStyle, ...customTextBorder }}

                            />
                        </div>
                        {/* password field end */}

                        {/* resister form submit button  */}
                        <button
                            type="submit"
                            className="mt-6 w-full py-2 text-lg border-[1px] shadow-md shadow-white hover:shadow-2xl hover:text-xl "
                            style={{ ...gradientBorder }}
                        >
                              {loading ? (
                                <ImSpinner10 className='animate-spin m-auto text-[#E13D63]' />
                            ) : (
                                'Continue'
                            )}
                            {/* Continue */}
                        </button>
                    </div>
                </form>

                {/* register form end */}

                {/* divider  */}
                <div className="my-4 border-b border-neutral-500" />

                {/* Change page  */}
                <p className="text-neutral-600">
                    New Here
                    <Link to="/register"
                        className="mx-1 font-extrabold text-lg border-transparent shadow-white  shadow-lg hover:text-xl transition"
                        style={{ ...gradientText }}
                    >
                        Sign Up
                    </Link>
                </p>

                {/* social Login  */}
                <SocialLogin />
            </div>
        </>
    );
};

export default Login;