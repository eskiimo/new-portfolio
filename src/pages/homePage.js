import React, { useState } from "react";
import "./homePage.css";
// import NavigationBar from './components/Navigation/NavigationBar';
import About from "../components/about";
import Contact from "./contactPage";
import Exp from "../components/exp";
import LatestProject from "../components/latest";

export default function Home() {
  const [play, setPlay] = useState(false);
  const [playMode, setPlayMode] = useState("pause");
  const toggleAudio = () => {
    if (play) {
      setPlay(false);
      setPlayMode("pause");
    } else {
      setPlay(true);
      setPlayMode("play");
    }
  };
  function reveal() {
    var reveals = document.querySelectorAll(".reveal");

    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 200;

      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }

  window.addEventListener("scroll", reveal);

  const handleClick = () => {
    const id = `top`;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };
  return (
    <div className="sections-container">
      <div className={`${"record-cover-" + playMode}`}>
        <button onClick={toggleAudio} className="record-btn"></button>
      </div>

      {play ? (
        <audio autoPlay controls className="record spin">
          <source src="/assets/songs/AnyColourYouLike.mp3" type="audio/mpeg" />
        </audio>
      ) : (
        <></>
      )}

      {/* <Hello /> */}
      <About />
      <LatestProject />
      <Exp />
      <Contact />
      <footer className="position-relative">
        <div className=" footer">
          <div className="contact-icon">
            <a
              href="//www.linkedin.com/in/kremelhosary/"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              <i className="fab fa-linkedin"> </i>{" "}
            </a>
          </div>
          <div className="contact-icon">
            <a
              href="//github.com/eskiimo"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              <i className="fab fa-github"> </i>{" "}
            </a>
          </div>

          <div className="contact-icon">
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
        <a onClick={handleClick} href="#top" className="top-btn">
          <i className="fa-solid fa-hand-point-up"></i>
        </a>
      </footer>
    </div>
  );
}
