import React, { useState } from 'react'
import Home from './Home'
import Skills from './Skills'
import Projects from './Projects'
import Resume from './Resume'
import Testimonials from './Testimonials'
import Application from './Application'
import Footer from '../components/Footer'
import '../styles/Main.css'
import Header from '../components/Header'

const Main = () => {
  return (
    <div className='main__container'>
      <Header />
      <Home/>
      <Skills/>
      <Projects/>
      <Resume/>
      <Testimonials/>
      <Application/>
      <Footer/>
    </div>
  )
}

export default Main