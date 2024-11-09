import { FaEye } from "react-icons/fa6";
import { FaEyeSlash } from "react-icons/fa";
import { useState } from "react";

function PrimaryInput({type, onHandle}){
    const [showPass, setShowPass] = useState(false)
  return (
    <>
        <section className="relative my-3">
        <input
        onChange={onHandle}  
        type={showPass? "text": type} 
        id={type=== "text"?"name":type}
        name={type=== "text"?"name":type} 
        placeholder="" 
        className="peer primary_input"/>
        <label className="capitalize" htmlFor={type=== "text"?"name":type}>{type=== "text"?"name":type}</label>
        {
            type === "password" && <span onClick={()=>setShowPass(!showPass)} className="absolute right-5 top-[35%] text-gray-900/45 text-xl">{
                showPass ? <FaEye/> : <FaEyeSlash/>
            }</span>
        }
        </section>
    </>
  )
}

export default PrimaryInput