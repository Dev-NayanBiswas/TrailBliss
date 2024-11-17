import { LuMenu } from "react-icons/lu";
import { RxCross2 } from "react-icons/rx";
import { NavLink } from "react-router-dom"
import Search from "./Search"
import DropDown from "./DropDown"
import { useState } from "react";
import trailBliss from "../../assets/trailBliss.png"

function Navbar(){
    const [showDrop, setShowDrop] = useState(false);
  return (
    <>
        <nav className="flex justify-between items-center relative h-[10vh] w-full mx-auto lg:px-2 px-5">
            <nav className="w-full flex justify-start items-center">
                <figure className="md:h-10 h-7 -hue-rotate-60">
                    <img className="h-full w-full object-cover -scale-x-100 -rotate-12" src={trailBliss} alt="" />
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
                <Search/>
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