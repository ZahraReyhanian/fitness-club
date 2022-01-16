import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";

const NotFound = () => {
  return (
    <Container>
      <Row>
        <Col>
          <h1>404</h1>
          <h3>Not Found !</h3>
        </Col>
      </Row>
    </Container>
  );
};

export default NotFound;
