import React, { useState } from 'react'
import SocialCard from './SocialCard'
import '../styles/Footer.css'

const Footer = () => {
   const [social, setSocial] = useState([
      {img:'https://i.ibb.co/vQhYbCB/github.png', filledImg:'https://i.ibb.co/8rRDVVZ/filled-github.png'},
      {img:'https://i.ibb.co/xJrWHpr/gmail.png', filledImg:'https://i.ibb.co/Jj7CBns/filled-gmail.png'},
      {img:'https://i.ibb.co/n66ZcHX/linkedin.png', filledImg:'https://i.ibb.co/SX49G3j/filled-linkedin.png'},
   ])
  return (
    <div className='footer__wrap'>
      <hr></hr>
         <div className='footer__container'>
            <div className='footer__box-social'>
               <div className='footer__box-social-logo'>
                  <img src='https://i.ibb.co/QJDQ9WP/icons8-m-32.png'></img>
               </div>
               <div className='footer__box-social-links'>
                  {social.map((e,i)=>{
                     return <SocialCard key={e.img} list={e}/>
                  })
                  }
               </div>
            </div>
            <div className='footer__box'>
               <p>QUICK LINK</p>
               <p>About</p>
               <p>Portfolio</p>
               <p>Services</p>
               <p>Blog</p>
               <p>Contact</p>
            </div>
            <div className='footer__box'>
               <p>RESOURCES</p>
               <p>Authentication</p>
               <p>System Status</p>
               <p>Terms of Service</p>
               <p>Pricing</p>
               <p>Over Right</p>
            </div>
            <div className='footer__box'>
               <p>DEVELOPERS</p>
               <p>Documentation</p>
               <p>Authentication</p>
               <p>API Reference</p>
               <p>Support</p>
               <p>Open Source</p>
            </div>
         </div>
      <div className='footer__wrap-copyright'>
         <p>© 2023. All rights reserved by Mark Chumakov</p>
      </div>
    </div>
  )
}

export default Footer