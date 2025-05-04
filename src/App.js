import React from 'react'
import {Navone, Navbar, Header,Offers,Catagories, Products, Gallery, SpecialProducts, Blogs} from './containers'
import {Footer, Offer, Catagory, Product } from './components'
import './App.css'
const App = () => {
  return (
    <div className='app'>
        <Navone/>
        <Navbar/>
        <Header/>
        <Offers/>
        <Catagories/>
        <Products/>
        <Gallery/>
        <Blogs/>
        <Footer/>
    </div>
  )
}

export default App