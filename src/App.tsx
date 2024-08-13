// import React from 'react'

import MobNavbar from "./Components/MobNavbar"
import Navbar from "./Components/Navbar"
import Hero from "./Components/Hero"
import Category from "./Components/Category"
import FeartureSectionFood from "./Components/FeartureSectionFood"

const App = () => {
  return (
    <main>
      <Navbar/>
      <MobNavbar/>
      <Hero/>
      <Category/>
      <FeartureSectionFood/>
    </main>
  )
}

export default App
