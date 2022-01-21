import React from "react";
import styled from "styled-components";
import PurchaseButton from "../buttons/PurchaseButton";
import ExerciseCard from "../cards/ExerciseCard";
import { Container } from "../styles/GlobalStyles";
import TitleComponent from "../title/TitleComponent";

export default function ExerciseSection({ data }) {
  if (!data) return "loading data ...";
  else console.log(data);
  return (
    <Container>
      <TitleComponent
        title="Your Exercises"
        subtitle="exercise and necesary description"
      />
      <Wrapper>
        {data.map((exercise) => {
          return <ExerciseCard data={exercise} />;
        })}
      </Wrapper>
      <MoreExercise>
        <PurchaseButton title="see more" link="exercises" />
      </MoreExercise>
    </Container>
  );
}

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

const MoreExercise = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 150px;
`;
