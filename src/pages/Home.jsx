import React from 'react'
import '../styles/Home.css'
import Typed from 'typed.js'

const Home = () => {
  const el = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ['<i>a JavaScript developer</i>.', 'Wildlife Enthusiast', 'a Frontend developer', 'ambitious and motivated'],
      typeSpeed: 50,
      loop: true,
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
    <div className='home__wrapper' id='home'>
      <div className='home__container'>
         <div className='home__text-box'>
            <p className='home__text-item'>Hi there!</p>
            <p className='home__text-item'>I'm <span id='home__name'>Mark Chumakov</span></p>
            <p className='home__text-item-swollow' ref={el}></p>
            <p className='home__text-item'>"I am a passionate  JavaScript/Frontend developer and just enthusiast. With a foundation in web development and a keen eye for data, I create innovative solutions that bridge technology and user experience."</p>
         </div>
         <div className='home__img-box'>
            <img src='https://i.ibb.co/MkSFCxN/programmer.png' alt='programmer' className='home__img'></img>
         </div>
      </div>
    </div>
  )
}

export default Home