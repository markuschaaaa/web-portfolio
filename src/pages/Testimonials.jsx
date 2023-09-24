import React, { useEffect, useState } from 'react'
import '../styles/Testimonials.css'
import TestimonialsCard from '../components/TestimonialsCard'
import Button from '../UI/Button'

const Testimonials = () => {
   const [testimonialsList, setTestimonialsList] = useState([
   {
      mainPhoto:'https://i.ibb.co/YBQ954m/userone.jpg',
      nickname:'Spider',
      name:'Mark',
      position:'Senior',
      quotesImg:'https://i.ibb.co/jRLb5SC/filled-quotes.png',
      time:'2002',
      place:'NYC',
      rank:'⭐⭐⭐⭐',
      description:'По состоянию на 2012 год, все современные браузеры полностью поддерживают ECMAScript 5.1. Старые версии браузеров поддерживают по крайней мере - ECMAScript 3. 17 июня 2015 года состоялся выпуск шестой версии ECMAScript. Эта версия официально называется ECMAScript 2015, которую чаще всего называют ECMAScript 2015 или просто ES2015.'
   },{
      mainPhoto:'https://i.ibb.co/9snCmV1/userthree.jpg',
      nickname:'Scorpion',
      name:'Denis',
      position:'Middle',
      quotesImg:'https://i.ibb.co/jRLb5SC/filled-quotes.png',
      time:'2023',
      place:'Brest',
      rank:'⭐⭐⭐⭐⭐',
      description:'По состоянию на 2012 год, все современные браузеры полностью поддерживают ECMAScript 5.1. Старые версии браузеров поддерживают по крайней мере - ECMAScript 3. 17 июня 2015 года состоялся выпуск шестой версии ECMAScript. Эта версия официально называется ECMAScript 2015, которую чаще всего называют ECMAScript 2015 или просто ES2015.'
   },{
      mainPhoto:'https://i.ibb.co/s9ZVtzP/usertwo.jpg',
      nickname:'Eagle',
      name:'Klaus',
      position:'Junior',
      quotesImg:'https://i.ibb.co/jRLb5SC/filled-quotes.png',
      time:'2045',
      place:'Minsk',
      rank:'⭐⭐⭐⭐',
      description:'По состоянию на 2012 год, все современные браузеры полностью поддерживают ECMAScript 5.1. Старые версии браузеров поддерживают по крайней мере - ECMAScript 3. 17 июня 2015 года состоялся выпуск шестой версии ECMAScript. Эта версия официально называется ECMAScript 2015, которую чаще всего называют ECMAScript 2015 или просто ES2015.'
   }
   ])
   const [newTestimonialsList, setNewTestimonialsList] = useState([])
   useEffect(() =>{
      setNewTestimonialsList([...testimonialsList].slice(0,1))
   },[])
   const first =()=>{
      setNewTestimonialsList([...testimonialsList].slice(0,1))
   }
   const second =()=>{
      setNewTestimonialsList([...testimonialsList].slice(1,2))
   }
   const third =()=>{
      setNewTestimonialsList([...testimonialsList].slice(2,3))
   }
  return (
    <div className='testimonials__wrap' id='testimonials'>
      <div className='testimonials__container'>
         <h2>Testimonials</h2>
         <div className='testimonials__buttons'>
            <Button className='testimonials__button' onClick={first}>1</Button>
            <Button className='testimonials__button' onClick={second}>2</Button>
            <Button className='testimonials__button' onClick={third}>3</Button>
         </div>
         <TestimonialsCard list={newTestimonialsList}/>
         <div className='testimonials__progress'>

         </div>
      </div>
    </div>
  )
}

export default Testimonials