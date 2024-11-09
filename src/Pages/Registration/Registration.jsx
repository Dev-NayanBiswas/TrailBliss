import { Outlet } from 'react-router-dom'

function Registration() {
  return (
    <>
    <header className="h-[20vh] bg-green-100">Registration Banner</header>
    <section>
        <Outlet/>
    </section>
    </>
  )
}

export default Registration