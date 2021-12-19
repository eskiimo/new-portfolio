import React from 'react';
import { Container, Row, Col } from 'reactstrap';
// import NewCarousel from '../components/UIelements/carousel';
import './workPage.css';

const Work = () => {
 //  const [list, setList] = useState([
 //   '/assets/work/harth-1.jpg',
 //   '/assets/work/harth-2.jpg',
 //   '/assets/work/harth-3.jpg',
 //  ]);
 //  const [index, setIndex] = useState(0);
 //  const next = () => {
 //   console.log('next');
 //   if (index === list.length - 1) {
 //    setIndex(0);
 //   } else {
 //    setIndex(index + 1);
 //   }
 //  };
 //  const prev = () => {
 //   console.log('prev');
 //   if (index === 0) {
 //    setIndex(list.length - 1);
 //   } else {
 //    setIndex(index - 1);
 //   }
 //  };
 return (
  <Container className="work-container">
   <Row className="work-row">
    <Col sm="6" className="work-image-column">
     {/* <NewCarousel /> */}
     <Row className="align-items-center">
      {/* <Col>
       {' '}
       <button onClick={prev}>L</button>{' '}
      </Col> */}
      <Col>
       {' '}
       <div className="work-image"></div>{' '}
      </Col>
      {/* <Col>
       <button onClick={next}>R</button>
      </Col> */}
     </Row>
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
   <br />
  </Container>
 );
};
export default Work;
