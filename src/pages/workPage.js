import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import NewCarousel from '../components/UIelements/carousel';
import './workPage.css';

const Work = () => {
 return (
  <Container className="work-container">
   <Row className="work-row">
    <Col sm="6" className="work-image-column">
     <NewCarousel />
    </Col>
    <Col className="work-info-paragraph" sm="6">
     <div>
      <p className="headline">Harth</p>
      <p className="harth-paragraph">
       Harith application The fastest way to buy and sell crops, farm equipment
       and everything related to agriculture and farmers You can display
       products near you and choose the categories that suit your needs Please
       have a pleasant experience!
      </p>
      <p className="harth-paragraph">
       Built the Front End with Flutter -cross platform framework- so the
       application is available on Google Play Store and Apple Store
      </p>
     </div>
    </Col>
   </Row>
  </Container>
 );
};
export default Work;
