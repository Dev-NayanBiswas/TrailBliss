import { useContext, useState } from "react"
import PrimaryInput from "../../Components/Navbar/PrimaryInput";
import { AuthContext } from "../../Utilities/Scripts/AllContext";

function SignIn(){
  const {googleLogin} = useContext(AuthContext);
  const [userInfo, setUserInfo] = useState({
    name:"",
    email:"",
    password:""
  })


  function handleUserInput(e){
    e.preventDefault();
    const {name, value} = e.target;
    setUserInfo({...userInfo,[name]:value});
  }

  const gmailLogin = ()=>{
    console.log("Hello Gmail")
  }

  console.log(userInfo)
  const typeArray = ["text","email", "password"];

  return (
    <>
      <form className="my-10" action="">
      { 
      typeArray?.map((type, index)=><PrimaryInput type={type} key={index} onHandle={handleUserInput}/>)
      }
      </form>
      <button onClick={()=>googleLogin()}>Gmail</button>
    </>
  )
}

export default SignIn