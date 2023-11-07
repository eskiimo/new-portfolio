import React from "react";
import "./projectCard.css";
import Badge from "./UIelements/badge";

function ProjectCard({ project }) {
  return (
    <div className="project-card ">
      <img loading="lazy" src={project.image} alt={project.name} />

      <div className="project-info">
        <h1 className="project-header">{project.name}</h1>
        <p className="project-description">{project.desc}</p>
        <div className="project-stack">
          {project.stack.map((tech) => (
            <Badge key={tech} text={tech.toString()} />
          ))}
        </div>

        <a
          href={project.link}
          rel="noopener noreferrer"
          target="_blank"
          className="btn-solid"
        >
          {" "}
          View Live
        </a>
      </div>
    </div>
  );
}

export default ProjectCard;
