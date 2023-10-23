import React from "react";
import { Link } from "react-router-dom";
import "./nav.css";
export default function Nav() {
  return (
    <nav>
      <ul className="nav-links">
        <li className="navlink">
          <Link to="/">/</Link>
        </li>
        <li className="navlink">
          <Link to="/">Blog</Link>
        </li>

        <li className="navlink">
          <Link to="/projects">Projects</Link>
        </li>
      </ul>
      {/* <span>
        <i className="fa-solid fa-bars hamburger"></i>
      </span> */}
    </nav>
  );
}
