import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/brahim.jpg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiFillFacebook,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I fell in love with programming early on, and throughout my journey, I’ve gained strong skills in several programming languages...
              <br />
              <br />I am fluent in classics like
              <i>
                <b className="purple"> C, C++, Python, Javascript and Java. </b>
              </i>
              <br />
              <br />
              I also have solid experience in web development

              <i>
                <b className="purple"> (HTML, CSS, PHP)  </b>
              </i>
               and mobile development using tools like
              <i>
                <b className="purple"> Flutter, Android Studio, and Flask.  </b>
              </i>
              <br />
              <br />
              Beyond that, I’ve been exploring more advanced fields such as <b className="purple">Artificial Intelligence, Embedded Systems</b>, and <b className="purple">the Internet of Things (IoT)</b>, which I’ve applied through mini-projects and hands-on work.
              
              <br />
              <br />
              I’m curious, motivated, and always ready to learn something new.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/brahimBougacha"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/ibrahim-bougacha-529424299/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.facebook.com/ibrahim.bougacha.50"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillFacebook />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
