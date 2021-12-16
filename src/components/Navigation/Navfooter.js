import React from 'react';
import { Col, Row } from 'reactstrap';
import './Navfooter.css';

const Navfooter = () => {
 return (
  <div className=" footer">
   <Row>
    <Col>
     <p>
      <a
       href="//www.linkedin.com/in/kremelhosary/"
       target="_blank"
       rel="noreferrer"
      >
       {' '}
       <i class="fab fa-linkedin"> </i>{' '}
      </a>
     </p>
    </Col>
    <Col>
     <p>
      <a href="//github.com/eskiimo" target="_blank" rel="noreferrer">
       {' '}
       <i class="fab fa-github"> </i>{' '}
      </a>
     </p>
    </Col>{' '}
    <Col>
     <p>
      <a href="//fb.com/kremkamall" target="_blank" rel="noreferrer">
       {' '}
       <i class="fab fa-facebook"> </i>{' '}
      </a>
     </p>
    </Col>
   </Row>
  </div>
 );
};
export default Navfooter;
