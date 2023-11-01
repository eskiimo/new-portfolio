import "./projectsPage.css";
import React from "react";

const PROJECT_LIST = [
  {
    name: "Places",
    image: "/assets/acad-mern.jpg",
    desc: "Full stack web application coded along with -The MERN Fullstack Guide course-  Created by Academind by Maximilian Schwarzmüller, Manuel Lorenz",
    link: "https://acad-mern-kareem.netlify.app/",
    stack: ["React", "NodeJS", "Express", "MongoDB"],
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
    // image: "/assets/egycon-logo.png",
    image: "/assets/egycon-1.PNG",
    desc: "Collaboration project - created the entire frontend with css and bootstrap as per client's designing needs",
    link: "https://egycongroup.com/",
    stack: ["CSS", "BOOTSTRAP"],
  },
  {
    logo: "/assets/dalya-logo.png",
    name: "DalyArt",
    image: "/assets/dalya-1.PNG",
    desc: " Art Gallery for showcasing paintings and interior design Built with Gatsby.js SSR styled with css and bootstrap",
    link: "https://Dalyart.netlify.app",
    stack: ["React", "Gatsby", "bootstrap"],
  },
  {
    name: "KareGram",
    image: "/assets/karegram.PNG",
    desc: "A work in progress Instagram Clone SSR App created with Next.js ,  Created a standalone api with nodejs & express",

    link: "https://karegram.vercel.app",
    stack: ["React", "NextJS", "TailwindCSS", "Express", "MongoDB"],
  },
  {
    name: "Harth - حارث ",
    image: "/assets/harth-1.jpg",
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
        {/* <hr /> */}
        <div className="cards-row">
          {PROJECT_LIST.map((project, index) => {
            return (
              <div key={index} className="project-card ">
                <div className="project-img">
                  <img loading="lazy" src={project.image} alt={project.name} />
                </div>
                <div className="project-desc">
                  <>
                    <h1>{project.name}</h1>
                    <p>{project.desc}</p>
                    <div className="project-stack">
                      {project.stack.map((tech) => (
                        <p key={tech}>{tech}</p>
                      ))}
                    </div>
                  </>
                  <a
                    href={project.link}
                    rel="noopener noreferrer"
                    target="_blank"
                    className="btn-solid"
                  >
                    {" "}
                    View Demo
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </section>
      {/* <MyModal
        project={selectedProject}
        shown={isOpen}
        hide={hideModal}
        show={showModal}
      /> */}
    </>
  );
};
export default ProjectsPage;
