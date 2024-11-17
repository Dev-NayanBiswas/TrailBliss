import { useContext } from "react"
import { AuthContext } from "../../Utilities/Scripts/AllContext"

function Portfolio(){
  const {userData,signOutUser} = useContext(AuthContext);
  const{displayName,email,photoURL} = userData || {}
  console.log(photoURL)
  return (
    <>
      <section>
        <section>
          <section>
            <section className="w-5/12 mx-auto rounded-xl shadow-md bg-white/45 text-center">
                <section className="p-4 rounded-xl bg-gray-300">
                    <figure className="h-24 aspect-1 rounded-full bg-green-400 p-2">
                      <img className="h-full w-full bg-gray-200 rounded-full" src={photoURL} alt={displayName} />
                    </figure>
                    <p>{displayName}</p>
                    <p>{email}</p>
                    <section className="text-center"><button className="py-2 px-6 rounded-lg bg-gray-800 text-white" onClick={signOutUser}>Sign Out</button></section>
                </section>
            </section>
          </section>
        </section>
      </section>
    </>
  )
}

export default Portfolio