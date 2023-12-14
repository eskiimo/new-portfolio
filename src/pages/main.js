import React, { useState } from "react";
import ProjectsPage from "./projectsPage";
import BlogPage from "./blog";
import Contact from "./contact";
import Home from "./hero";
import Nav from "../components/nav";

import "./main.css";

function Main() {
  const [activeIndex, setActive] = useState(0);

  const swipe = (index) => {
    if (index === activeIndex) {
      return;
    }
    const currentGroup = document.querySelector(
      `[data-index="${activeIndex}"]`
    );

    const nextGroup = document.querySelector(`[data-index="${index}"]`);

    currentGroup.dataset.status =
      nextGroup.dataset.index < currentGroup.dataset.index ? "after" : "before";

    nextGroup.dataset.status =
      nextGroup.dataset.index < currentGroup.dataset.index ? "before" : "after";

    setTimeout(() => {
      nextGroup.dataset.status = "active";
    }, 10);
    setActive(index);
  };
  return (
    <div className="menu">
      <div id="menu-items">
        <Nav swipe={swipe} activeLink={activeIndex} />
      </div>
      <div className="pattern"></div>
      <div
        className="bg"
        style={{ backgroundImage: "url('/assets/bg.jpg')" }}
      ></div>
      <div className="card-group">
        <div className="card" data-index={0} data-status="active">
          <Home />
        </div>
        <div className="card" data-index={1} data-status="after">
          <BlogPage />
        </div>
        <div className="card" data-index={2} data-status="after">
          <ProjectsPage />
        </div>
        <div className="card" data-index={3} data-status="after">
          <Contact />
        </div>
      </div>
    </div>
  );
}

export default Main;
