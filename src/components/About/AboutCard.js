import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Carla Yamila Colom </span>
            from <span className="purple"> Roldán, Sta Fe, Argentina</span>
            <br />Graduated in Analyst Programmer and a Full Stack Developer.
            <br />
            My passion for programming is coupled with a keen interest in tackling challenges and creating innovative solutions.
            <br />
            <br /> I am currently seeking my first job in the technology field, aiming to join a place where I can expand my knowledge, acquire new skills, and enhance the ones I already possess. I'm a quick learner and will readily adapt to new technologies.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Crafts and design
            </li>
            <li className="about-activity">
              <ImPointRight /> To cook
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
