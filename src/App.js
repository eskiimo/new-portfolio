import React, { useState, useCallback } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import NavigationBar from './components/Navigation/NavigationBar';
import About from './pages/aboutPage';
import Contact from './pages/contactPage';
import Home from './pages/homePage';
// import Skills from'./pages/

import { HideContext } from './components/util/context';

const App = () => {
 const [isHidden, setHidden] = useState(false);
 const showContent = useCallback(() => {
  setHidden(false);
 }, []);

 const hideContent = useCallback(() => {
  setHidden(true);
 }, []);
 let routes = (
  <Routes>
   <Route path="/" element={<Home />}></Route>
   {/* <Route path="/skills" element={<Skills />}></Route> */}
   <Route path="/about" element={<About />}></Route>
   {/* <Route path="/work" element={<Work />}></Route> */}
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
     {routes}
    </main>
    ){/* <NavigationBar /> */}
   </Router>
  </HideContext.Provider>
 );
};

export default App;
