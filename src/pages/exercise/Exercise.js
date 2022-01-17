import React from "react";
import Layout from "../../components/layout/layout";
import ExerciseBackground from "../../components/backgrounds/ExerciseBackground";
import styled from "styled-components";
import EquipmentCard from "../../components/cards/EquipmentCard";
import { Col, Row } from "react-bootstrap";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Description from "./Description";
import { Checkbox } from "@material-ui/core";
import { Timer } from "@material-ui/icons";

const Exercise = () => {
  return (
    <Layout>
      <ExerciseContainer>
        <ExerciseBackground />
        <ContentWrapper>
          <ExerciseGifTitle md={12} sm={12}>
            <ExerciseGif>
              <img src="/images/exercise.gif" alt="exercise" />
            </ExerciseGif>
            <ExerciseTitle>
              <h1>Working on Treadmill</h1>
              <Timer /> 3 set - low level
            </ExerciseTitle>
          </ExerciseGifTitle>
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
        <Row>
          <Col>
            <CheckDone>
              <span className="text-success">Done</span>
              <Checkbox />
            </CheckDone>
          </Col>
        </Row>
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
const ExerciseGifTitle = styled(Col)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0px;

  margin: auto;
  width: 832.5px;
  height: 500px;
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
  margin-top: 5rem;
  margin-bottom: 3rem;
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

const ExerciseGif = styled.div``;

const ExerciseTitle = styled.div`
  padding-top: 2rem;
  color: #fff;
  text-align: center;
  h1 {
    padding-bottom: 1rem;
  }
`;

const CheckDone = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 10rem;
  span {
    font-weight: 600;
    font-size: 18px;
  }
`;
