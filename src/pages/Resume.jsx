import React, { useEffect, useState } from 'react'
import Button from '../UI/Button'
import '../styles/Resume.css'
import ResumeMap from '../components/ResumeMap'
import ResumeSkillsBar from '../components/ResumeSkillsBar'

const Resume = () => {
   const [selectedList, setSelectedList] = useState([])
   const [visible, setVisible] = useState('none')
   const [show, setShow] = useState('flex')
   const [standart, setStandart] = useState('trash')
   const [resumeList, setResumeList] = useState([
      {title:'School №20 in Brest', date:'2010-2021', description:'The high school I attended for 11 years and graduated with a 9/10 grade point average.'},
      {title:'Minsk State Linguistic University', date:'2021-now', description:'I study at the interpreting faculty (German-English) at the specialty of synchronized interpreting. Participated and won in various competitions, have knowledge of English at the level of B2 and German at the level of B2-C1.'},
      {title:'WayUP-programming immersion', date:'2021', description:'It was one of my first courses and gave me a base, materials and a little layout experience, with which I went on to further self-study and training on other courses.'},
      {title:'WayUp-Figma immersion', date:'2022', description:'In this course, I learned how to work with a tool like Figma. The goal of this course was to learn how to make a PixelPerfect project using materials from the project provided in Figma.'},
      {title:'EPAM and RSSchool JavaScript/Frontend', date:'2022-2023', description:'This is the course where I gained tremendous experience in layout and programming, experience with Git, GitHub, Webpack, and more. On this course I did a number of complex works: from SPA to a full-fledged online store. I had experience in team development, as well as a huge theoretical base, worked out on tests and interviews with mentors.'}
   ])
   const [skills, setSkills] = useState([
      {
         title:'HTML',
         progress:'90%'
      },
      {
         title:'CSS & SCSS',
         progress:'86%'
      },
      {
         title:'JS',
         progress:'80%'
      },
      {
         title:'REACT',
         progress:'70%'
      },
      {
         title:'GIT & GITHUB',
         progress:'87%'
      },
      {
         title:'NODE',
         progress:'68%'
      },
      {
         title:'GOOGLE OAUTH, COOKIES, PASSPORT,POSTMAN API,OPENCV)',
         progress:'65%'
      },
      {
         title:'WEBPACK',
         progress:'85%'
      },
   ])
   const [sofSkills, setSoftSkills] = useState([
      {title:'TEAM WORK'},
      {title:'CREATIVITY'},
      {title:'Problem-solving capability'},
      {title:'Patience'},
      {title:'Attention to Detail'},
      {title:'Planning'},
      {title:'Experimentation'},
      {title:'TIME MANAGEMENT'},
   ])
   useEffect(()=>{
      setSelectedList(resumeList.slice(0,2))
   },[])
   const showEdu = () => {
      setSelectedList(resumeList.slice(0,2))
      setVisible('none')
      setShow('flex')
      setStandart('none')
   }
   const showCourse = () => {
      setSelectedList(resumeList.slice(2,5))
      setVisible('none')
      setShow('flex')
      setStandart('none')
   }
   const showSkills = () => {
      setSelectedList(resumeList.slice(0,0))
      setVisible('flex')
      setShow('none')
      setStandart('none')
   }
   return (
      <div className='resume__wrap' id='resume'>
         <div className='resume__container'>
            <h2 className='resume__main-title'>Resume</h2>
            <div className='resume__navbar'>
               <div className='resume__navbar-item'>
                  <Button className='resume__navbar-button' onClick={showEdu} id={standart}>Education</Button>
               </div>
               <div className='resume__navbar-item'>
                  <Button className='resume__navbar-button' onClick={showCourse}>Courses</Button>
               </div>
               <div className='resume__navbar-item'>
                  <Button className='resume__navbar-button' onClick={showSkills}>Skills</Button>
               </div>
            </div>
            <div className='resume__cards-wrap'>
               <ResumeMap visible = {show} list={selectedList}/>
               <ResumeSkillsBar visible = {visible} list={skills} soft={sofSkills}/>
            </div>
            
         </div>
      </div>
   )
   }

export default Resume