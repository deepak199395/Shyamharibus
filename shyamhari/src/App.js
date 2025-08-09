import React from 'react'
import {Routes,Route} from "react-router-dom"
import Header from './Componants/Layout/Header'
import Footer from './Componants/Layout/Footer'
import Home from './Screens/Home/Home'
import BookingScreen from './Screens/BookingScreen'
import Businfo from './Screens/Businfo/Businfo'
import LoginScreen from './Screens/Auth/LoginScreen'
import Register from './Screens/Auth/Register'
const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='header' element={<Header/>} />
      <Route path='Footer' element={<Footer/>} />
      <Route path='BookingScreen' element={<BookingScreen/>} />
      <Route path='Businfo' element={<Businfo/>} />
      <Route path='LoginScreen' element={<LoginScreen/>}/>
      <Route path='Register' element={<Register/>}/>

   </Routes>
  )
}

export default App
