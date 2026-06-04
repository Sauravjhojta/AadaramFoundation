import { useState } from 'react'
import './App.css'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

import Programmes from './components/Programmes'
import About from './components/About'
import Volunteer from './components/Volunteer'
import Stories from './components/Stories'
import Gallery from './components/Gallery'

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
   <div  className="overflow-x-hidden">
    <Navbar />
    <ToastContainer
        position="top-center"
  autoClose={5000}
  hideProgressBar={false}
  newestOnTop
  closeOnClick
  pauseOnHover
  draggable
  theme="colored"
      />
    <Hero />
    <About/>
  
    <Programmes/>
  
   <Stories/>
   <Gallery/>
    <Volunteer/>
    <Footer/>
   </div>
  )
}

export default App