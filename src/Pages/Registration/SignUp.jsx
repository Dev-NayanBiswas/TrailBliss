import { FaEye, FaEyeSlash } from "react-icons/fa6";
import { TbEyeClosed } from "react-icons/tb";
import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import ImageUploader from "../../Utilities/Scripts/ImageUploader";
import { AuthContext } from "../../Utilities/Scripts/AllContext";
import toastAlert from "../../Utilities/Scripts/toastify";

function SignUp(){
  const {registrationWithEmail,updateUserProfile} = useContext(AuthContext);
  const navigate = useNavigate();


  const [showPass, setShowPass] = useState(false);
  const [signUpErr, setSignUpErr] = useState({
    emailErr:"",
    passErr:""
  });
  const [authError, setAuthError] = useState(null)
  const [userData, setUserData] = useState({
    name:"",
    imageURL:"",
    email:"",
    password:"",
    terms:false
  })


  function handleSubmit(e){
    e.preventDefault();
    setAuthError(null)
    const{name,value,checked} = e.target;
    setUserData({...userData, [name]: name === "terms"? checked : value})
    
    
    const emailRegEx = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passRegEx = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+~\-=`{}[\]|:;"'<>,.?/])[a-zA-Z\d!@#$%^&*()_+~\-=`{}[\]|:;"'<>,.?/]{8,}$/;;
    
    if(name === "email"){
      const emailError = !emailRegEx.test(value) ? "Enter a valid Email" : ""
      setSignUpErr((signUpErr) => ({...signUpErr, emailErr:emailError}))
    }
    if(name === "password"){
      const passError = !passRegEx.test(value) ? "At least one special Character, Uppercase letter and number needed" : ""
      setSignUpErr( signUpErr =>({...signUpErr,passErr:passError}))
    }
    
  }
  
  function handleRegister(e){
    e.preventDefault();
    const errorExisted = Object.values(signUpErr).some(err=>err.length > 0)
    const hasEmptyFields = Object.values(userData).some(data=> data===""|| data=== false)
    if(errorExisted ){
          toastAlert("warning","Fix the Errors first")
          return
        }
    else if(hasEmptyFields){
      toastAlert("info","Can't Submit Empty Fields");
      return
    }
    else{
      //! Creating New User 
      registrationWithEmail(userData.email, userData.password)
      .then(()=>{
        toastAlert("success","New User Created");
        updateUserProfile(userData.name,userData.imageURL)
        .then(()=>{
          navigate("/")})
        .catch(err=>toastAlert("error",`${err.message}`))
        
      })
      .catch(err=>{
        setAuthError(err.message);
        toastAlert("error",`Invalid Credentials`)
      })
        }
    }

  return (
    <>
      <section>
      <form action="" className="text-center my-20">
      <figure className="h-16 w-16 mx-auto">
                <img src={ImageUploader("note.png")} alt='' className="h-full w-full object-cover object-center" />
              </figure>
      <h1 className="text-center text-gray-500 font-semibold text-2xl my-4">Sign Up</h1>
      {/*ImageURl*/}
      <section className="relative my-3 lg:w-5/12 md:w-10/12 w-full mx-auto">
        <input 
        type="text" 
        id="imageURL"
        name="imageURL"
        placeholder=""
        onChange={handleSubmit} 
        className="peer primary_input"/>
        <label className="text-center customLabel">imageURL</label>
        </section>

        {/*Name*/}
      <section className="relative my-3 lg:w-5/12 md:w-10/12 w-full mx-auto">
        <input 
        type="text" 
        id="name"
        name="name"
        placeholder=""
        onChange={handleSubmit} 
        className="peer primary_input"/>
        <label className="text-center customLabel">Name</label>
        </section>

        {/*Email*/}
      <section className="relative my-3 lg:w-5/12 md:w-10/12 w-full mx-auto">
        <input 
        type="email" 
        id="email"
        name="email"
        onChange={handleSubmit}
        placeholder="" 
        className="peer primary_input"/>
        <label className="text-center customLabel">Email</label>
        {signUpErr.emailErr?.length? <p className="text-red-500 text-xs italic mb-2 text-left">{signUpErr.emailErr}</p> :""}
        {authError && authError === "Firebase: Error (auth/email-already-in-use)."? <p className="text-red-500 text-xs italic mb-2 text-left">This Email already in use, Try Sign in</p> :""}
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
        {signUpErr.passErr?.length ? <p className="text-red-500 text-xs italic mb-2 text-left">{signUpErr.passErr}</p> : ""}
        <span onClick={()=>setShowPass(!showPass)} className="absolute right-5 top-[35%] text-[var(--primary-color)] cursor-pointer">{showPass? <FaEye size={20}/> : <TbEyeClosed size={20}/>}</span>
        </section>

        {/* Checkbox */}
        <section className="relative my-3 lg:w-5/12 md:w-10/12 w-full mx-auto flex gap-4 justify-center items-center">
          <input 
          type="checkbox"
          value={userData.terms} 
          id="terms"
          onChange={handleSubmit} 
          className="rounded-full cursor-pointer text-[var(--primary-color)]" 
          name="terms"
          required 
           />
          <label htmlFor="terms" className="text-[var(--primary-color)] font-semibold">Accept out Terms and Conditions</label>
        </section>
        <button onClick={(e)=>handleRegister(e)} className={`${userData.terms?"":"opacity-30 pointer-events-none"} px-6 py-2 bg-[var(--primary-color)] rounded-s-full rounded-e-full md:w-5/12 w-8/12 text-white`}>Sign Up</button>
      </form>
      <section className="text-center">
      <Link to="/registration/signIn" className="text-lg font-semibold"><p>Already have an account! <span className="text-blue-500 font-bold">Sign In</span> here</p></Link>
      </section>
    </section>
    </>
  )
}

export default SignUp