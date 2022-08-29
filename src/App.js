import React, { useState } from 'react';
import './App.css';
// import NavigationBar from './components/Navigation/NavigationBar';
import About from './pages/aboutPage';
import Contact from './pages/contactPage';
import Home from './pages/homePage';
import Skills from './pages/skills';
import Work from './pages/workPage';

const App = () => {
   const [play, setPlay] = useState(false);
   const [playMode, setPlayMode] = useState('pause');
   const toggleAudio = () => {
      if (play) {
         setPlay(false);
         setPlayMode('pause');
      } else {
         setPlay(true);
         setPlayMode('play');
      }
   };

   return (
      <div className="sections-container">
         <div className={`${'record-cover-' + playMode}`}>
            <button onClick={toggleAudio} className="record-btn"></button>
         </div>

         {play ? (
            <audio autoPlay controls className="record spin">
               <source
                  src="/assets/songs/AnyColourYouLike.mp3"
                  type="audio/mpeg"
               />
            </audio>
         ) : (
            <></>
         )}
         <section>
            <Home />
         </section>
         <section>
            <About />
         </section>
         <section>
            <Skills />
         </section>
         <section>
            <Work />
         </section>
         <section>
            <Contact />
         </section>
         <section>
            <div className=" footer">
               <div className="contact-icon">
                  <a
                     href="//www.linkedin.com/in/kremelhosary/"
                     target="_blank"
                     rel="noreferrer"
                  >
                     {' '}
                     <i className="fab fa-linkedin"> </i>{' '}
                  </a>
               </div>
               <div className="contact-icon">
                  <a
                     href="//github.com/eskiimo"
                     target="_blank"
                     rel="noreferrer"
                  >
                     {' '}
                     <i className="fab fa-github"> </i>{' '}
                  </a>
               </div>

               <div className="contact-icon">
                  <a
                     href="//fb.com/kremkamall"
                     target="_blank"
                     rel="noreferrer"
                  >
                     {' '}
                     <i className="fab fa-facebook"> </i>{' '}
                  </a>
               </div>
            </div>
         </section>
      </div>
   );
};

export default App;
