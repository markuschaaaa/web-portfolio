import React, { useState } from 'react'
import Button from '../UI/Button'
import '../styles/TestimonialsCard.css'

const TestimonialsCard = ({list}) => {
  return (
   <div className='testimonials__box'>
         {list.map((elem,i)=>
         <div className='testimonials__card-wrap' key={i}>
            <div className='testimonails__card-container'>
               <div className='testimonials__card-person'>
                  <img src={elem.mainPhoto}></img>
                  <p>{elem.nickname}</p>
                  <p>{elem.name}</p>
                  <p>{elem.position}</p>
               </div>
               <div className='testimonials__card-review'>
                  <div className='testimonials__card-nav'>
                     <img src={elem.quotesImg}></img>
                  </div>
                  <div className='testimonials__card-feedback'>
                     <p>{elem.time}</p>
                     <p>{elem.place}</p>
                     <p>{elem.rank}</p>
                     <hr></hr>
                     <p>{elem.description}</p>
                  </div>
               </div>
            </div>
         </div>
      )}
   </div>
  )
}

export default TestimonialsCard