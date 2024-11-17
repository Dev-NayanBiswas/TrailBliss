import { useEffect, useState } from "react";
import auth from "../firebaseConfig";
import { AuthContext } from "../Utilities/Scripts/AllContext"
import {
  signOut, 
  signInWithPopup, 
  GoogleAuthProvider, 
  onAuthStateChanged, 
  signInWithEmailAndPassword, 
  createUserWithEmailAndPassword 
  } from "firebase/auth";

function AuthProvider({children}){
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true)

  console.log(userData, loading)

    const googleProvider = new GoogleAuthProvider();

    //!Login with Google 
    function googleLogin(){
      setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }

    //! Sign Up with Email
    function registrationWithEmail(email,password){
      setLoading(true)
      return createUserWithEmailAndPassword(auth, email, password)
    }
    
    //!Sign In with Email 
    function signingWithEmail(email,password){
      setLoading(true)
      return signInWithEmailAndPassword(auth, email, password)
    }

    //! Observer 
    useEffect(()=>{
      const subscriber = onAuthStateChanged(auth,(currentUser)=>{
        setUserData(currentUser)
        setLoading(false)

        return ()=>{
          subscriber()
        }
      }) 
    },[])

    //! SignOut 
    function signOutUser(){
      setLoading(true)
      signOut(auth)
      setUserData(null)
        
    }

    const authObject = {
      loading,
      userData,
      googleLogin,
      signOutUser,
      signingWithEmail,
      registrationWithEmail
    }
  return (
    <AuthContext.Provider value={authObject}>
        {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider
