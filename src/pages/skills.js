import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import './skills.css';

const Skills = () => {
   return (
      <Container className="skills-container">
         <Row className="big-row">
            <Col xs="11" md="6" className="kalam">
               <div className="dang-skills">
                  <h1>Tools & Frameworks</h1>
                  <p className="skills-paragraph">HTML, CSS, JS</p>
                  <p className="skills-paragraph">React.js</p>
                  <hr />
                  <p className="skills-paragraph">Node.js</p>
                  <p className="skills-paragraph">Express</p>
                  <p className="skills-paragraph">MongoBD</p>
                  <hr />
                  <p className="skills-paragraph">Flutter</p>
                  <p className="skills-paragraph">Dart</p>
               </div>
            </Col>
            <Col xs="11" md="6" className="anime">
               <div className="dang-skills">
                  <h1>Experience</h1>
                  <p className="skills-paragraph">Frontend</p>
                  <hr />
                  <p className="skills-paragraph">Backend</p>
                  <hr />
                  <p className="skills-paragraph">Mobile Apps.</p>
               </div>
            </Col>
         </Row>
      </Container>
   );
};
export default Skills;
