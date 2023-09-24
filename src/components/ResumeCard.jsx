import React from 'react'
import '../styles/ResumeCard.css'

const ResumeCard = ({list}) => {
  return (
    <div className='resume__card-wrap' >
      <div className='resume__card-container'>
         <p className='resume__card-item'>{list.title}</p>
         <p className='resume__card-item'>{list.date}</p>
         <p className='resume__card-item'>{list.description}</p>
      </div>
    </div>
  )
}

export default ResumeCard