import React from 'react';
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
  <React.Fragment>
   <div className="home-container">
    <p className=" html-snippets">&lt;html &gt;</p>
    <p className="html-snippets"> &lt;body &gt;</p>
    <p className=" html-snippets">&lt;h1 &gt;</p>

    <div className="home-pragraph">
     <div>{mapH1}</div>
     <div>{mapH2}</div>
     <div>{mapH3}</div>
    </div>
    <p className="html-snippets"> &lt;p &gt;</p>
    <h3> Front End Developer, React / Flutter</h3>
    <p className="html-snippets"> &lt;/p &gt;</p>

    <Buton text="contact Me" width="20vw" to="/contact"></Buton>
   </div>
  </React.Fragment>
 );
};
export default Home;
