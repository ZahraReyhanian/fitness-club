import React from "react";
import { Row, Col } from "react-bootstrap";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import styled from "styled-components";
import AvailableIcon from "@material-ui/icons/EventAvailable";

const EquipmentCards = () => {
  return (
    <CardWrapper>
      <Row>
        <Col md={12} sm={12}>
          <ImageWrapper>
            <img src="images/equipments/download.png" alt="equipment image" />
          </ImageWrapper>
          <TitleWrapper>
            <h5>Treadmill</h5>
            <p className="text-success">
              <AvailableIcon />
              <span>Available</span>
            </p>
          </TitleWrapper>
        </Col>
      </Row>
    </CardWrapper>
  );
};

export default EquipmentCards;

const CardWrapper = styled.div`
  padding: 1.5rem 1rem;

  background: rgba(255, 255, 255, 0.6);
  border: 0.5px solid rgba(255, 255, 255, 0.6);
  box-sizing: border-box;
  box-shadow: 0px 50px 100px rgba(34, 79, 169, 0.3);
  backdrop-filter: blur(40px);

  border-radius: 20px;
  margin-bottom: 2rem;
`;

const ImageWrapper = styled.div`
  padding: 1rem;
  display: flex;
  justify-content: center;

  img {
    width: 100%;
    max-width: 200px;
    transition: all 0.2s ease-in-out;

    &:hover {
      transform: scale(1.1);
    }
  }
`;

const TitleWrapper = styled.div`
  text-align: center;

  h5 {
    font-size: 18px;
    padding-top: 1rem;
    text-transform: uppercase;
  }

  span {
    font-size: 15px;
    padding-left: 0.3rem;
  }
`;
