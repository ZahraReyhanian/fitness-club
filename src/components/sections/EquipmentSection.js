import React from "react";
import styled from "styled-components";
import TitleComponent from "../title/TitleComponent";
import EquipmentCards from "../../components/cards/EquipmentCards";
import { exerciseData } from "../../components/data/exerciseData";
import Layout from "../../components/layout/layout";

import { Container, Col, Row } from "react-bootstrap";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import PurchaseButton from "../buttons/PurchaseButton";

const EquipmentSection = () => {
  return (
    <EquipmentContainer>
      <Container>
        <TitleComponent
          title="Equipments"
          subtitle="equipments you need and we provide for you"
        />
        <Wrapper>
          <Row>
            {exerciseData.map((exercise) => {
              return (
                <Col lg={3} md={3} sm={6}>
                  <EquipmentCards />
                </Col>
              );
            })}
          </Row>
        </Wrapper>
        <MoreEquipment>
          <PurchaseButton title="see more" link="equipments" />
        </MoreEquipment>
      </Container>
    </EquipmentContainer>
  );
};

export default EquipmentSection;

const EquipmentContainer = styled.div`
  background: linear-gradient(180deg, #e6e9fa 0%, #f2f6ff 100%);
  padding-top: 70px;
  padding-bottom: 150px;
  margin: 0;
`;

const Wrapper = styled(Container)`
  margin-top: 5rem;
`;

const MoreEquipment = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 4rem;
`;
