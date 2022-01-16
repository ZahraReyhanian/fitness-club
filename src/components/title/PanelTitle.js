import React from "react";
import styled from "styled-components";

const PanelTitle = ({ title, span }) => {
  return (
    <TItleWrapper>
      <h3>
        {title}
        <span>{span}</span>
      </h3>
    </TItleWrapper>
  );
};

export default PanelTitle;

const TItleWrapper = styled.div`
  text-transform: uppercase;
  font-size: 2rem;
  position: relative;
  padding-bottom: 1rem;
  letter-spacing: 3px;
  &::before {
    content: "";
    bottom: 0;
    position: absolute;
    left: 0;
    width: 6rem;
    height: 0.4rem;
    background-color: #0381ff38;
    border-radius: 50px;
  }
  &::after {
    content: "";
    bottom: 0;
    position: absolute;
    left: 0;
    width: 3rem;
    height: 0.4rem;
    background-color: #037fff;
    border-radius: 50px;
  }
  span {
    position: absolute;
    top: 15%;
    left: 0;
    font-size: 5rem;
    color: #037fff;
    opacity: 0.07;
  }
`;
