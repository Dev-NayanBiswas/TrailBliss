import auth from "../firebaseConfig";
import { AuthContext } from "../Utilities/Scripts/AllContext"
import { GoogleAuthProvider, signInWithPopup} from "firebase/auth";

function AuthProvider({children}){

    const provider = new GoogleAuthProvider();

    function googleLogin(){
        signInWithPopup(auth, provider)
        .then(result=>console.log(result.user.displayName))
        .catch(error=>console.error(error.message))
    }
  return (
    <AuthContext.Provider value={{googleLogin}}>
        {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider