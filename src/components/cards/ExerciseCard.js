import React from "react"
import styled from "styled-components"
import { exerciseData } from "../data/exerciseData"

export default function ExerciseCard(props) {
  const exercise = props.data
  return (
    <Exercise key={exercise.id}>
      <ExerciseContent>
        <img src={exercise.image} alt="exercise" />
        <a href={exercise.link} className="exercise-link">
          {exercise.title}
        </a>
      </ExerciseContent>
    </Exercise>
  )
}

const Exercise = styled.div`
  background-color: #fff;
  width: 100%;
  padding: 1rem;
  overflow: hidden;
`

const ExerciseContent = styled.div`
  overflow: hidden;
  padding-bottom: 2rem;
  img {
    width: 100%;
    transition: all 0.2s ease-in-out;
    &:hover {
      transform: scale(1.1);
    }
    padding-bottom: 2rem;
    height: 23rem;

    @media (max-width: 1025px) {
      height: 15rem;
    }
    @media (max-width: 450px) {
      height: 23rem;
    }
  }
  .exercise-link {
    color: inherit;
    font-family: inherit;
    text-decoration: none;
    font-size: 2rem;
    margin: 2rem 0;
    padding-bottom: 2rem;
    transition: all 0.4s ease-in-out;
    font-weight: 300;
    &:hover {
      color: #037fff;
    }
  }
`
