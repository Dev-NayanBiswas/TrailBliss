import { useContext, useState } from "react"
import { AuthContext } from "../../Utilities/Scripts/AllContext"
import ImageUploader from "../../Utilities/Scripts/ImageUploader";
import { Link } from "react-router-dom";

function Avatar(){
    const [showOption, setShowOptions] = useState(false)
    const {userData,signOutUser} = useContext(AuthContext);
    const nameShort = userData?.displayName?.split(" ").slice(0,2).join(" ");

  return (
    <>
    <section>
        <section>
            <section className="lg:block flex justify-center items-center">
                    <figure onMouseEnter={()=>setShowOptions(true)} className="h-9 aspect-1 bg-white/45 p-1 rounded-full cursor-pointer">
                        {
                            userData?.photoURL ?
                            <img className="object-cover object-center h-full w-full rounded-full" src={userData?.photoURL} alt="" /> :
                            <Link to="/registration/signIn" className="flex flex-row justify-between items-center align-middle gap-2 w-[150px] border border-[var(--primary-color)] px-[5px] py-1 text-sm rounded-e-full rounded-s-full btn_anim text-[var(--primary-color)] whitespace-nowrap">
                                <img className="object-contain object-left h-8 aspect-1 rounded-full" src={ImageUploader('updateUser.png')} alt="" /> <span className="text-left text-lg font-semibold mr-8 self-center">Sign In</span>
                            </Link> 
                        }
                    </figure>
                    <section className="relative top-0">
                        {
                        showOption && userData?.email ?
                        <section onMouseLeave={()=>setShowOptions(false)} className="lg:absolute right-[45%] h-fit  bg-white lg:shadow-xl flex lg:flex-col flex-row gap-3 p-2 lg:w-[8vw] w-full justify-center items-center rounded-sm mx-auto text-center">
                            <p className="text-sm font-semibold italic text-blue-600 text-[var(--primary-color)] lg:w-full px-5 py-1 border border-[var(--primary-color)] btn_anim">{nameShort}</p>
                            <button onClick={signOutUser} className="text-white w-full px-5 py-1 bg-[var(--primary-color)] btn_anim whitespace-nowrap">Sign out</button>
                        
                        <button className="text-[var(--primary-color)] border border-[var(--primary-color)] btn_anim whitespace-nowrap py-1 px-5 w-full"><Link to="/updatePage">Update</Link></button>
                        
                        
                    </section> : ""
                    }
                    </section>
            </section>
        </section>
    </section>
    </>
  )
}

export default Avatar