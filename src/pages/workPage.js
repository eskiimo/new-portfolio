import React, { useState } from "react";
import { Row, Col } from "reactstrap";
import MyModal from "../components/UIelements/Modal";
import "./workPage.css";

const PROJECT_LIST = [
  {
    logo: "/assets/harth-logo.jpg",
    name: "Harth - حارث ",
    image: "/assets/harth-1.jpg",
    p1: " Harith application The fastest way to buy and sell crops, farm equipment  and everything related to agriculture and farmers You can display products near you and choose the categories that suit your needs Please have apleasant experience!",
    p2: "Built the Front End with Flutter -cross platform framework- so the application is available on Google Play Store and Apple Store",
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
    p1: " Landing page for an electric services company",
    p2: "EPS provides All field technical services, tooling, equipment, instrumentation, and technical supervision to perform such tests and inspections.",
    link: "https://eps-co.netlify.app",
  },
];
export const RenderProjectCards = (props) =>
  props.list.map((project, index) => {
    return (
      <Col key={project.name} xs="11" sm="6" md="3" lg="2">
        <div
          onClick={() => {
            props.onClick(index);
          }}
          className="project-card ml-10"
        >
          <img src={project.logo} alt={project.name} />
        </div>
      </Col>
    );
  });

const Work = () => {
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
      <MyModal
        project={selectedProject}
        shown={isOpen}
        hide={hideModal}
        show={showModal}
      />

      <div className="work-container">
        <hr />
        <p>PROJECTS</p>
        <Row className="cards-row">
          <RenderProjectCards list={PROJECT_LIST} onClick={handleOnClick} />
        </Row>
      </div>
    </>
  );
};
export default Work;
