import { Timer } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";

export default function ExerciseCard(props) {
  const exercise = props.data;
  return (
    <Exercise key={exercise.id}>
      <ExerciseContent>
        <img src={exercise.image} alt="exercise" />
        <a href={exercise.link} className="exercise-link">
          {exercise.title}
        </a>
        <p className="exercise-desc">
          <Timer /> 3 set - low level
        </p>
      </ExerciseContent>
    </Exercise>
  );
}

const Exercise = styled.div`
  background-color: #fff;
  border-radius: 10px;
  filter: drop-shadow(0px 1px 3px rgba(0, 0, 0, 0.05))
    drop-shadow(0px 20px 40px rgba(73, 39, 172, 0.3));

  width: 100%;
  padding: 1rem;
  overflow: hidden;
`;

const ExerciseContent = styled.div`
  overflow: hidden;
  padding-bottom: 1rem;
  @media (max-width: 769px) {
    text-align: center;
  }
  img {
    width: 100%;
    transition: all 0.2s ease-in-out;
    padding-bottom: 1.6rem;
    height: 200px;

    &:hover {
      transform: scale(1.1);
    }

    @media (max-width: 1025px) {
      height: 180px;
    }
    @media (max-width: 450px) {
      height: 150px;
    }
  }
  .exercise-link {
    color: inherit;
    font-family: inherit;
    text-decoration: none;
    font-size: 24px;
    font-weight: bold;
    margin: 2rem 0;
    padding-bottom: 1rem;
    transition: all 0.4s ease-in-out;
    &:hover {
      color: #037fff;
    }
  }
  .exercise-desc {
    color: inherit;
    font-family: inherit;
    font-size: 15px;
    font-weight: 100;
    margin-top: 1rem;
  }
`;
