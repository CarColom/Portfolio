import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import AppCraft from "../../Assets/Projects/AppCraft.png";
import Dog from "../../Assets/Projects/Dog.png";
import Poke from "../../Assets/Projects/Poke.png";
import Eco from "../../Assets/Projects/Eco (1).png";
import Ecome from "../../Assets/Projects/ecommerce.png";
import { useTranslation } from 'react-i18next'; // Importa useTranslation

function Projects() {
  const { t } = useTranslation(); // Inicializa useTranslation

  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          {t('projects.myRecentWorks')}
          <strong className="purple"> </strong>
        </h1>
        <p style={{ color: "white" }}>
          {t('projects.projectsDescription')}
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
        <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Ecome}
              isBlog={false}
              title={t('projects.EcomeTitle')}
              description={t('projects.EcomeDescription')}
              ghLink="https://github.com/CarColom/eCommerce"
              //demoLink=""
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={AppCraft}
              isBlog={false}
              title={t('projects.AppCraftTitle')}
              description={t('projects.AppCraftDescription')}
              ghLink="https://github.com/CarColom/agencia_marketing"
              //demoLink=""
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Eco}
              isBlog={false}
              title={t('projects.ecoWiseTitle')}
              description={t('projects.ecoWiseDescription')}
              ghLink="https://github.com/CarColom"
              demoLink="https://ecowise-web-site.vercel.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Dog}
              isBlog={false}
              title={t('projects.dogTitle')}
              description={t('projects.dogDescription')}
              ghLink="https://github.com/CarColom/Dogs"
              //demoLink=""              
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Poke}
              isBlog={false}
              title={t('projects.pokemonWorldTitle')}
              description={t('projects.pokemonWorldDescription')}
              ghLink="https://github.com/CarColom/PI-Pokemon"
              //demoLink=""
            />
          </Col>
        
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
