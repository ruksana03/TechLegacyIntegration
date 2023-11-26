import { FaGoogle } from "react-icons/fa";
import { useNavigate } from 'react-router-dom'
import { gradientBorder } from '../../Components/Shared/StyleJS/border';
import { toast } from 'react-hot-toast'
import useAuth from "../../Hooks/useAuth";
import { getToken, storeUserInfo } from "../../API/verify";

const SocialLogin = () => {
  const navigate = useNavigate();
  const { signInWithGoogle } = useAuth();
  const from = location?.state?.from?.pathname || '/'

  // Handle Google Signin function
  const handleGoogleSignIn = async () => {
    try {
      const result = await signInWithGoogle()

      // send user info to database 
      const sendToDb = await storeUserInfo(result?.user)
      console.log(sendToDb)

      // code for token 
      await getToken(result?.user?.email)

      // navigate to path
      navigate(from, { replace: true })

      // show toast
      toast.success("register Successfully")

    } catch (err) {
      toast.error(err?.message)
    }
  }
  return (
    <>
      <button
        onClick={handleGoogleSignIn}
        className="w-full mt-8 flex justify-center gap-6 items-center border-[1px] px-6 py-2 shadow-md shadow-white hover:shadow-2xl hover:text-lg "
        style={{ ...gradientBorder }}
      >
        <FaGoogle />
        {/* <img src={google} alt="" width={30} height={30} /> */}
        <p className="">Sign Up With Google</p>
      </button>
    </>
  );
};

export default SocialLogin;