import React from 'react'
import {Routes,Route} from "react-router-dom"
import Header from './Componants/Layout/Header'
import Footer from './Componants/Layout/Footer'
import Home from './Screens/Home/Home'
import BookingScreen from './Screens/BookingScreen'
const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='header' element={<Header/>} />
      <Route path='Footer' element={<Footer/>} />
      <Route path='BookingScreen' element={<BookingScreen/>} />

    </Routes>
  )
}

export default App
