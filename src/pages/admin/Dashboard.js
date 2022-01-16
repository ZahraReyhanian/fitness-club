import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import styled from "styled-components";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import PanelTitle from "../../components/title/PanelTitle";

const Dashboard = () => {
  return (
    <Wrapper>
      <Container>
        <Row>
          <Col lg={12} md={12} sm={12}>
            <PanelTitle title={"Admin Panel Dashboard"} />
          </Col>
        </Row>
        <Row>
          <Col>
            <WelcomeMessage>Welcome !</WelcomeMessage>
          </Col>
        </Row>
      </Container>
    </Wrapper>
  );
};

export default Dashboard;

const Wrapper = styled.div``;

const WelcomeMessage = styled.h4`
  margin-top: 2rem;
`;
