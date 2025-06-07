import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi everyone! My name is <span className="purple">Ibrahim Bougacha </span>
            from <span className="purple"> Sfax, Tunisia.</span>
            <br />
           I’m currently a second-year Computer Engineering student at the National Engineering School of Sfax (ENIS).
            <br />
            I obtained my Mathematics Baccalaureate in 2021, followed by two years of preparatory studies at the Faculty of Sciences of Sfax, where I built a solid foundation in mathematics, physics, and computer science.
            <br />
            <br />
            Beyond coding, I have a variety of interests that keep me motivated and balanced I enjoy:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Sports
            </li>
            <li className="about-activity">
              <ImPointRight /> watching videos
            </li>
          </ul>

          <p style={{ textAlign: "justify" }}>
            I'm passionate about innovation and always eager to learn new things  and grow through new experiences.

          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
