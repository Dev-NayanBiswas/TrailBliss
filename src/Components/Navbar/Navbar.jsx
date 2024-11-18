import { LuMenu } from "react-icons/lu";
import { RxCross2 } from "react-icons/rx";
import { Link, NavLink } from "react-router-dom"
import Search from "./Search"
import DropDown from "./DropDown"
import { useContext, useState } from "react";
import trailBliss from "../../assets/logo.webp"
import Avatar from "./Avatar";
import { AuthContext } from "../../Utilities/Scripts/AllContext";

function Navbar(){
    const {userData} = useContext(AuthContext);
    const [showDrop, setShowDrop] = useState(false);
  return (
    <>
        <nav className="flex justify-between items-center relative h-[10vh] w-full mx-auto lg:px-2 px-5">
            <nav className="w-full flex justify-start items-center gap-1">
                <figure className="md:h-14 h-7 rounded-full">
                    <img className="h-full w-full object-cover -scale-x-100 -rotate-12 rounded-full" src={trailBliss} alt="" />
                </figure>
                <h1 className="md:text-3xl text-xl font-semibold text-[var(--primary-color)]">TrailBliss</h1>
            </nav>
            <nav className="w-full hidden gap-4 justify-center lg:flex">
                <NavLink to="/" className={({isActive})=>isActive? "active":"inactive"}>Home</NavLink>
                <NavLink to="/aboutUs" className={({isActive})=>isActive? "active":"inactive"}>About Us</NavLink>
                <NavLink to="/contactUs" className={({isActive})=>isActive? "active":"inactive"}>Contact Us</NavLink>
                <NavLink to="/portfolio" className={({isActive})=>isActive? "active":"inactive"}>Portfolio</NavLink>
                <NavLink to="/registration" className={({isActive})=>isActive? "active":"inactive"}>Registration</NavLink>
            </nav>
            <nav className="w-full flex justify-end items-center gap-4">
                <section className="lg:block hidden">
                <section className="flex justify-center items-center gap-2">
                {
                    userData ? <Avatar/> : <Link to="/registration/signIn"><button className="border border-[var(--primary-color)] px-6 py-2 text-sm rounded-e-full rounded-s-full btn_anim text-[var(--primary-color)] whitespace-nowrap">Sign In</button></Link>
                }
                </section>
                </section>
                <section className="block lg:hidden">
                    {
                        showDrop ? <button onClick={()=>setShowDrop(false)} className="text-[var(--primary-color)] text-xl z-50"><RxCross2/></button> : <button onClick={()=>setShowDrop(true)} className="text-[var(--primary-color)] text-xl z-50"><LuMenu/></button>
                    }
                </section>
            </nav>
        </nav>
            <section className={`${showDrop? 'h-[50vh]':"h-0"} transition-[height] overflow-hidden ease-linear duration-500 lg:hidden`}>
                <DropDown/>
            </section>

        
        
    </>
  )
}

export default Navbar