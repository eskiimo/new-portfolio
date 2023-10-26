import React from "react";
import "./exp.css";

const Exp = () => {
  return (
    <section id="exp" className="">
      <h1>Work Experience</h1>
      <div id="timeline" className="timeline ">
        <div className="container ">
          <div className="text-box reveal">
            {/* <span className="w"></span> */}
            <h3>Front end Developer</h3>
            <p>Freelance</p>
            <p>Sep. 2020</p>
          </div>
        </div>
        <div className="container">
          <div className="text-box reveal">
            {/* <span className="w"></span> */}
            <h3>Full stack Developer</h3>
            <p>ISI</p>
            <p>Oct. 2021 - Sep. 2023 </p>
          </div>
        </div>
      </div>
      <div className="skills-container">
        <div className="skills row">
          <div className="dang-skills">
            <h1>
              Frontend <i className="fa-brands fa-react"></i>
            </h1>
            <hr />
            <p className="skills-paragraph">HTML, CSS, JS</p>
            <p className="skills-paragraph">React.js</p>
            <p className="skills-paragraph">Gatsby.js</p>
            <p className="skills-paragraph">Next.js</p>
            <p className="skills-paragraph">Flutter</p>
            <p className="skills-paragraph">Dart</p>
          </div>
          <div className="dang-skills">
            <h1>
              Backend <i className="fa-brands fa-node-js"></i>
            </h1>
            <hr />

            <p className="skills-paragraph">Node.js</p>
            <p className="skills-paragraph">Express</p>
            <p className="skills-paragraph">MongoBD</p>
            <p className="skills-paragraph">Graphql</p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Exp;
