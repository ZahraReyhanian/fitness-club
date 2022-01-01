import React from "react"
import styled from "styled-components"
import ExerciseCard from "../cards/ExerciseCard"
import { exerciseData } from "../data/exerciseData"

export default function ExerciseSection() {
  return (
    <Wrapper>
      {exerciseData.map(exercise => {
        return <ExerciseCard data={exercise} />
      })}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 2.5rem;
  margin: 80px 180px;

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
`
