import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import NavigationBar from './components/Navigation/NavigationBar';
import About from './pages/aboutPage';
import Contact from './pages/contactPage';
import Home from './pages/homePage';

const App = () => {
 let routes = (
  <Routes>
   <Route path="/" element={<Home />}></Route>
   {/* <Route path="/skills" element={<Skills />}></Route>  */}
   <Route path="/about" element={<About />}></Route>
   {/* <Route path="/work" element={<Work />}></Route> */}
   <Route path="/contact" element={<Contact />}></Route>
  </Routes>
 );
 return (
  <>
   <Router className="head">
    <NavigationBar />
    <main className="main-content">{routes}</main>
   </Router>
  </>
 );
};

export default App;
