import React, { useState } from 'react'

const Skilscard = ({list}) => {
   const[test, setTest] = useState(list.img)
   const onMouseEnter = () => {
    setTest(list.filledImg)
  }
  const onMouseLeave = () => {
    setTest(list.img)
  }
   return (
      <div className='skills__card-wrap' onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
         <div className='skills__card-box'>
            <img src={test} alt='logo' className='skills__card-img'></img>
            <p className='skills__card-title'>{list.title}</p>
         </div>
      </div>
   )
}

export default Skilscard