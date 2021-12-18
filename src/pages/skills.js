import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import Gimage from '../components/UIelements/animation/gImage';
import './skills.css';

const Skills = () => {
 return (
  <Container className="skills-container">
   <Row className="big-row">
    <Col md="12">
     <div>
      <p className="headline">Skills & Experience</p>
      <p className="skills-paragraph">
       The main area of my expertise is front-end development, HTML, CSS, JS,
       building small and medium web apps.
      </p>
      <p className="skills-paragraph">
       Also I worked with Flutter, developed and deployed to both Google &
       Apple.
      </p>
     </div>
    </Col>
    <Col>
     <Row className="list-parent">
      <Col xs="8" sm="4">
       {' '}
       <Gimage link="/assets/htmllogo.png" />
      </Col>
      <Col xs="8" sm="4">
       {' '}
       <Gimage link="/assets/csslogo.png" />
      </Col>
      <Col xs="8" sm="4">
       <Gimage link="/assets/githublogo.png" />
      </Col>
      <Col xs="8" sm="4">
       <Gimage link="/assets/gitlogo.png" />
      </Col>
      <Col xs="8" sm="4">
       <Gimage link="/assets/jslogo.png" />
      </Col>
      <Col xs="8" sm="4">
       <Gimage link="/assets/reactlogo.png" />
      </Col>
      <Col xs="12" sm="4">
       <Gimage link="/assets/flutterlogo.png" />
      </Col>
     </Row>
    </Col>
   </Row>
  </Container>
 );
};
export default Skills;
