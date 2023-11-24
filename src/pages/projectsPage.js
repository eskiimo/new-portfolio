import ProjectCard from "../components/projectCard";
import "./projectsPage.css";
import React from "react";

export const PROJECT_LIST = [
  {
    name: "Next-commerce",
    image: "/assets/next-commerce.png",
    desc: "E-Commerce Website with Next.js 14 and Sanity.io",
    link: "https://next-commerce-kareem.vercel.app/",
    stack: ["Next.js", "TailwindCSS", "TypeScript", "Sanity"],
  },
  {
    name: "EPS",
    image: "/assets/epsHome.png",
    desc: 'website for an electric services company "EPS" ',
    link: "https://eps-co.netlify.app",
    stack: [" React", "CSS"],
  },
  {
    name: "EgyCon",
    image: "/assets/egycon-1.PNG",
    desc: "Collaboration project - created the entire frontend with css and bootstrap as per client's designing needs",
    link: "https://egycongroup.com/",
    stack: ["CSS", "Bootstrap"],
  },
  {
    name: "KareGram",
    image: "/assets/karegram.PNG",
    desc: "A work in progress Instagram Clone SSR App created with Next.js ,  Created a standalone api with nodejs & express",

    link: "https://karegram.vercel.app",
    stack: ["React", "NextJS", "TailwindCSS", "Express", "MongoDB"],
  },
  {
    name: "Places",
    image: "/assets/acad-mern.jpg",
    desc: "Full stack web application coded along with -The MERN Fullstack Guide course-  Created by Academind by Maximilian Schwarzmüller, Manuel Lorenz",
    link: "https://acad-mern-kareem.netlify.app/",
    stack: ["React", "NodeJS", "Express", "MongoDB"],
  },
  {
    image: "/assets/linkedout.png",
    name: "LinkedOut",
    desc: "Simple mobile app for finding jobs from Rapid API ",
    repo: "https://github.com/eskiimo/linked-out",
    stack: ["React Native", "Expo", "Rapid-API"],
  },
  {
    name: "Harth - حارث ",
    image: "/assets/harth.png",
    desc: "Built the Front End with Flutter. Available on Google Play Store and Apple Store",
    googleLink: "https://play.google.com/store/apps/details?id=com.harth.store",
    appleLink:
      "https://apps.apple.com/eg/app/%D8%AD%D8%A7%D8%B1%D8%AB/id1553536945",
    stack: ["Flutter", "Dart", "G-maps-API"],
  },
];

const ProjectsPage = () => {
  return (
    <>
      <section id="project-page">
        <h1 className="dang">PROJECTS</h1>
        <div className="cards-row">
          {PROJECT_LIST.map((project, idx) => (
            <ProjectCard key={idx} project={project} />
          ))}
        </div>
      </section>
    </>
  );
};
export default ProjectsPage;
