import React from "react";
import { Link } from "react-router-dom";
import "./nav.css";
export default function Nav() {
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

  return (
    <>
      <div className="free">
        {" "}
        <img alt="free palestine" src="/assets/palestine.png" />
        <p>Free Palestine</p>
        <img alt="free palestine" src="/assets/palestine.png" />
      </div>
      <nav>
        <ul className="nav-links">
          <li className="navlink">
            <Link to="/">/</Link>
          </li>
          <li className="navlink">
            <Link to="/blog">Blog</Link>
          </li>

          <li className="navlink">
            <Link to="/projects">Projects</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
