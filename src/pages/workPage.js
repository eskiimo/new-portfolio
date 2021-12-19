import React, { useState } from 'react';
import { Row, Col } from 'reactstrap';
import WorkCard from '../components/UIelements/workCard';
// import NewCarousel from '../components/UIelements/carousel';
// import Modal from '../components/UIelements/Modal';
// import Buton from '../components/FormElements/Button';
import './workPage.css';

const Work = () => {
 const PROJECT_LIST = [
  {
   name: 'harth',
   images: [
    {
     src: '',
     alt: '',
    },
   ],
   p1: ' Harith application The fastest way to buy and sell crops, farm equipment  and everything related to agriculture and farmers You can display products near you and choose the categories that suit your needs Please have apleasant experience!',
   p2: 'Built the Front End with Flutter -cross platform framework- so the application is available on Google Play Store and Apple Store',
  },
 ];
 const [isOpen, setisOpen] = useState(false);
 const showModal = () => {
  setisOpen(true);
 };
 const hideModal = () => {
  setisOpen(false);
 };

 return (
  <Col className="work-container">
   <Row className="cards-row">
    <Col xs="12" sm="6" md="4" lg="3">
     <div onClick={showModal} className="project-card">
      <img src="./assets/jslogo.png" alt="harth logo" />
     </div>
    </Col>
    <Col xs="12" sm="6" md="4" lg="3">
     <div onClick={showModal} className="project-card">
      <img src="./assets/work/harth-logo.jpg" alt="harth logo" />
     </div>
    </Col>
   </Row>
   <WorkCard
    hide={hideModal}
    show={showModal}
    shown={isOpen}
    p1={PROJECT_LIST[0].p1}
    p2={PROJECT_LIST[0].p2}
   />

   <br />
  </Col>
 );
};
export default Work;
