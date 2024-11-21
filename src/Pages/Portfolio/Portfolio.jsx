import { useContext, useEffect, useState } from "react"
import { AppointmentContext, AuthContext } from "../../Utilities/Scripts/AllContext"
import { Link } from "react-router-dom";
import AppointmentCards from "../../Components/AppointmentCards";

function Portfolio(){
  const {appoint,setUserWiseData,userWiseData} = useContext(AppointmentContext);
  const {userData,signOutUser,admin} = useContext(AuthContext);
  const{displayName,email,photoURL} = userData || {}



  useEffect(()=>{
    const filterUserData = userData.email === admin ? appoint : appoint?.filter(user=>user.email === email);
    setUserWiseData(filterUserData);
  },[userData,appoint])

  return (
    <>
      <section>
        <section>
          <section>
              <h1 className="text-center text-[var(--primary-color)] md:text-3xl text-2xl font-semibold my-4">{userData?.email === admin ? "Hello Admin" : "Welcome"}<span className="text-blue-400 font-bold">{displayName}</span></h1>
            <section className="lg:w-5/12 md:w-9/12 w-full mx-auto rounded-xl text-center">
                <section className="p-4 rounded-xl flex flex-col gap-5">
                    <div className="grid place-items-center">
                    <figure className="h-24 aspect-1 rounded-full bg-green-400 p-2">
                      <img className="h-full bg-gray-200 rounded-full object-cover" src={photoURL} alt={displayName} />
                    </figure>
                    </div>
                    <p className="text-lg font-semibold italic text-blue-400">{email}</p>
                    <section className="text-center flex justify-center items-center gap-4">
                      <button className="btn_primary py-2 px-6 rounded-lg bg-red-500 text-white" onClick={signOutUser}>Sign Out</button>
                      <Link to="/updatePage" className="cursor-pointer"><button className="btn_primary py-2 px-6 rounded-lg bg-[var(--primary-color)] text-white">Update Profile</button></Link>
                      </section>
                </section>
            </section>
          </section>
          <section className="my-6 w-full">
            {userWiseData && !userWiseData?.length ?<section className="emptyField text-center">
                  <h1 className="text-red-500 font-semibold text-2xl my-10">No Pending Appointments</h1>
                  <Link to="/" className="btn_primary py-2 px-6 rounded-lg bg-white hover:bg-[var(--primary-color)] border-[1px] border-[var(--primary-color)] hover:text-white text-[var(--primary-color)]">Add Appointments</Link>
            </section> :
              <section className="text-left text-4xl font-bold text-[var(--primary-color)]">
              <h1 className="mt-10 text-2xl">{userData?.email === admin ? "Admin Panel" : "Appointments"}</h1>
                <div className="border-b-[1px] border-[var(--primary-color)] h-0.5 md:w-8/12 w-full my-4"></div>
              <section className="flex flex-col gap-4">
                {
                  userWiseData?.map(app=><AppointmentCards key={crypto.randomUUID()} appInfo={app}/>)
                }
              </section>
            </section>
            }
              
          </section>
        </section>
      </section>
    </>
  )
}

export default Portfolio