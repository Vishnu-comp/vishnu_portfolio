import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import LaptopImg from "../../assets/home-main.svg";
import Tilt from "react-parallax-tilt";


const About = () => {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="yellow"> INTRODUCE hello </span> MYSELF
            </h1>
            <p className="home-about-body">
              Hi, my name is <span className="yellow">Vishnu Nair</span>
              and I'm from <span className="yellow">Bengaluru, Karnataka, India.</span>
              <br />
              <br />
              I am currently pursuing my Master of Computer Applications at Christ University Bangalore, with a strong academic record.
              <br />
              <br />
              As a <b className="yellow">Full-Stack</b> developer, I have experience working with technologies like
              <b className="yellow"> JavaScript, React.js, Node.js, Express.js, and MongoDB.</b>
              <br />
              <br />
              I have a passion for building efficient, scalable web applications, with a focus on modern JavaScript frameworks.
              <br />
              <br />
              I am also interested in exploring areas related to <b className="yellow">Artificial Intelligence</b> and 
              developing innovative solutions for real-world problems.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={LaptopImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
         
        </Row>
      </Container>
    </Container>
  );
}

export default About;
