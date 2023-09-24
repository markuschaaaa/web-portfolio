import React, { useState } from 'react'
import HeaderTextBox from './HeaderTextBox'
import '../styles/Header.css'

const PopUp = ({toogle, setToogle}) => {
  return (
    <div className={toogle ? "active" : 'notactive'}>
      <HeaderTextBox toogle={toogle} setToogle={setToogle}/>
   </div>
  )
}

export default PopUp