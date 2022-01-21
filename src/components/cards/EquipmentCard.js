import React from "react";
import { Row, Col } from "react-bootstrap";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import styled from "styled-components";

const EquipmentCard = ({ name, image }) => {
  return (
    <CardWrapper>
      <Row>
        <Col md={6} sm={6}>
          <RightWrapper>
            <h6>Equipment</h6>
            <h4>{name}</h4>
          </RightWrapper>
        </Col>
        <Col md={6} sm={6}>
          <LeftWrapper>
            <img src="/images/equipments/download.png" alt="equipment image" />
          </LeftWrapper>
        </Col>
      </Row>
    </CardWrapper>
  );
};

export default EquipmentCard;

const CardWrapper = styled.div`
  padding: 20px;

  max-width: 704px;
  width: 100%;
  height: 255px;

  background: rgba(255, 255, 255, 0.6);
  border: 0.5px solid rgba(255, 255, 255, 0.6);
  box-sizing: border-box;
  box-shadow: 0px 50px 100px rgba(34, 79, 169, 0.3);
  backdrop-filter: blur(40px);

  border-radius: 20px;
`;

const RightWrapper = styled.div`
  position: absolute;
  top: 50%;
  transform: translate(0, -50%);
  padding: 0 4.5rem;
  h6 {
    font-weight: 600;
    color: #3913b8;
    font-size: 24px;
    padding-bottom: 1rem;
  }
  h4 {
    font-weight: 400;
    font-size: 28px;
    color: #000;
    text-transform: uppercase;
  }
  @media (max-width: 760px) {
    padding: 0 2.5rem;
  }
  @media (max-width: 450px) {
    padding: 0 1rem;
    h6 {
      font-size: 18px;
    }
    h4 {
      font-size: 22px;
    }
  }
`;

const LeftWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row-reverse;
  text-align: center;
  padding: 1rem 0;
  padding-right: 5.5rem;
  img {
    max-height: 196px;
  }
  @media (max-width: 760px) {
    transform: scale(0.9);
    padding-right: 1rem;
  }
  @media (max-width: 450px) {
    transform: scale(0.7);
    padding-right: 0;
  }
`;
