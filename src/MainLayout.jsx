import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './Components/Navbar/Navbar'

function MainLayout() {
  return (
    <>
    <header>
        <section className="fixed top-0 w-11/12 z-40 bg-white">
        <Navbar/>
        </section>
        <section className="h-[10vh] my-4"></section>
    </header>
    <main className="min-h-screen w-11/12 mx-auto">
        <Outlet/>
    </main>
    <footer className="w-11/12 mx-auto">
        Footer Section
    </footer>
    </>
  )
}

export default MainLayout