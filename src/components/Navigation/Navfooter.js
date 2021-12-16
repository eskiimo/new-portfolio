import React from 'react';
import { Col, Row } from 'reactstrap';
import './Navfooter.css';

const Navfooter = () => {
 return (
  <div className=" footer">
   <div className="contact-icon">
    <a
     href="//www.linkedin.com/in/kremelhosary/"
     target="_blank"
     rel="noreferrer"
    >
     {' '}
     <i class="fab fa-linkedin"> </i>{' '}
    </a>
   </div>
   <div className="contact-icon">
    <a href="//github.com/eskiimo" target="_blank" rel="noreferrer">
     {' '}
     <i class="fab fa-github"> </i>{' '}
    </a>
   </div>

   <div className="contact-icon">
    <a href="//fb.com/kremkamall" target="_blank" rel="noreferrer">
     {' '}
     <i class="fab fa-facebook"> </i>{' '}
    </a>
   </div>
  </div>
 );
};
export default Navfooter;
