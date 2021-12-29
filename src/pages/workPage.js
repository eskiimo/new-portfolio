import React, { useState } from 'react';
import { Row, Col } from 'reactstrap';
import MyModal from '../components/UIelements/Modal';
import './workPage.css';
import logo from './logos/harth-logo.jpg';
import pic from './logos/harth-1.jpg';
const PROJECT_LIST = [
 {
  logo: logo,
  name: 'Harth - حارث ',
  image: pic,
  p1: ' Harith application The fastest way to buy and sell crops, farm equipment  and everything related to agriculture and farmers You can display products near you and choose the categories that suit your needs Please have apleasant experience!',
  p2: 'Built the Front End with Flutter -cross platform framework- so the application is available on Google Play Store and Apple Store',
  googleLink: 'https://play.google.com/store/apps/details?id=com.harth.store',
  appleLink:
   'https://apps.apple.com/eg/app/%D8%AD%D8%A7%D8%B1%D8%AB/id1553536945',
 },
];
export const RenderProjectCards = (props) =>
 props.list.map((project, index) => {
  return (
   <Col xs="11" sm="6" md="3" lg="2">
    <div
     onClick={() => {
      props.onClick(index);
     }}
     className="project-card"
    >
     <img src={project.logo} alt={project.name} />
    </div>
   </Col>
  );
 });

const Work = () => {
 const [isOpen, setisOpen] = useState(false);

 const showModal = () => {
  setisOpen(true);
 };
 const hideModal = () => {
  setisOpen(false);
 };
 const [selectedProject, setSelProject] = useState(PROJECT_LIST[0]);
 const handleOnClick = (index) => {
  setSelProject(PROJECT_LIST[index]);
  console.log(index);
  showModal();
 };
 return (
  <React.Fragment>
   <MyModal
    project={selectedProject}
    shown={isOpen}
    hide={hideModal}
    show={showModal}
   />
   <div className="work-container">
    <Row className="cards-row">
     <RenderProjectCards list={PROJECT_LIST} onClick={handleOnClick} />
    </Row>
   </div>
  </React.Fragment>
 );
};
export default Work;
