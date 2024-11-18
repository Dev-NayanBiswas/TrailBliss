import { Outlet, useLoaderData } from "react-router-dom"
import CategoryMarquee from "../../Components/CategoryMarquee"
import Banner from "../../Components/Navbar/Banner"
import dynamicTitle from "../../Utilities/Scripts/dynamicTitle"

function Home(){
  dynamicTitle()
  const data = useLoaderData();
  console.log(data);
  return (
    <>
        <section>
          <section>
            <Banner/>
          </section>
          <section>
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