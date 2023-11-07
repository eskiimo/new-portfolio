import React from "react";
import "./exp.css";

const Exp = () => {
  return (
    <section id="exp">
      <h1>Work Experience</h1>
      <div id="timeline" className="timeline ">
        <div className="container ">
          <div className="text-box reveal">
            <h2>Front end Developer</h2>
            <p className="subtitle">Freelance</p>
            <p className="date">Sep. 2020</p>
          </div>
        </div>
        <div className="container">
          <div className="text-box reveal">
            <h2>Full stack Developer</h2>
            <p className="subtitle">Information System Institute</p>
            <p className="date">Oct. 2021 - Sep. 2023 </p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Exp;
