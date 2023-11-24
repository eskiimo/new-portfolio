import React from "react";
import "./homePage.css";
import About from "../components/about";
// import Contact from "./contact";
// import Exp from "../components/exp";
// import LatestProject from "../components/latest";

export default function Home() {
  return (
    <div className="sections-container">
      <About />
      {/* <LatestProject /> */}
      {/* <Exp /> */}
      {/* <Contact /> */}
    </div>
  );
}
