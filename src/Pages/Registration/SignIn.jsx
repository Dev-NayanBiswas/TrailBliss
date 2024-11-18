import { useContext, useState } from "react"
import { AuthContext } from "../../Utilities/Scripts/AllContext";
import GoogleLogin from "../../Components/GoogleLogin";
import { TbEyeClosed } from "react-icons/tb";
import { FaEye } from "react-icons/fa6";
import { Link, useLocation, useNavigate } from "react-router-dom";

function SignIn(){

  const[showPass, setShowPass] = useState(false);
  const {userData} = useContext(AuthContext);
  const [userInfo, setUserInfo] = useState({
    email:"",
    password:""
  })
  const location = useLocation();
  const navigate = useNavigate();
  console.log(location)
  
  function handleSubmit(e){
    e.preventDefault();
    console.log("Handle Submit")
  }

  function handleSignIn(e){
    e.preventDefault();
    console.log("Handle SignIn")
  }


  return (
    <>
      <form className="my-10" action="">
    <h1 className="text-center text-gray-500 font-semibold text-2xl my-4">Sign In</h1>
      <section className="relative my-3 lg:w-5/12 md:w-10/12 w-full mx-auto">
        <input 
        type="email" 
        id="email"
        name="email"
        onChange={handleSubmit}
        placeholder="" 
        className="peer primary_input"/>
        <label className="text-center customLabel">Email</label>
        </section>

        {/* Password */}
      <section className="relative my-3 lg:w-5/12 md:w-10/12 w-full mx-auto">
        <input 
        type={showPass? "text":"password"} 
        id="password"
        name="password"
        onChange={handleSubmit}
        placeholder=""
        className="peer primary_input"/>
        <label className="text-center customLabel">Password</label>
        <span onClick={()=>setShowPass(!showPass)} className="absolute right-5 top-[35%] text-[var(--primary-color)] cursor-pointer">{showPass? <FaEye size={20}/> : <TbEyeClosed size={20}/>}</span>
        </section>
        <section className="mb-3 lg:w-5/12 md:w-10/12 w-full mx-auto">
        <Link to="/reset" className="text-xs underline text-blue-600 font-bold italic"><span>Forgot your password <span className="text-red-600 text-sm no-underline">!!</span></span></Link>
        </section>
        <section className="text-center">
        <button onClick={(e)=>handleSignIn(e)} className="px-6 py-2 bg-[var(--primary-color)] rounded-s-full rounded-e-full md:w-5/12 w-8/12 text-white">Sign In</button>
        </section>
      </form>
      <section className="text-center">
      <Link to="/registration/signup" className="text-lg font-semibold"><p>New here! need to <span className="text-blue-500 font-bold">Sign Up</span> first</p></Link>
      </section>
      <div className="flex justify-center items-center gap-5 my-3 lg:w-5/12 md:w-10/12 w-full mx-auto">
      <div className="h-0.5 w-full border"></div>
      <p className="text-xl font-semibold text-gray-600/45">Or</p>
      <div className="h-0.5 w-full border"></div>
      </div>
      <section className="text-center flex justify-center">
      <GoogleLogin/>
      </section>
    </>
  )
}

export default SignIn