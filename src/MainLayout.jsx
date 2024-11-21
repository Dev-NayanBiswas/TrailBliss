import React from 'react'
import { Outlet, useLoaderData } from 'react-router-dom'
import Navbar from './Components/Navbar/Navbar'
import Footer from './Components/Footer'
import Aos from 'aos'
import 'aos/dist/aos.css';


function MainLayout(){
  const data = useLoaderData()
  Aos.init({
    offset: 200,
    duration: 500,
    easing: 'ease-in-sine',
    delay: 100,
  });
  return (
    <>
    <header>
        <section className="fixed top-0 w-11/12 z-40 bg-white">
        <Navbar/>
        </section>
        <section className="h-[10vh] my-4"></section>
    </header>
    <main className="min-h-screen w-11/12 mx-auto">
        <Outlet context={[data]}/>
    </main>
    <footer className="w-11/12 mx-auto">
        <Footer/>
    </footer>
    </>
  )
}

export default MainLayout