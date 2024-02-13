import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiLinux,
  SiMicrosoftazure,
  SiAmazonaws,
  SiVim,
  SiDocker,
  SiGit,
  SiJupyter,
  SiGooglecolab
} from "react-icons/si";
import { IoLogoVercel } from "react-icons/io5";
import { BiLogoNetlify } from "react-icons/bi";


function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {
        [
          <SiLinux/>,
          <SiGit/>,
          <IoLogoVercel />,
          <SiAmazonaws/>,
          <SiDocker/>,
          <SiGooglecolab/>,
          <BiLogoNetlify />,
        ].map(tool => 
            <Col xs={4} md={2} className="tech-icons">
              {tool}
          </Col>)
      }
    </Row>
  );
}

export default Toolstack;
