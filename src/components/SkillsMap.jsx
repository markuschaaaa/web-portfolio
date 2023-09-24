import React from 'react'
import Skilscard from './Skilscard'
import Typed from 'typed.js'
import '../styles/Skills.css'

const SkillsMap = ({list}) => {
   const el = React.useRef(null);

   React.useEffect(() => {
      const typed = new Typed(el.current, {
         strings: ['<p>Although my background is in linguistics, I have a strong interest and attraction to programming. As a refinement of the theoretical material, I have completed many projects: various SPA sites, quiz games, online stores and more.</p><p>I started learning programming during my school years and have continued to develop my skills through various courses, including the JavaScript/Front-end 2022Q3 course from EPAMa and RSShool.</p><p>My programming stack includes JavaScript, TypeScript, NodeJS, HTML, React, CSS and SCSS, and I have experience with Github and webpack.</p><p>With a B2 level of English and German, I am confident in my ability to communicate and collaborate effectively with international team members and clients.</p><p>I am excited to bring my skills and knowledge to your team and continue to develop my programming knowledge under the guidance of experienced professionals.</p>'],
         typeSpeed: 5,
         loop: false,
         loopCount: Infinity,
         smartBackspace: true,
         shuffle: true,
         backDelay: 700,
         showCursor: false,
      });
      return () => {
         typed.destroy();
      };
   }, []);
   return (
      <div className='skills__wrapper'>
         <div className='feautures__history'>
            <div className='feautures__history-text'>
               <p ref={el}></p>
            </div>
         </div>
         <div className='skills__container'>
            {list.map((elem, index)=>
               <Skilscard key={index} list= {elem}/>
            )}
         </div>
      </div>
   )
}

export default SkillsMap