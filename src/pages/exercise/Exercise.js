import React, { useEffect, useState } from "react";
import Layout from "../../components/layout/layout";
import ExerciseBackground from "../../components/backgrounds/ExerciseBackground";
import styled from "styled-components";
import EquipmentCard from "../../components/cards/EquipmentCard";
import { Col, Row } from "react-bootstrap";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Description from "./Description";
import { Checkbox } from "@material-ui/core";
import { Timer } from "@material-ui/icons";
import { useLocation, useParams } from "react-router-dom";
import { getExercise } from "../../api/api_home";

const Exercise = () => {
  const [exercise, setExercise] = useState();
  const [equipment, setEquipment] = useState({
    equipmentName: "name",
    image: "image",
  });

  const location = useLocation();
  useEffect(() => {
    const id = location.pathname.substring(10);
    getExercise(id, (isOk, data) => {
      if (!isOk) return alert(data.message);
      else {
        setExercise(data.data.exercise);
        setEquipment(data.data.sportsequipment);
      }
    });
  }, [location]);

  if (!exercise) return "loading data ...";
  else console.log(exercise);
  return (
    <Layout>
      <ExerciseContainer>
        <ExerciseBackground />
        <ContentWrapper>
          <ExerciseGifTitle md={12} sm={12}>
            <ExerciseGif>
              <img
                src={"http://localhost:8000//" + exercise.videoURL}
                alt="exercise"
              />
            </ExerciseGif>
            <ExerciseTitle>
              <h1>{exercise.exerciseName}</h1>
              <Timer />{" "}
              {exercise.set !== "0"
                ? exercise.set + " set " + exercise.repeat + " times "
                : exercise.exerciseTime + " min"}{" "}
              - {exercise.level} level
            </ExerciseTitle>
          </ExerciseGifTitle>
        </ContentWrapper>
        <EquipmentCardSection>
          <CardCol md={12} sm={12}>
            <EquipmentCard
              name={equipment.equipmentName}
              image={equipment.image}
            />
          </CardCol>
        </EquipmentCardSection>
        <TextWrapper>
          <TextContainer>
            <Description
              title={"Description"}
              text={exercise.exerciseDescription}
            />
            <Description title={"Tip"} text={exercise.tip} />
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
