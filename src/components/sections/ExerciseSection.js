import React from "react";
import styled from "styled-components";
import ExerciseCard from "../cards/ExerciseCard";
import { exerciseData } from "../data/exerciseData";
import { Container } from "../styles/GlobalStyles";
import TitleComponent from "../title/TitleComponent";

export default function ExerciseSection() {
  return (
    <Container>
      <TitleComponent
        title="Our Exercises"
        subtitle="exercise and necesary description"
      />
      <Wrapper>
        {exerciseData.map((exercise) => {
          return <ExerciseCard data={exercise} />;
        })}
      </Wrapper>
    </Container>
  );
}

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 2.5rem;
  margin: 80px 0 150px 0;

  @media (max-width: 1025px) {
    margin: 80px;
  }
  @media (max-width: 769px) {
    grid-template-columns: repeat(2, 1fr);
    margin: 60px 80px;
  }
  @media (max-width: 450px) {
    grid-template-columns: 1fr;
    margin: 50px 10px;
  }
`;
