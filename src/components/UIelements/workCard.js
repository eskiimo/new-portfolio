import React from 'react';

import './workCard.css';

const WorkCard = (props) => {
 return (
  <div className={`work-card ${props.className}`} style={props.style}>
   <img
    src={props.link}
    alt={props.alt}
    style={{ width: props.width, height: props.width }}
   />
  </div>
 );
};

export default WorkCard;
