import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiJavascript1,
  DiNodejs,
  DiPython,
  DiJava,
  DiHtml5,
  DiCss3,
  DiPhp,
  DiGithub,
} from "react-icons/di";
import {
  
  SiSpringboot,
  SiFlask,
  SiTensorflow,
  SiPytorch,
} from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons"><DiPython /></Col>
        <Col xs={4} md={2} className="tech-icons"><DiJava /></Col>
        <Col xs={4} md={2} className="tech-icons"><DiJavascript1 /></Col>
        <Col xs={4} md={2} className="tech-icons"><DiHtml5 /></Col>
        <Col xs={4} md={2} className="tech-icons"><DiCss3 /></Col>
        <Col xs={4} md={2} className="tech-icons"><DiPhp /></Col>
        <Col xs={4} md={2} className="tech-icons"><SiSpringboot /></Col>
        <Col xs={4} md={2} className="tech-icons"><SiFlask /></Col>
        <Col xs={4} md={2} className="tech-icons"><SiTensorflow /></Col>
        <Col xs={4} md={2} className="tech-icons"><SiPytorch /></Col>
        <Col xs={4} md={2} className="tech-icons"><DiNodejs /></Col>
        <Col xs={4} md={2} className="tech-icons"><DiGithub /></Col>

    </Row>
  );
}

export default Techstack;
