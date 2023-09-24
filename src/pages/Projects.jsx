import React from 'react'
import '../styles/Projects.css'
import Button from '../UI/Button'

const Projects = () => {
   const projectImgArr = ['https://i.ibb.co/tC8xqDk/bird.png', 'https://i.ibb.co/9VR48Z8/zoo.png']
   return (
      <div className='projects__wrap' id='projects'>
         <div className='projects__container'>
            <div className='projects__title'><h1>My Projects</h1></div>
            <div className='projects__box'>
               <div className='projects__box-item'>
                  <img src={projectImgArr[0]} className='projects__box-item-img'></img>
                  <p className='projects__box-item-text'>This is a quiz site where after listening to the audio, the user is given the opportunity to guess which bird is making that singing sound. At the end, depending on the errors, the user is shown the points they have earned during the game.</p>
               </div>
               <div className='projects__box-item-main'>
                  <p className='projects__box-item-text-main'>react todo app</p>
                  <p className='projects__box-item-text-below'>if you want to see how it works,<br></br>click the button below.</p>
                  <Button className='projects__box-item-button'>Click here!</Button>
               </div>
               <div className='projects__box-item'>
                  <img src={projectImgArr[1]} className='projects__box-item-img'></img>
                  <p className='projects__box-item-text'>This is the zoo's website where you can look at what animals are featured at the zoo, types of entertainment, and there is also a form that allows you to buy a ticket to the zoo.</p>
               </div>
            </div>
         </div>
      </div>
   )
   }

export default Projects