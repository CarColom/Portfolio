import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiHtml5,
  DiCss3,
  DiBootstrap,
  DiPython,
  DiDjango,
  DiTrello
} from "react-icons/di";
import {
  SiPostgresql,
  SiRedux,
  SiTailwindcss,
  SiNextdotjs,
  SiDocker
} from "react-icons/si";




function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <CgCPlusPlus />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiPython />
      </Col> 
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <DiDjango />
    </Col> 
      <Col xs={4} md={2} className="tech-icons">
      <SiDocker />
    </Col> 
        <Col xs={4} md={2} className="tech-icons">
        <SiPostgresql />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiRedux />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
      </Col>
       <Col xs={4} md={2} className="tech-icons">
       <SiNextdotjs/>
     </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiTailwindcss/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiBootstrap/>
      </Col>
       <Col xs={4} md={2} className="tech-icons">
        <DiHtml5/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiCss3/>
      </Col>
        <Col xs={4} md={2} className="tech-icons">
        <DiTrello/>
      </Col>
     
    </Row>
  );
}

export default Techstack;
