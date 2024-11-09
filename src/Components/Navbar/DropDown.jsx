import { NavLink } from "react-router-dom"
import Search from "./Search"

function DropDown() {
  return (
    <>
        <section className="h-[30vh] flex flex-col gap-4 my-4 justify-evenly lg:hidden">
            <NavLink to="/" className={({isActive})=>isActive?"dropActive":"dropInactive"}>Home</NavLink>
            <NavLink to="/aboutUs" className={({isActive})=>isActive? "dropActive":"dropInactive"}>About Us</NavLink>
                <NavLink to="/contactUs" className={({isActive})=>isActive? "dropActive":"dropInactive"}>Contact Us</NavLink>
                <NavLink to="/portfolio" className={({isActive})=>isActive? "dropActive":"dropInactive"}>Portfolio</NavLink>
                <NavLink to="/registration" className={({isActive})=>isActive? "dropActive":"dropInactive"}>Registration</NavLink>
                <section className="text-center w-1/2 mx-auto">
                <Search/>
                </section>
        </section>
    </>
  )
}

export default DropDown