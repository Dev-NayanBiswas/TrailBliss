import { useContext } from "react"
import { AuthContext } from "../../Utilities/Scripts/AllContext"
import { Link } from "react-router-dom";

function Portfolio(){
  const {userData,signOutUser} = useContext(AuthContext);
  const{displayName,email,photoURL} = userData || {}
  console.log(photoURL)
  return (
    <>
      <section>
        <section>
          <section>
              <h1 className="text-center text-[var(--primary-color)] md:text-3xl text-2xl font-semibold my-4">Welcome <span className="text-blue-400 font-bold">{displayName}</span></h1>
            <section className="lg:w-5/12 md:w-9/12 w-full mx-auto rounded-xl text-center">
                <section className="p-4 rounded-xl flex flex-col gap-5">
                    <div className="grid place-items-center">
                    <figure className="h-24 aspect-1 rounded-full bg-green-400 p-2">
                      <img className="h-full bg-gray-200 rounded-full object-cover" src={photoURL} alt={displayName} />
                    </figure>
                    </div>
                    <p></p>
                    <p>{email}</p>
                    <section className="text-center flex justify-center items-center gap-4">
                      <button className="btn_primary py-2 px-6 rounded-lg bg-red-500 text-white" onClick={signOutUser}>Sign Out</button>
                      <Link to="/updatePage" className="cursor-pointer"><button className="btn_primary py-2 px-6 rounded-lg bg-[var(--primary-color)] text-white">Update Profile</button></Link>
                      </section>
                </section>
            </section>
          </section>
        </section>
      </section>
    </>
  )
}

export default Portfolio