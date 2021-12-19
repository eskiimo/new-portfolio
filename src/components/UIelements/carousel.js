import React, { useState } from 'react';

import {
 Carousel,
 CarouselControl,
 CarouselIndicators,
 CarouselItem,
 Col,
 Row,
 Container,
} from 'reactstrap';
import './carousel.css';

const NewCarousel = () => {
 const list = [
  '/assets/work/harth-1.jpg',
  '/assets/work/harth-2.jpg',
  '/assets/work/harth-3.jpg',
 ];
 const [index, setIndex] = useState(0);
 //  const [animation, setAnimation] = useState(false);

 const next = () => {
  console.log('next');
  if (index === list.length - 1) {
   setIndex(0);
  } else {
   setIndex(index + 1);
  }
 };
 const prev = () => {
  console.log('prev');
  if (index === 0) {
   setIndex(list.length - 1);
  } else {
   setIndex(index - 1);
  }
 };
 const _slides = list.map((item) => {
  return (
   <CarouselItem key={item.key} animating={true}>
    <img className="carousel_img" alt="harth" src={list[index]} />
   </CarouselItem>
  );
 });

 return (
  <div className="carousel_wrap">
   <Row className="justify-content-center align-items-center row-content">
    <Col xs={12} md={10}>
     <Container>
      <Carousel activeIndex={index} next={next} previous={prev}>
       <CarouselIndicators
        items={list}
        activeIndex={index}
        onClickHandler={() => {}}
       />
       {_slides}
       <CarouselControl
        direction="next"
        directionText="next"
        onClickHandler={next}
       />
       <CarouselControl
        direction="prev"
        directionText="prev"
        onClickHandler={prev}
       />
      </Carousel>
     </Container>
    </Col>
   </Row>
  </div>
 );
};
export default NewCarousel;
