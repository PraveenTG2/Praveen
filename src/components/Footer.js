import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
  AiFillMail,
} from "react-icons/ai";

import { FaLinkedinIn } from "react-icons/fa";
import { BsTelegram } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();


  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4"/>

        <Col md="4" className="footer-copyright">
          <h3>Copyright © {year} Praveen </h3>
        </Col>

        <Col md="4" className="footer-body">
          <ul>
            <li className="social-icons">
              <a className="footer-social-icons"
                href="https://github.com/PraveenTG2"
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillGithub />
              </a>
            </li>

            <li className="social-icons">
              <a className="footer-social-icons"
                href="https://www.linkedin.com/in/praveen-kumar-k-b1299629a"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </a>
            </li>
                  
            <li className="social-icons">
              <a className="footer-social-icons"
                href="mailto:praveen06kp@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillMail />
              </a>
            </li>
                  
            <li className="social-icons">
              <a className="footer-social-icons"
                href="https://telegram.me/Crazy_Phoenix"
                target="_blank"
                rel="noopener noreferrer"
              >
                <BsTelegram />
              </a>
            </li>

            <li className="social-icons">
              <a className="footer-social-icons"
                href="https://www.instagram.com/phoenix__offl"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram />
              </a>
            </li>
                  
          </ul>
        </Col>
        <Col md="4" className="footer-body"/>
        
      </Row>
    </Container>
  );
}

export default Footer;
