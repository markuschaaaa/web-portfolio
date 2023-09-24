import React, { useRef, useState } from 'react'
import Input from '../components/Input'
import Button from '../UI/Button'
import '../styles/MyForm.css'
import SocialCard from '../components/SocialCard'

const Application = () => {
   const [social, setSocial] = useState([
      {img:'https://i.ibb.co/vQhYbCB/github.png', filledImg:'https://i.ibb.co/8rRDVVZ/filled-github.png'},
      {img:'https://i.ibb.co/xJrWHpr/gmail.png', filledImg:'https://i.ibb.co/Jj7CBns/filled-gmail.png'},
      {img:'https://i.ibb.co/n66ZcHX/linkedin.png', filledImg:'https://i.ibb.co/SX49G3j/filled-linkedin.png'},
   ])


   const [nameErr, setNameErr] = useState('')
   const [phoneErr, setPhoneErr] = useState('')
   const [mailErr, setMailErr] = useState('')

   const [nameClass, setNameClass] = useState('')
   const [mailClass, setMailClass] = useState('')
   const [telClass, setTelClass] = useState('')
   
   const [nameVal, setNameVal] = useState('')
   const [phoneVal, setPhoneVal] = useState('')
   const [mailVal, setMailVal] = useState('')

   const isValidName = (name) => {
      let result = /^[A-Za-zА-Яа-яЁё]{3,100}(\s+[A-Za-zА-Яа-яЁё]{3,100})$/;
      return result.test(String(name).toLowerCase());
   };
   const isValidPhone = (phone) => {
      let result = /^(\+)[0-9]{9,14}$/;
      return result.test(String(phone).toLowerCase());
   };
   const isValidEmail = (email) => {
      let result = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return result.test(String(email).toLowerCase());
   };
   const formSubmit =(e) =>{
      e.preventDefault();
      if (!isValidName(nameVal)) {
        setNameErr('Please enter a valid name')
        setNameClass('wrong-input')
        return false
      } else {
         setNameClass('')
         setNameErr('')
      }
      if (!isValidPhone(phoneVal)) {
        setPhoneErr('Please enter a valid phone number')
        setTelClass('wrong-input')
         return false
      } else {
         setTelClass('')
         setPhoneErr('')
      }
      if (!isValidEmail(mailVal)) {
        setMailErr('Please enter a valid eamil')
        setMailClass('wrong-input')
         return false
      } else {
         setMailClass('')
         setMailErr('')
      }
      if(!isValidName(nameVal) && !isValidPhone(phoneVal) && !isValidEmail(mailVal)){
         console.log('EVERYTHING IS UP TO DATE')
      } else{
         console.log('EVERYTH TO DATE')
      }
   }
  return (
    <div className='application__wrap' id='form'>
      <div className='application__container'>
         <p>contact</p>
         <h2>Let's connect</h2>
         <div className='application__box-wrap'>
            <div className='application__aboutme-cont'>
               <img src='https://i.ibb.co/QPfQBcS/me.jpg' alt='me'></img>
               <p>Mark Chumakov</p>
               <p>Frontend developer</p>
               <p>I am a passionate frontend developer with expertise in building dynamic websites.I thoroughly enjoy the process of creating captivating web experiences that combine seamless functionality with stunning design.</p>
               <p>Phone: <span>+375(33)313-10-56</span></p>
               <p>Email: <span>chumakoff03@gmail.com</span></p>
               <p>Github: <span>https://github.com/markuschaaaa</span></p>
               <p>Find me on</p>
               <div className='application__social-links'>
               {social.map((e,i)=>{
                  return <SocialCard key={e.img} list={e}/>
               })
               }
               </div>
            </div>
            <div className='application__form-cont'>
               <form className='application__form'>
                  <div className='application__form-box'>
                     <div className='application__form-name'>
                        <Input
                           type='text'
                           className= {nameClass}
                           name='name' placeholder='Name'
                           onChange={e=>setNameVal(e.target.value)}
                           value={nameVal}
                        />
                        <p>{nameErr}</p>
                     </div>
                     <div className='application__form-phone'>
                        <Input
                           type='tel'
                           className= {telClass}
                           name='phone'
                           placeholder='Phone number'
                           onChange={e=>setPhoneVal(e.target.value)}
                           value={phoneVal}
                        />
                        <p>{phoneErr}</p>
                     </div>
                  </div>
                  <Input
                     type='email'
                     className= {mailClass}
                     name='email'
                     placeholder='Email'
                     onChange={e=>setMailVal(e.target.value)}
                     value={mailVal}
                  />
                  <p>{mailErr}</p>
                  <Input
                     type='text'
                     className='application__input-message'
                     name='message'
                     placeholder='Message'
                  />
                  <Button className='application__form-button' onClick={formSubmit}>send message</Button>
               </form>
            </div>
         </div>
      </div>
    </div>
  )
}

export default Application