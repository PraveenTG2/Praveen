import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import portfolio from "../../assets/Projects/portfolio.png";

import { useTranslation } from "react-i18next";

function Projects() {
  const { t } = useTranslation();
  
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          {t('ProjHeader')} <strong className="green">{t('Works')} </strong>
        </h1>
        <p className="text">{t('ProjSubtitle')}</p>

        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={portfolio}
              isBlog={false}
              title={t('ThisWebsite')}
              description={t('Proj4')}
              link="https://github.com/PraveenTG2/Praveen"
            />
          </Col>         
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
