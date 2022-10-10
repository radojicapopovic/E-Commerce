import React from 'react'
import Announcment from '../components/Announcment'
import Categories from '../components/Categories'
import Navbar from '../components/Navbar'
import Slider from '../components/Slider'
import Products from '../components/Products'

const Home = () => {
  return (
    <div>
        <Announcment/>
        <Navbar/>
        <Slider/>
        <Categories/>
        <Products/>
    </div>
  )
}

export default Home