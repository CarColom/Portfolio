import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import Rick from "../../Assets/Projects/Rick.png";
import Dog from "../../Assets/Projects/Dog.png";
import Poke from "../../Assets/Projects/Poke.png";
import Eco from "../../Assets/Projects/Eco (1).png";


function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Rick}
              isBlog={false}
              title="Rick and Morty"
              description="This is an initial project I carried out in the Henry Bootcamp, involving development of both the Front-End and Back-End. It includes pagination, styling, adding to favorites, creation, display, and deletion of content cards, routing, user creation, and CRUD (Create, Read, Update, Delete) requests, as well as the development of a relational database. The technologies used were Express.js, Sequelize.js, Node.js, PostgreSQL, React.js, Redux.js, and JavaScript."
              ghLink="https://github.com/CarColom/Rick-and-Morty"
              //demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Dog}
              isBlog={false}
              title="Dog"
              description="This is an individual project I carried out in the Henry Bootcamp, involving development of both the Front-End and Back-End. It includes pagination, filters, sorting, creation of new dogs, display, and deletion of content cards, routing, styling, and the development of a relational database. The technologies used were Express.js, Sequelize.js, Node.js, PostgreSQL, React.js, Redux.js, and JavaScript."
              ghLink="https://github.com/CarColom/Dogs"
              //demoLink=""              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Poke}
              isBlog={false}
              title="Pokémon world"
              description="This is an individual project I carried out in the Henry Bootcamp, involving development of both the Front-End and Back-End. It includes pagination, filters, sorting, creation of new dogs, display, and deletion of content cards, routing, styling, and the development of a relational database. The technologies used were Express.js, Sequelize.js, Node.js, PostgreSQL, React.js, Redux.js, and JavaScript."
              ghLink="https://github.com/CarColom/PI-Pokemon"
              //demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Eco}
              isBlog={false}
              title="ecoWise"
              description="This is a group project that we carried out in the Henry Bootcamp, where we developed an e-commerce platform offering sustainable products, from conception to implementation. The project encompassed design aspects, frontend and backend development, including integrated third-party authentication, payment gateway (Mercado Pago), combined filters, Cloudinary, local storage, reviews, favorites, email notifications, soft deletion, creation of new products, admin dashboard, display of content cards, routing, and the development of a relational database. This way, we created an attractive and user-friendly interface that highlights sustainability values.
              The technologies used were Express.js, Sequelize.js, Node.js, PostgreSQL, React.js, Redux.js, Vite, JavaScript, HTML, CSS, Tailwind, and Bootstrap."
              ghLink="https://github.com/CarColom"
              demoLink="https://ecowise-web-site.vercel.app/" 
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
