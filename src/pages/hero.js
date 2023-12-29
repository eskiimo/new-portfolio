import React, { useEffect } from "react";
import "./hero.css";
// import About from "../components/about";
// import Contact from "./contact";
// import Exp from "../components/exp";
// import LatestProject from "../components/latest";

export default function Home() {
  useEffect(() => {
    const tog = setInterval(() => {
      let cursor = document.getElementsByClassName("cursor");
      cursor[0]?.classList.toggle("hide");
    }, 500);

    return () => clearInterval(tog);
  }, []);

  useEffect(() => {
    const togImage = setInterval(() => {
      let rand = Math.floor(Math.random() * 4 + 1);
      document.getElementById("propic").src = `./assets/me-${rand}.jpg`;
    }, 3000);
    return () => clearInterval(togImage);
  }, []);

  return (
    <section id="hero">
      <h1 className="header">
        &gt; Software Developer<span className="cursor ">|</span>
      </h1>

      <img
        id="propic"
        src="./assets/me-1.jpg"
        alt="kareem kamal"
        width={300}
        height={300}
      />
      <h2 className="name">Kareem Kamal</h2>
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
          href="https://dev.to/eskiimo"
          target="_blank"
          rel="noopener noreferrer"
        >
          {" "}
          <i className="fa-brands fa-dev"></i>
        </a>
        <a
          href="https://stackoverflow.com/users/9022803/kareem-kamal"
          target="_blank"
          rel="noopener noreferrer"
        >
          {" "}
          <i className="fa-brands fa-stack-overflow"></i>
        </a>
        <a
          href="https://www.hackerrank.com/profile/__eskiimo"
          target="_blank"
          rel="noopener noreferrer"
        >
          {" "}
          <i className="fa-brands fa-hackerrank"></i>
        </a>

        <a href="//fb.com/kremkamall" target="_blank" rel="noopener noreferrer">
          {" "}
          <i className="fab fa-facebook"> </i>{" "}
        </a>

        <a
          href="https://www.instagram.com/__eskiimo"
          target="_blank"
          rel="noopener noreferrer"
        >
          {" "}
          <i className="fa-brands fa-instagram"></i>
        </a>

        <a
          href="https://www.x.com/__eskiimo"
          target="_blank"
          rel="noopener noreferrer"
        >
          {" "}
          <i className="fa-brands fa-twitter"></i>
        </a>
        <i className="fa-brands fa-x-twitter"></i>
      </div>
      <article>
        <p className="subtitle">
          Full Stack Developer specialized in{" "}
          <span className="info-with-color">MERN</span> stack . JavaScript
          enthusiast creating friendly user interfaces, enhancing web
          performance and SEO, Exploring different frameworks like{" "}
          <span className="info-with-color">NEXT</span> and{" "}
          <span className="info-with-color">ANGULAR</span> and more.
          <br /> I love Building websites, memes, music
        </p>
      </article>
    </section>
  );
}
