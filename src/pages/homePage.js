import React from 'react';
import { Container } from 'reactstrap';
import Buton from '../components/FormElements/Button';
import './homePage.css';

const Home = () => {
 let h11 = ['H', 'i', ','];
 const mapH1 = h11.map((letter, index) => {
  return (
   <div key={index} className="parent">
    <span className="animate">{letter}</span>
   </div>
  );
 });

 let h12 = ['I', "'", 'm', ' ', 'K', 'a', 'r', 'e', 'e', 'm', ','];
 const mapH2 = h12.map((letter, index) => {
  return letter !== 'K' ? (
   <div key={index} className="parent">
    <span className="animate">{letter}</span>
   </div>
  ) : (
   <div key={index} className="parent">
    <span className="with-color">{letter}</span>
   </div>
  );
 });

 let h13 = ['W', 'e', 'b', '  ', 'D', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r'];
 const mapH3 = h13.map((letter, index) => {
  return (
   <div key={index} className="parent">
    <span className="animate">{letter}</span>
   </div>
  );
 });

 return (
  <Container className="home">
   <p className="opening-tag html-snippets">&lt;html &gt;</p>
   <p className="html-snippets"> &lt;body &gt;</p>

   <p className="opening-tag html-snippets">&lt;h1 &gt;</p>

   <div className="pragraph">
    <div className="h">{mapH1}</div>
    <div className="h">{mapH2}</div>
    <div className="h">{mapH3}</div>
   </div>
   <p className="html-snippets"> &lt;p &gt;</p>
   <h3> Front End Developer, React / Flutter</h3>
   <p className="html-snippets"> &lt;/p &gt;</p>

   <div className="pragraph">
    <Buton text="contact Me" width="30%" to="/contact"></Buton>
   </div>
  </Container>
 );
};
export default Home;
