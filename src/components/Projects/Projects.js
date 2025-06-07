import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import computer from "../../Assets/Projects/Computer_Unit.png";
import traffic from "../../Assets/Projects/Traffic.png";
import freshness from "../../Assets/Projects/Freshness.png";
import LLM from "../../Assets/Projects/LLM.png"
function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={computer}
              isBlog={false}
              title="ProjetDEV"
              description="Creation of a dynamic website allowing the management of products, users, and orders. Implementation of a shopping cart, a secure customer area, and an administration interface."
              ghLink="https://github.com/brahimBougacha/ProjetDEV"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={traffic}
              isBlog={false}
              title="Projet_Computer_Vision"
              description="A computer vision project aims to detect, classify, and count vehicles in road traffic scenes, while also estimating the speed of each vehicle in real time, using deep learning techniques."
              ghLink="https://github.com/brahimBougacha/ProjetComputerVision"
              demoLink="https://drive.google.com/file/d/1j92Ui663jwSU24sTEsHvJU85c7TCaOMG/view?usp=sharing"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={freshness}
              isBlog={false}
              title="Freshness-Detection"
              description="A simple and intuitive mobile application that identifies the species, origin, and freshness of a fish from an uploaded image. Detection is powered by a custom .pt model trained with Roboflow."
              ghLink="https://github.com/brahimBougacha/Freshness-Detection"
                            
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={LLM}
              isBlog={false}
              title="Large_Language_Models"
              description="Final-year project exploring the use of open source extended language models (LLM) applied to computer vision, with experimentation on Raspberry Pi 4. It aims to evaluate performance, hardware constraints and possible applications in embedded environments."
              ghLink="https://github.com/brahimBougacha/Large_Language_Models"
            />
          </Col>

          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
