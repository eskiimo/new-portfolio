import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import Avatar from '../components/UIelements/avatar';
import './about.css';

const About = () => {
   return (
      <Container className="info-container">
         <Col xs="12">
            <Row>
               <Col xs="8" sm="6">
                  {' '}
                  <Avatar
                     image="https://scontent.fcai1-2.fna.fbcdn.net/v/t1.6435-9/67758797_2399216700155006_4286278486965878784_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=174925&_nc_eui2=AeFlFZ-kzZwPZON7dHFywNLfZcv3kcNgTXRly_eRw2BNdNuxleh-KNWDE2R2I1AVcwDJTUcfb2k21tGTC-5aY_-2&_nc_ohc=sAsReJL_hIQAX_LL253&_nc_ht=scontent.fcai1-2.fna&oh=00_AT8JyntHO0MaoM1GkYdiI_c2W8QK-lNckkx4m7u0TUk5PA&oe=61E7DDB1"
                     alt="kareem kamal"
                     width="50%"
                     height="50%"
                  />
               </Col>
               <Col xs="8" md="6">
                  <div>
                     <p className="headline">About Me </p>
                     <p className="info-paragraph">Any Color You Like</p>
                     <p className="info-paragraph">
                        I'm a{' '}
                        <span className="info-with-color">
                           Front End Developer
                        </span>{' '}
                        based in Egypt, Cairo.
                        <br />I have a serious passion for writing code, while I
                        Listen to good music Fan of{' '}
                        <span className="info-with-color">Anjunadeep</span> and
                        LoFi beats. I like to share music and take kindda good
                        pictures <br />I can help build a nice atmosphere with
                        people around me.
                        <br />
                        <br />
                        tbc..
                     </p>
                  </div>
               </Col>
            </Row>
         </Col>
      </Container>
   );
};
export default About;
