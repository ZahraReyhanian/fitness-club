import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { getExercises } from "../../api/api_home";
import ExerciseCard from "../../components/cards/ExerciseCard";
import Layout from "../../components/layout/layout";
import { Container } from "../../components/styles/GlobalStyles";
import TitleComponent from "../../components/title/TitleComponent";

const AllExercise = () => {
  const [exercises, setExercises] = useState([]);

  useEffect(() => {
    getExercises((isOk, data) => {
      if (!isOk) return alert(data.message);
      else {
        setExercises(data.data.exercise);
      }
    });
  }, []);

  if (!exercises) return "loading data ....";
  else
    return (
      <Layout>
        <Background>
          <ExContainer>
            <ExerciseTitle>
              <TitleComponent
                title="Your Exercises"
                subtitle="exercise and necesary description"
              />
            </ExerciseTitle>
            <Wrapper>
              {exercises.map((exercise) => {
                return <ExerciseCard data={exercise} />;
              })}
            </Wrapper>
          </ExContainer>
        </Background>
      </Layout>
    );
};

export default AllExercise;

const Background = styled.div`
  background: linear-gradient(180deg, #461adc 0%, #f2f6ff 100%);
`;

const ExContainer = styled(Container)`
  padding-top: 150px;
`;

const ExerciseTitle = styled.div`
  h2 {
    font-size: 51px;
    margin-bottom: 1rem;
  }
  h2,
  p {
    color: #fff;
  }
`;

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 2.5rem;
  margin: 80px 0 50px 0;

  @media (max-width: 1025px) {
    grid-template-columns: repeat(3, 1fr);
    margin: 60px 80px;
  }
  @media (max-width: 769px) {
    grid-template-columns: repeat(2, 1fr);
    margin: 60px 70px;
  }
  @media (max-width: 560px) {
    grid-template-columns: 1fr;
    margin: 50px 10px;
  }
`;
