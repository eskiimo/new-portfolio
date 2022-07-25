import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import Gimage from '../components/UIelements/animation/gImage';
import './skills.css';

const Skills = () => {
   return (
      <Container className="skills-container">
         <Row className="big-row">
            <Col xs="11" md="6">
               <div>
                  <p className="headline">Skills & Experience</p>
                  <p className="skills-paragraph">
                     The main area of my expertise is front-end development,
                     HTML, CSS, JS, building small and medium web apps.
                  </p>
                  <p className="skills-paragraph">
                     Also I worked with Flutter, developed and deployed to both
                     Google & Apple.
                  </p>
               </div>
            </Col>
            <Col xs="11" md="6">
               <Row className="list-parent">
                  <Col className="center" xs="8" sm="4">
                     <Gimage link="/assets/reactlogo.png" />
                  </Col>
                  <Col className="orbit1 one" xs="8" sm="4">
                     {' '}
                     <Gimage link="/assets/htmllogo.png" />
                  </Col>

                  <Col className="orbit2 two" xs="8" sm="4">
                     {' '}
                     <Gimage link="/assets/csslogo.png" />
                  </Col>
                  <Col className="orbit3 three" xs="8" sm="4">
                     <Gimage link="/assets/jslogo.png" />
                  </Col>
                  <Col className="orbit4 four" xs="8" sm="4">
                     <Gimage link="/assets/githublogo.png" />
                  </Col>

                  <Col className="orbit5 five" xs="8" sm="4">
                     <Gimage link="/assets/gitlogo.png" />
                  </Col>

                  <Col className=" six" xs="12" sm="4">
                     <Gimage link="/assets/flutterlogo.png" />
                  </Col>
                  <Col className=" seven" xs="12" sm="4">
                     <Gimage link="/assets/dartlogo.png" />
                  </Col>
               </Row>
            </Col>
         </Row>
      </Container>
   );
};
export default Skills;
