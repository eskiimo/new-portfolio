import React from "react";
import { Link } from "react-router-dom";
import "./latest.css";

export default function LatestProject() {
  return (
    <section id="latest">
      <div className="kare">
        <img src="/assets/laptop2.png" alt="laptop" height={250} width={250} />
      </div>
      <h1>Latest Project</h1>
      <div className="project-row">
        <div className="project-desc">
          <h2>KareGram</h2>
          <p>
            InstaGram Clone
            <br /> SSR App created with Next.js and styled with Tailwind
          </p>
          <div className="btns">
            <a
              href="https://karegram.vercel.app"
              rel="noopener noreferrer"
              target="_blank"
              className="btn-solid"
            >
              {" "}
              View Demo
            </a>
            <a
              href="https://github.com/eskiimo/karegram"
              rel="noopener noreferrer"
              target="_blank"
              className="btn-outline"
            >
              {" "}
              full Repo
            </a>
          </div>
        </div>
        <div className="stack">
          <h2>stack</h2>
          <div className="stack-icons">
            <div className="stack-icon">
              <img
                src="/assets/react.png"
                alt="nodejs"
                width={100}
                height={100}
              />
              <p>React JS</p>
            </div>
            <div className="stack-icon">
              <img
                src="/assets/next.png"
                alt="nextjs"
                width={100}
                height={100}
              />
              <p>Next JS</p>
            </div>
            <div className="stack-icon">
              <img
                src="/assets/node.png"
                alt="nodejs"
                width={100}
                height={100}
              />
              <p>Node JS</p>
            </div>
            <div className="stack-icon">
              <p>More...</p>
            </div>
          </div>
        </div>
      </div>
      <Link className="btn-solid m" to="/projects">
        {" "}
        See More Projects
      </Link>
    </section>
  );
}
