import React, { useState } from 'react'
import '../styles/MyForm.css'

const SocialCard = ({list}) => {
   const [newList, setNewList] = useState(list.img)
   const onMouseEnter = () => {
      setNewList(list.filledImg)
   }
   const onMouseLeave = () => {
      setNewList(list.img)
   }
   return (
      <div className='application__social-link' onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}><img src={newList}></img></div>
  )
}

export default SocialCard