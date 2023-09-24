import React, { useState } from 'react'
import '../styles/ResumeSkillsBar.css'

const ResumeSkillsBar = ({list, visible, soft}) => {
  return (
   <div className='skills__cont' style={{display: visible}}>
      <div className='skillsbar__wrap'>
         {
            list.map(e=>
               <div className='skillsbar__container' key={e.title}>
                  <div className='skillsbar__item'>
                     <p className='skillsbar__item-title'>{e.title}</p>
                     <div className='skillsbar__item-progress-wrap'>
                        <div style={{maxWidth: e.progress}} className='skillsbar__item-progress-bar'></div>
                     </div>
                     <p className='skillsbar__item-percent'>{e.progress}</p>
                  </div>
               </div>
            )
         }
      </div>
      <div className='soft__wrap'>
         <h3>soft skills</h3>
         <div className='soft__cont'>
            {soft.map(e=>
               <div className='soft__item' key={e.title}>
                  <p>{e.title}</p>
               </div>
            )}
         </div>
      </div>
   </div>
  )
}

export default ResumeSkillsBar