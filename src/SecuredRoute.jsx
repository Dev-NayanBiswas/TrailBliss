import { useContext } from "react";
import { Navigate, useLocation, useNavigate } from "react-router-dom"
import { AuthContext } from "./Utilities/Scripts/AllContext";
import Loading from "./Components/Navbar/Loading";

function SecuredRoute({children}){
    const location = useLocation();
    const{userData,loading} = useContext(AuthContext);

    if(!userData && loading){
      return <Loading/>
    }

    if(userData?.email){
        return children
    }
    console.log(location)
  return <Navigate state={location.pathname} to={"/registration/signIn"}/>
}
export default SecuredRoute