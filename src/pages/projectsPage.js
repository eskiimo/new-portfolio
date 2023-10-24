import "./projectsPage.css";
import React, { useState } from "react";
import MyModal from "../components/UIelements/Modal";

const PROJECT_LIST = [
  {
    logo: "/assets/harth-logo.jpg",
    name: "Harth - حارث ",
    image: "/assets/harth-1.jpg",
    p2: " Harith application The fastest way to buy and sell crops, farm equipment  and everything related to agriculture and farmers You can display products near you and choose the categories that suit your needs Please have apleasant experience!",
    p1: "Built the Front End with Flutter. Available on Google Play Store and Apple Store",
    googleLink: "https://play.google.com/store/apps/details?id=com.harth.store",
    appleLink:
      "https://apps.apple.com/eg/app/%D8%AD%D8%A7%D8%B1%D8%AB/id1553536945",
  },
  {
    logo: "/assets/acad-mern.jpg",
    name: "MERN",
    image: "/assets/acad-mern-home.jpg",
    p1: " React, NodeJS, Express & MongoDB - The MERN Fullstack Guide",
    p2: "Created by Academind by Maximilian Schwarzmüller, Maximilian Schwarzmüller, Manuel Lorenz",
    link: "https://acad-mern-kareem.netlify.app/",
  },
  {
    logo: "/assets/epsLogo.png",
    name: "EPS",
    image: "/assets/epsHome.JPG",
    p1: "Experimenting Tailwind CSS with React",
    p2: ' Landing page for an electric services company "EPS" ',
    link: "https://eps-co.netlify.app",
  },
  {
    logo: "/assets/egycon-logo.png",
    name: "EgyCon",
    image: "/assets/egycon-1.PNG",
    p1: "created the entire frontend with css and bootstrap as per client's designing needs",
    p2: "Egycon is a fresh produce investment project that owns and administers large tracts of land in El Sharkia and Ismailia, Egypt",
    link: "https://egycongroup.com/",
  },
  // {
  //   logo: "/assets/dalya-logo.png",
  //   name: "DalyArt",
  //   image: "/assets/dalya-1.PNG",
  //   p1: "Built with Gatsby.js SSR styled with css and bootstrab",
  //   p2: " Art Gallery for showcasing paintings and interior design",
  //   link: "https://Dalyart.netlify.app",
  // },
  {
    logo: "/assets/karegram-logo.png",
    name: "KareGram",
    image: "/assets/karegram.PNG",
    p1: "SSR App created with Next.js and styled with Tailwind",
    p2: "InstaGram Clone",
    link: "https://karegram.vercel.app",
  },
];

const ProjectsPage = () => {
  const [isOpen, setisOpen] = useState(false);

  const showModal = () => {
    setisOpen(true);
  };
  const hideModal = () => {
    setisOpen(false);
  };
  const [selectedProject, setSelProject] = useState(PROJECT_LIST[0]);
  const handleOnClick = (index) => {
    setSelProject(PROJECT_LIST[index]);
    showModal();
  };
  return (
    <>
      <section id="project-page" className="">
        <h1 className="dang">PROJECTS</h1>
        <hr />
        <div className="cards-row">
          {PROJECT_LIST.map((project, index) => {
            return (
              <div
                onClick={() => {
                  handleOnClick(index);
                }}
                className="project-card "
              >
                <img src={project.logo} alt={project.name} />
              </div>
            );
          })}
        </div>
      </section>
      <MyModal
        project={selectedProject}
        shown={isOpen}
        hide={hideModal}
        show={showModal}
      />
    </>
  );
};
export default ProjectsPage;
