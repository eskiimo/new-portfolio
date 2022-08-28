import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import Avatar from '../components/UIelements/avatar';
import me from './logos/me.jpg';
import './about.css';

const About = () => {
   return (
      <Container className="info-container align-content-center">
         <Col xs="12">
            <Row>
               <Col xs="8" sm="5">
                  {' '}
                  <Avatar image={me} alt="kareem kamal" width="60%" />
               </Col>
               <Col xs="8" md="7">
                  <div>
                     <div className="dang">
                        <h1 data-shadow="dang!">Developer</h1>
                     </div>
                     <p className="info-paragraph">
                        I'm a{' '}
                        <span className="info-with-color">
                           Front End Developer
                        </span>{' '}
                        based in Egypt, Cairo. Studied Engineering at University
                        of Tanta.
                        <br />I have a serious passion for writing code, while I
                        Listen to good music.
                        <br /> Fan of{' '}
                        <span className="info-with-color">React.js</span> and
                        Web dev. in general. on my way to be a{' '}
                        <span className="info-with-color">MERN</span> dev....
                        <br />
                     </p>
                  </div>
               </Col>
            </Row>
         </Col>
      </Container>
   );
};
export default About;
