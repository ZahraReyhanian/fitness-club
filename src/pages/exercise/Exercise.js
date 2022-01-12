import React from "react";
import Layout from "../../components/layout/layout";
import ExerciseBackground from "../../components/backgrounds/ExerciseBackground";
import styled from "styled-components";
import EquipmentCard from "../../components/cards/EquipmentCard";

import { Col, Row } from "react-bootstrap";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Description from "./Description";

const Exercise = () => {
  return (
    <Layout>
      <ExerciseContainer>
        <ExerciseBackground />
        <ContentWrapper>
          <ExerciseVideoTitle md={12} sm={12}></ExerciseVideoTitle>
        </ContentWrapper>
        <EquipmentCardSection>
          <CardCol md={12} sm={12}>
            <EquipmentCard />
          </CardCol>
        </EquipmentCardSection>
        <TextWrapper>
          <TextContainer>
            <Description
              title={"Description"}
              text={
                "Cardio exercising with treadmill walk helps to lose weight or just warm up before the workout."
              }
            />
            <Description
              title={"Tip"}
              text={
                "Take your time on the treadmill and be patient for good cardio."
              }
            />
          </TextContainer>
        </TextWrapper>
      </ExerciseContainer>
    </Layout>
  );
};

export default Exercise;

const ExerciseContainer = styled.div`
  overflow: hidden;
`;

const ContentWrapper = styled(Row)`
  max-width: 1234px;
  margin: 0 auto;
  padding: 150px 30px;
`;
const ExerciseVideoTitle = styled(Col)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0px;

  margin: auto;
  width: 832.5px;
  height: 500px;

  background-color: #fff;
`;

const EquipmentCardSection = styled(Row)`
  margin: auto;
  padding: 0 230px;
  @media (min-width: 1200px) {
    padding: 0 300px;
  }
  @media (min-width: 1111px) {
    padding: 0 200px;
  }
  @media (max-width: 1024px) {
    padding: 0 100px;
  }
  @media (max-width: 769px) {
    padding: 0;
  }
`;

const CardCol = styled(Col)`
  display: flex;
  justify-content: center;
`;

const TextWrapper = styled.div`
  margin: auto;
  margin-top: 180px;
  margin-bottom: 150px;
  max-width: 704px;
  padding: 0 1rem;

  @media (max-width: 769px) {
    margin-top: 130px;
  }
  @media (max-width: 560px) {
    margin-top: 100px;
  }
`;

const TextContainer = styled.div``;
