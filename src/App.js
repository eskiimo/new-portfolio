import React, { useState, useCallback } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import NavigationBar from './components/Navigation/NavigationBar';
import About from './pages/aboutPage';
import Contact from './pages/contactPage';
import Home from './pages/homePage';
import Skills from './pages/skills';
import Work from './pages/workPage';

import { HideContext } from './components/util/context';

const App = () => {
   const [isHidden, setHidden] = useState(false);
   const [play, setPlay] = useState(true);
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
   const showContent = useCallback(() => {
      setHidden(false);
   }, []);

   const hideContent = useCallback(() => {
      setHidden(true);
   }, []);
   let routes = (
      <Routes>
         <Route path="/" element={<Home />}></Route>
         <Route path="/skills" element={<Skills />}></Route>
         <Route path="/about" element={<About />}></Route>
         <Route path="/work" element={<Work />}></Route>
         <Route path="/contact" element={<Contact />}></Route>
      </Routes>
   );
   return (
      <HideContext.Provider
         value={{
            hidden: isHidden,
            hide: hideContent,
            show: showContent,
         }}
      >
         <Router className="head">
            <NavigationBar />
            <main className={isHidden ? 'main-content-hide' : 'main-content'}>
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
               <div className={`${'record-cover-' + playMode}`}>
                  <button onClick={toggleAudio} className="record-btn"></button>
               </div>

               {routes}
            </main>
            {/* <NavigationBar /> */}
         </Router>
      </HideContext.Provider>
   );
};

export default App;
