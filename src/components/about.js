import React, { useEffect } from "react";
import "./about.css";
// import { useLocation } from "react-router-dom";

const About = () => {
  // const page = useLocation();

  useEffect(() => {
    const tog = setInterval(() => {
      let cursor = document.getElementsByClassName("cursor");
      cursor[0].classList.toggle("hide");
    }, 500);
    return () => clearInterval(tog);
  }, []);

  return (
    <section id="hero" className="">
      <h1 className="dang">
        {" "}
        &gt; Front End Developer <span className="cursor">|</span>
      </h1>
      <div className="cardy">
        <img src="./assets/me.jpg" alt="kareem kamal" />
        <div className="subtitle">
          <h1> I'm Kareem Kamal</h1>
          <article>
            <p className="info-paragraph">
              I'm a{" "}
              <span className="info-with-color">Full Stack Developer</span>{" "}
              based in Cairo, Egypt. with primary focus on front end
              technologies Specially{" "}
              <span className="info-with-color">REACT</span> &{" "}
              <span className="info-with-color">NEXT</span>
              <br /> I love Building pretty websites, memes, music
            </p>
          </article>
          <div className="icons">
            <a
              href="//www.linkedin.com/in/kremelhosary/"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              <i className="fab fa-linkedin"> </i>{" "}
            </a>

            <a
              href="//github.com/eskiimo"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              <i className="fab fa-github"> </i>{" "}
            </a>

            <a
              href="//fb.com/kremkamall"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              <i className="fab fa-facebook"> </i>{" "}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
export default About;
