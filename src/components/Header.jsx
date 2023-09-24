import React, { useEffect, useRef, useState } from 'react'
import '../styles/Header.css'
import HeaderTextBox from './HeaderTextBox'
import PopUp from './PopUp'

const Header = () => {
  const ref = useRef()
  const [toogle, setToogle] = useState(false)
  const showPopUp = ()=>{
    setToogle(!toogle)
  }
  if(toogle){
    document.body.style.overflowY='hidden'
  }else{
    document.body.style.overflowY='scroll'
  }
  return (
    <div className='header__wrapper'>
      <div className='header__container'>
         <div className='header__img-box'>
            <img src='https://i.ibb.co/QJDQ9WP/icons8-m-32.png' alt='logo' className='header__img'></img>
         </div>
         <div className='header__text-box-wrap'>
            <HeaderTextBox/>
         </div>
         <div className='header__popup-button' ref={ref} onClick={showPopUp}>
            <span className={toogle ? "header__popup-button-span-active" : 'header__popup-button-span-notactive'}></span>
         </div> 
         <PopUp toogle={toogle} setToogle={setToogle}/>
      </div>
    </div>
  )
}

export default Header