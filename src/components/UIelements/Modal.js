import React from 'react';
import {
 Row,
 Col,
 Modal,
 ModalHeader,
 ModalBody,
 ModalFooter,
} from 'reactstrap';
import Buton from '../FormElements/Button';
import './Modal.css';

const MyModal = (props) => {
 return (
  <React.Fragment>
   <Modal
    backdrop={true}
    centered
    scrollable
    fullscreen="lg"
    size="lg"
    toggle={props.show}
    isOpen={props.shown}
   >
    <ModalHeader toggle={props.hide}>{props.project.name}</ModalHeader>
    <ModalBody>
     <Row className={`work-row ${!props.shown && 'main-content-hide'}`}>
      <Col md="6" className="work-image-column">
       <Row className="align-items-center">
        <Col>
         {' '}
         <div className="work-image">
          <img src={props.project.image} alt={props.project.name} />
         </div>{' '}
        </Col>
       </Row>
      </Col>
      <Col md="6">
       <p className="harth-paragraph"> {props.project.p1} </p>
       <br />
       <p className="harth-paragraph"> {props.project.p2} </p>
      </Col>
     </Row>
    </ModalBody>
    <ModalFooter>
     <Buton text="Cancel" onClick={props.hide} />
    </ModalFooter>
   </Modal>
  </React.Fragment>
 );
};

export default MyModal;
