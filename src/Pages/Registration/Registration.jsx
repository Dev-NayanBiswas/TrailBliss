import { Outlet } from 'react-router-dom'
import dynamicTitle from '../../Utilities/Scripts/dynamicTitle'

function Registration() {
  dynamicTitle()
  return (
    <>
    <header className="min-h-[20vh] bg-green-100/10 py-5 px-2 rounded-ss-2xl rounded-ee-2xl shadow-sm">
      <h1 className="text-3xl font-bold"><span className="text-gray-700/45 italic text-2xl">Join Us on a Journey to</span> <br /> <span className="text-green-600">Discover Nature’s Wonders!</span></h1>
      <p className="w-9/12 text-right mx-auto">Embark on unforgettable eco-adventure experiences where every step connects you with the beauty of the natural world. By joining our community, you’re not just exploring breathtaking destinations; you’re contributing to a sustainable future for our planet. Let’s protect, preserve, and adventure—<span className="text-2xl text-green-500 font-bold italic">Together</span>.</p>
    </header>
    <section>
        <Outlet/>
    </section>
    </>
  )
}

export default Registration