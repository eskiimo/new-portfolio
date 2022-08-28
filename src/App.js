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
      </div>
   );
};

export default App;
