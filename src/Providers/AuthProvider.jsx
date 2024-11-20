import { useEffect, useState } from "react";
import auth from "../firebaseConfig";
import { AuthContext } from "../Utilities/Scripts/AllContext"
import {
  signOut, 
  signInWithPopup, 
  GoogleAuthProvider, 
  onAuthStateChanged, 
  signInWithEmailAndPassword, 
  createUserWithEmailAndPassword, 
  sendPasswordResetEmail,
  updateProfile
  } from "firebase/auth";

function AuthProvider({children}){
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true)


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

    //! Update UserProfile
    function updateUserProfile(displayName, photoURL){
      return updateProfile(auth.currentUser, {
        displayName: displayName, photoURL: photoURL
      })
    }

    //! Send a password reset email
    function resetPasswordEmail(email){
      return sendPasswordResetEmail(auth, email)
    } 

    //! SignOut 
    function signOutUser(){
      setLoading(true)
      signOut(auth)
      setUserData(null)
    }

    //! Observer 
    useEffect(()=>{
      const subscriber = onAuthStateChanged(auth,(currentUser)=>{
        setUserData(currentUser)
        setLoading(false)
        console.log(currentUser)

        return ()=>{
          subscriber()
        }
      }) 
    },[])

    

    const authObject = {
      loading,
      userData,
      googleLogin,
      signOutUser,
      signingWithEmail,
      updateUserProfile,
      resetPasswordEmail,
      registrationWithEmail
    }
  return (
    <AuthContext.Provider value={authObject}>
        {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider
