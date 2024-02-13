import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiRust,
  DiSpark,
} from "react-icons/di";
import { 
  SiCplusplus,
  SiJava,
  SiPytorch, 
  SiTensorflow, 
  SiFirebase, 
  SiQiskit, 
  SiScikitlearn,
  SiGnubash
} from "react-icons/si";
import { FaHtml5 } from "react-icons/fa";
import { SiCss3 } from "react-icons/si";
import { FaWordpress } from "react-icons/fa";
import { FaLinux } from "react-icons/fa";



function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {
        [
          <DiPython />,
          <DiJavascript1 />,
          <FaHtml5 />,
          <SiCss3 />,
          <DiNodejs />,
          <DiReact />,
          <DiMongodb />,      
          <FaWordpress />,
          <FaLinux />,
        ].map(tool => 
          <Col xs={4} md={2} className="tech-icons">
            {tool}
          </Col>)
      }
    </Row>
  );
}

export default Techstack;
