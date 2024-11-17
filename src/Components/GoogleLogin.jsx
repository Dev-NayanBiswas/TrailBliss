import { useContext } from "react";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "../Utilities/Scripts/AllContext";
import { Navigate, redirect, useLocation, useNavigate } from "react-router-dom";

function GoogleLogin(){
  const {googleLogin} = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  function handleGoogleLogin(){
    googleLogin()
    .then(()=>{
      navigate(location.state? location.state : "/")
      console.log(location)
    })
  }
  return (
    <>
        <button onClick={handleGoogleLogin} className="google_button"><FcGoogle size={30} /> <span className="text-xl font-semibold">Sign in with Google</span></button>
    </>
  )
}

export default GoogleLogin