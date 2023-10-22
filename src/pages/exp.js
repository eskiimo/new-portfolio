import React from "react";
import "./exp.css";

const Exp = () => {
  return (
    <section id="skills" className="">
      {/* <img src="/assets/laptop.png" alt="laptop with react code" /> */}
      <div id="timeline" className="timeline ">
        <div className="container ">
          <div className="text-box reveal">
            <span className="w"></span>
            <h6> Freelance 22/9/2020 </h6>
            <h4>UpWork</h4>
            <h3>Frontend Developer</h3>
          </div>
        </div>
        <div className="container">
          <div className="text-box reveal">
            <span className="w"></span>
            <h2> BLA BLA </h2>
          </div>
        </div>
        <div className="container">
          <div className="text-box reveal">
            <span className="w"></span>
            <h2> BLA BLA BLABLA BLA BLABLA BLA BLABLA BLA BLABLA BLA BLA </h2>
          </div>
        </div>
        <div className="container">
          <div className="text-box reveal">
            <span className="w"></span>
            <h2> BLA </h2>
          </div>
        </div>
      </div>
      {/* <Container className="skills-container">
        <Row>
          <Col xs="11" md="6" className="kalam">
            <div className="dang-skills">
              <h1>
                Frontend developer <i className="fa-brands fa-react"></i>
              </h1>
              <hr />
              <p className="skills-paragraph">HTML, CSS, JS</p>
              <p className="skills-paragraph">React.js</p>
              <p className="skills-paragraph">Gatsby.js</p>
              <p className="skills-paragraph">Next.js</p>
              <p className="skills-paragraph">Flutter</p>
              <p className="skills-paragraph">Dart</p>
            </div>
          </Col>
          <Col xs="11" md="6" className="anime">
            <div className="dang-skills">
              <h1>
                Backend developer <i class="fa-brands fa-node-js"></i>
              </h1>
              <hr />

              <p className="skills-paragraph">Node.js</p>
              <p className="skills-paragraph">Express</p>
              <p className="skills-paragraph">MongoBD</p>
              <p className="skills-paragraph">Graphql</p>
            </div>
          </Col>
        </Row>
      </Container> */}
    </section>
  );
};
export default Exp;
