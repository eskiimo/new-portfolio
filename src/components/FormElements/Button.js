import React from 'react';
import './Button.css';

const Buton = (props) => {
 return (
  <button className="buton" onClick={props.onClick}>
   {props.text}
  </button>
 );
};
export default Buton;
