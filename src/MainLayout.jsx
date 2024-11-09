import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './Components/Navbar/Navbar'

function MainLayout() {
  return (
    <>
    <header>
        <Navbar/>
    </header>
    <main className="min-h-screen">
        <Outlet/>
    </main>
    <footer>
        Footer Section
    </footer>
    </>
  )
}

export default MainLayout