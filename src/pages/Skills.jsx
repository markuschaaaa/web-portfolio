import React, { useState } from 'react'
import '../styles/Skills.css'
import SkillsMap from '../components/SkillsMap'

const Features = () => {
  const [skillsCard, setSkillsCard] = useState([
      {img:'https://i.ibb.co/w09j7bX/css.png', title:'CSS', filledImg:'https://i.ibb.co/2ghyGYv/filled-css.png'},
      {img:'https://i.ibb.co/r7FxvJT/git.png', title:'GIT', filledImg:'https://i.ibb.co/Rjnw24n/filled-git.png'},
      {img:'https://i.ibb.co/vQhYbCB/github.png', title:'GITHUB', filledImg:'https://i.ibb.co/8rRDVVZ/filled-github.png'},
      {img:'https://i.ibb.co/C2MDPpS/html.png', title:'HTML', filledImg:'https://i.ibb.co/Jk4zVZf/filled-html.png'},
      {img:'https://i.ibb.co/YRHGT9W/js.png', title:'JS', filledImg:'https://i.ibb.co/0fZCDXf/filled-js.png'},
      {img:'https://i.ibb.co/7Cr39hV/node.png', title:'NODE', filledImg:'https://i.ibb.co/DpnS3v3/filled-node.png'},
      {img:'https://i.ibb.co/bF7Cv21/sass.png', title:'SASS', filledImg:'https://i.ibb.co/0s2pzvr/filled-sass.png'},
      {img:'https://i.ibb.co/XskTn8N/ts.png', title:'TS', filledImg:'https://i.ibb.co/tcSQn6P/filled-ts.png'},
   ])
  return (
    <div className='features__container' id='skills'>
      <SkillsMap list = {skillsCard}/>
    </div>
  )
}

export default Features