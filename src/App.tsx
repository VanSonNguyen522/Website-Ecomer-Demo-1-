// import React from 'react'

import MobNavbar from "./Components/MobNavbar"
import Navbar from "./Components/Navbar"
import Hero from "./Components/Hero"
import Category from "./Components/Category"
import FeatureSectionFood_1 from "./Components/FeatureSectionFood_1"
import FeatureSectionFood_2 from "./Components/FeatureSectionFood_2"
import Banner from "./Components/Banner"
import BlogSection from "./Components/BlogSection"
import NewsLetter from "./Components/NewLetter"
import Feature from "./Components/Feature"
import Footer from "./Components/Footer"
import { CartContextProvider } from "./context/cartContext"
import { useState} from "react"
import Cart from "./Components/Cart";

const App = () => {
  const [showCart, setShowCart] = useState(false);

  return (
    <CartContextProvider>
      <main>
        <Navbar setShowCart = {setShowCart}/>
        <MobNavbar setShowCart = {setShowCart}/>
        <Hero/>
        <Category/>
        <FeatureSectionFood_1/>
        <FeatureSectionFood_2/>
        <Banner/>
        <BlogSection/>
        <NewsLetter/>
        <Feature/>
        <Footer/>
        {showCart && <Cart showCart = {showCart} setShowCart = {setShowCart}/>}
      </main>
    </CartContextProvider>
  )
}

export default App
