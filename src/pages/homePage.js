import React from 'react';
import { NavLink } from 'react-router-dom';
// import { CSSTransition } from 'react-transition-group';
import { Container } from 'reactstrap';
import './homePage.css';

const Home = () => {
 let h11 = ['H', 'i', ','];
 const mapH1 = h11.map((letter, index) => {
  return (
   <span key={index} className="animate">
    {letter}
   </span>
  );
 });

 let h12 = ['I', "'", 'm', ' ', 'K', 'a', 'r', 'e', 'e', 'm', ','];
 const mapH2 = h12.map((letter, index) => {
  return letter !== 'K' ? (
   <span key={index} className="animate">
    {letter}
   </span>
  ) : (
   <span key={index} className="with-color">
    {letter}
   </span>
  );
 });

 let h13 = ['W', 'e', 'b', ' ', 'D', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r'];
 const mapH3 = h13.map((letter, index) => {
  return (
   <span key={letter + index} className="animate">
    {letter}
   </span>
  );
 });

 return (
  <Container className="home">
   <p className="opening-tag">&lt;html &gt;</p>
   <p> &lt;body &gt;</p>

   <p className="opening-tag">&lt;h1 &gt;</p>

   <div className="h">{mapH1}</div>
   <div className="h">{mapH2}</div>
   <div className="h">{mapH3}</div>

   <p> &lt;p &gt;</p>
   <h3> Front End Developer, React / Flutter</h3>
   <p> &lt;/p &gt;</p>

   {/* <Button outline color="info" to="/contact"> */}
   <NavLink className="contact-a" to="contact">
    Contact Me!
   </NavLink>
   {/* </Button> */}
  </Container>
 );
};
export default Home;
