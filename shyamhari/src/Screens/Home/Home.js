import React from 'react'
import "../Home/Home.css"
import Header from '../../Componants/Layout/Header'
import Footer from '../../Componants/Layout/Footer'
import BookingScreen from '../BookingScreen'
const Home = () => {
    return (
        <>
        <Header/>
        <div className='main-content'>
        <BookingScreen/>

        </div>
        <Footer/>
        </>
    )
}

export default Home
