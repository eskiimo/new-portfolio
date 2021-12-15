import React from 'react';
import { NavLink } from 'react-router-dom';
// import { CSSTransition } from 'react-transition-group';
import { Button, Container } from 'reactstrap';
import './homePage.css';

const Home = () => {
 return (
  <Container className="bio">
   <p className="opening-tag">&lt;html &gt;</p>
   <p> &lt;body &gt;</p>

   <p className="opening-tag">&lt;h1 &gt;</p>

   <h1>Hi,</h1>
   <h1>
    I'm <span className="with-color">K</span>areem ,
   </h1>
   <h1>
    <span className="animate">W</span>
    <span className="animate">e</span>
    <span className="animate">b </span>
    <span className="animate">D</span>
    <span className="animate">e</span>
    <span className="animate">v</span>
    <span className="animate">e</span>
    <span className="animate">l</span>
    <span className="animate">o</span>
    <span className="animate">p</span>
    <span className="animate">e</span>
    <span className="animate">r</span> <span> &lt;/h1 &gt;</span>
   </h1>
   <p> &lt;p &gt;</p>
   <h3> Front End Developer, React / Flutter</h3>
   <p> &lt;/p &gt;</p>
   <Button outline color="info" to="/contact">
    <NavLink to="contact">Contact Me</NavLink>
   </Button>
  </Container>
 );
};
export default Home;
