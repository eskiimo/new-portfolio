import React from "react";
import "./badge.css";
function Badge(text) {
  const variant = text.text;
  console.log(variant);
  return <div className={`badge ${variant}`}>{text.text}</div>;
}

export default Badge;
