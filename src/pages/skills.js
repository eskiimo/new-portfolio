import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import Gimage from '../components/UIelements/gImage';
import './skills.css';

const Skills = () => {
 return (
  <Container className="skills-container">
   <Row className="list-parent">
    <Col xs="12" sm="4">
     {' '}
     <Gimage link="/assets/htmllogo.png" />
    </Col>
    <Col xs="12" sm="4">
     {' '}
     <Gimage link="/assets/csslogo.png" />
    </Col>
    <Col xs="12" sm="4">
     <Gimage link="/assets/githublogo.png" />
    </Col>
    <Col xs="12" sm="4">
     <Gimage link="/assets/jslogo.png" />
    </Col>
    <Col xs="12" sm="4">
     <Gimage link="/assets/reactlogo.png" />
    </Col>
    {/* <Col xs="12" sm="4">
     <Gimage link="/assets/reactlogo.png" />
    </Col> */}
   </Row>
  </Container>
 );
};
export default Skills;
