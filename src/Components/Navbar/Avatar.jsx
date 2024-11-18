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
            <section>
                    <figure onMouseEnter={()=>setShowOptions(true)} className="h-9 aspect-1 bg-white/45 p-1 rounded-full cursor-pointer">
                        {
                            userData?.photoURL ?
                            <img className="object-cover object-center h-full w-full rounded-full" src={userData?.photoURL} alt="" /> :
                            <img className="object-cover object-center h-full w-full rounded-full" src={ImageUploader('updateUser.png')} alt="" /> 
                        }
                    </figure>
                    <section className="relative bg-green-600">
                        {
                        showOption ?
                        <section onMouseLeave={()=>setShowOptions(false)} className="absolute right-[45%] h-fit  bg-white shadow-xl flex flex-col gap-3 p-2 w-[8vw] rounded-sm mx-auto text-center">
                            <p className="text-sm font-semibold italic text-blue-600 text-[var(--primary-color)] w-full px-5 py-1 border border-[var(--primary-color)] btn_anim">{nameShort}</p>
                            <button onClick={signOutUser} className="text-white w-full px-5 py-1 bg-[var(--primary-color)] btn_anim">Sign out</button>
                        <Link to="/updatePage">
                        <button className="text-[var(--primary-color)] w-full px-5 py-1 border border-[var(--primary-color)] btn_anim">Update</button>
                        </Link>
                        
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