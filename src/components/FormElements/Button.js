import React from "react";
import { Link } from "react-router-dom";
import "./Button.css";

const Buton = (props) => {
  return (
    <>
      {props.to ? (
        <div style={{ width: props.width }} className="buton">
          <Link to={props.to}> {props.text}</Link>
        </div>
      ) : (
        <button
          className="buton"
          style={{ width: props.width }}
          onClick={props.onClick}
          disabled={props.disabled}
        >
          {props.text}
        </button>
      )}
    </>
  );
};
export default Buton;
