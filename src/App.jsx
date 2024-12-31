import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import HotelSingle from './components/UI/Home/HotelSingle'
import Services from './pages/Services'
import Contact from './pages/Contact'
import AboutUs from './pages/AboutUs'
import Suit from './pages/Suit'
import NotFound from './pages/NotFound'

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="/about" element={<About/>}/>
        <Route path="/about-us" element={<AboutUs/>}/>
        <Route path="/hotel" element={<HotelSingle/>}/>
        <Route path='/services' element={<Services/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/suit' element={<Suit/>}/>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App