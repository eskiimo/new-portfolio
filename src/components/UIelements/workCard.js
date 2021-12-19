import React from 'react';
import { Row, Col } from 'reactstrap';
import './workCard.css';

const WorkCard = (props) => {
 return (
  <Row className={`work-row ${!props.shown && 'main-content-hide'}`}>
   <button onClick={props.hide} className="close-button">
    X
   </button>
   <Col sm="6" className="work-image-column">
    <Row className="align-items-center">
     <Col>
      {' '}
      <div className="work-image"></div>{' '}
     </Col>
    </Row>
   </Col>
   <Col className="work-info-paragraph" sm="6">
    <div>
     <p className="headline">Harth</p>
     <p className="harth-paragraph">
      {props.p1} <br />
      {props.p2}
     </p>
    </div>
   </Col>
  </Row>
 );
};

export default WorkCard;
