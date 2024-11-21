import { useContext } from "react";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "../Utilities/Scripts/AllContext";
import { Navigate, redirect, useLocation, useNavigate } from "react-router-dom";
import toastAlert from "../Utilities/Scripts/toastify";

function GoogleLogin(){
  const {googleLogin} = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  function handleGoogleLogin(){
    googleLogin()
    .then(()=>{
      toastAlert("success","Logged in Successfully")
      navigate(location.state? location.state : "/")
    }).catch(err=>toastAlert("error",`${err.message}`))
  }
  return (
    <>
        <button onClick={handleGoogleLogin} className="google_button"><FcGoogle size={30} /> <span className="text-xl font-semibold">Sign in with Google</span></button>
    </>
  )
}

export default GoogleLogin