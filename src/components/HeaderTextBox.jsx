import React, { useState } from 'react'

const HeaderTextBox = ({toogle, setToogle}) => {
    function openClose(){
      if(toogle){
        setToogle(!toogle)
      }
    }
  return (
   <div className='header__text-box'>
      <a href='#home' onClick={openClose}><p className='header__text-item'>Home</p></a>
      <a href='#skills' onClick={openClose}><p className='header__text-item'>Skills</p></a>
      <a href='#projects' onClick={openClose}><p className='header__text-item'>Projects</p></a>
      <a href='#resume' onClick={openClose}><p className='header__text-item'>Resume</p></a>
      <a href='#testimonials' onClick={openClose}><p className='header__text-item'>Testimonials</p></a>
      <a href='#form' onClick={openClose}><p className='header__text-item'>Contact</p></a>
   </div>
  )
}

export default HeaderTextBox