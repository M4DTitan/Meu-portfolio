import React from "react";
import { Col, Row } from "react-bootstrap";
import { SiFlutter } from "react-icons/si";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiPython,
  DiGit,
  DiDart,
  DiFirebase,
  DiMysql,
  DiLinux,
} from "react-icons/di";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <DiPython />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs />
      </Col>
      
      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <DiDart />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <DiFirebase />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <DiLinux />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
      <SiFlutter />
      </Col>
      
      <Col xs={4} md={2} className="tech-icons">
        <DiMysql />
      </Col>
      
    </Row>
  );
}

export default Techstack;
