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

        {project.link && (
          <a
            href={project?.link}
            rel="noopener noreferrer"
            target="_blank"
            className="btn-solid"
          >
            Demo
          </a>
        )}

        {project.googleLink && (
          <a
            href={project?.googleLink}
            rel="noopener noreferrer"
            target="_blank"
          >
            <i className="fa-brands fa-android"></i>
          </a>
        )}
        {project.appleLink && (
          <a href={project.appleLink} rel="noopener noreferrer" target="_blank">
            <i className="fa-brands fa-apple"></i>
          </a>
        )}

        {project.repo && (
          <a href={project.repo} rel="noopener noreferrer" target="_blank">
            <i className="fab fa-github"> </i>{" "}
          </a>
        )}
      </div>
    </div>
  );
}

export default ProjectCard;
