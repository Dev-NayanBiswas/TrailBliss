import { NavLink } from "react-router-dom"
import Avatar from "./Avatar"

function DropDown() {
  return (
    <>
        <section className="h-[30vh] flex flex-col gap-4 my-4 justify-evenly lg:hidden">
            <NavLink to="/" className={({isActive})=>isActive?"dropActive":"dropInactive"}>Home</NavLink>
            <NavLink to="/gallery" className={({isActive})=>isActive? "dropActive":"dropInactive"}>Gallery Us</NavLink>
                <NavLink to="/updatePage" className={({isActive})=>isActive? "dropActive":"dropInactive"}>Update Profile</NavLink> 
                <NavLink to="/portfolio" className={({isActive})=>isActive? "dropActive":"dropInactive"}>My Profile</NavLink>
                <NavLink to="/registration" className={({isActive})=>isActive? "dropActive":"dropInactive"}>Registration</NavLink>
                <section className="text-center w-1/2 mx-auto">
                <Avatar/>
                </section>
        </section>
    </>
  )
}

export default DropDown