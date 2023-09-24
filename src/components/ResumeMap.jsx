import React from 'react'
import ResumeCard from './ResumeCard'
import '../styles/Resume.css'

const ResumeMap = ({list, visible}) => {
  return (
    <div className='resume__cards-container' style={{display: visible}}>
      {
         list.map(e=>
            <ResumeCard key={e.title} list={e}/>
            )
      }
    </div>
  )
}

export default ResumeMap