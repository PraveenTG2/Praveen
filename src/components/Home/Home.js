import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../assets/home.svg";
import Particle from "../Particle";
import Type from "./Type";
import { useTranslation } from "react-i18next";
import Home2 from "./Home2";

function Home() {
  const { t } = useTranslation();

  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                {t('Greeting')} <span className="wave" role="img" aria-labelledby="wave">👋🏻</span>
              </h1>

              <h1 className="heading-name">
                {t('Im')}
                <strong className="main-name"> Praveen Kumar</strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <img src={homeLogo} alt="home pic" className="img-fluid" />
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />
    </section>
  );
}

export default Home;
