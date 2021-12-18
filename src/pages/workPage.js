import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import Gimage from '../components/UIelements/animation/gImage';
import './work.css';

const Work = () => {
 return (
  <Container className="work-container">
   <Col sm="8" className="big-col">
    <Row>
     <Col>
      <div>
       <p className="headline">Skills & Experience</p>
       <p className="work-paragraph">
        The main area of my expertise is front-end development, HTML, CSS, JS,
        building small and medium web apps.
       </p>
      </div>
     </Col>
    </Row>

    <Row className="list-parent">
     <Col xs="8" sm="4">
      {' '}
      <Gimage link="/assets/htmllogo.png" />
     </Col>
    </Row>
   </Col>
  </Container>
 );
};
export default Work;
