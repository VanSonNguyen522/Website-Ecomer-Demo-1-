// import React from 'react'

import MobNavbar from "./Components/MobNavbar"
import Navbar from "./Components/Navbar"
import Hero from "./Components/Hero"
import Category from "./Components/Category"
import FeatureSectionFood_1 from "./Components/FeatureSectionFood_1"
import FeatureSectionFood_2 from "./Components/FeatureSectionFood_2"

const App = () => {
  return (
    <main>
      <Navbar/>
      <MobNavbar/>
      <Hero/>
      <Category/>
      <FeatureSectionFood_1/>
      <FeatureSectionFood_2/>
    </main>
  )
}

export default App
