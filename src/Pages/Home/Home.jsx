import { Outlet, useLoaderData } from "react-router-dom"
import CategoryMarquee from "../../Components/CategoryMarquee"
import Banner from "../../Components/Navbar/Banner"
import dynamicTitle from "../../Utilities/Scripts/dynamicTitle"

function Home(){
  dynamicTitle()
  const data = useLoaderData();
  return (
    <>
        <section className="w-full">
          <section>
            <Banner/>
          </section>
          <section className="text-center mt-10">
            <h1 className="md:text-3xl lg:text-5xl w-5/12 mx-auto text-xl text-gray-800/65 font-bold">Discover Eco-Adventure <span className="md:text-3xl lg:text-5xl text-xl font-semibold text-[var(--primary-color)]">Bliss</span></h1>
            <p className="md:w-7/12 w-10/12 mx-auto my-5 text-sm">Embark on sustainable journeys that connect you with nature. Explore breathtaking trails, unique wildlife, and unforgettable adventures—all while protecting our planet for generations to come. 🌿</p>
          </section>
          <div className="md:w-7/12 w-10/12 mx-auto h-0.5 border-b-[1px] border-[var(--primary-color)] mb-8"></div>

          <section className="my-5">
            <CategoryMarquee/>
          </section>
          <section className="min-h-screen">
            <Outlet context={[data]}/>
          </section>
        </section>
    </>
  )
}

export default Home