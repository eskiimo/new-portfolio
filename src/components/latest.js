import React from "react";
import { Link } from "react-router-dom";
import "./latest.css";
import ProjectCard from "./projectCard";
import { PROJECT_LIST } from "../pages/projectsPage";

export default function LatestProject() {
  return (
    <section id="latest">
      <h1>Latest Project</h1>
      <ProjectCard project={PROJECT_LIST[0]} />

      <Link className="btn-solid" to="/projects">
        {" "}
        See More Projects
      </Link>
    </section>
  );
}
