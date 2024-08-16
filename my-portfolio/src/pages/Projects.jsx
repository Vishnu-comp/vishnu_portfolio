import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "../components/Projects/ProjectCard";
import Particle from "../components/Particle";
import project from "../assets/projects/logo.png";
import lift from "../assets/projects/lift.png";


const Projects = () => {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Recent Top <strong className="yellow">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={lift}
              isBlog={false}
              title="Uni-Placer"
              description="The aim is to develop a state-of-the-art placement app that addresses the aforementioned challenges by providing a unified platform for students and recruiters. This app should facilitate seamless information flow, enhance communication channels, incorporate advanced skill assessment tools, prioritize user experience, and uphold the highest standards of data security."
              ghLink="https://github.com/Vishnu-comp/UNI-PLACER"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={project}
              isBlog={false}
              title="Intervo Simplify Hiring Amplify Talent"
              description="The project aims to develop a comprehensive Interview Management System (IMS) to streamline the recruitment process for companies. The system will cater to different roles, including company administrators, interviewers, and candidates, ensuring smooth coordination and efficient handling of interview procedures."
              ghLink="https://github.com/"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  )
}

export default Projects