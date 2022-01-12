import React from "react";
import styled from "styled-components";
import { BodyMain, H3 } from "../../components/styles/TestStyles";

const Description = ({ title, text }) => {
  return (
    <Wrapper>
      <H3>{title}</H3>
      <BodyMain>{text}</BodyMain>
    </Wrapper>
  );
};

export default Description;

const Wrapper = styled.div`
  margin-bottom: 3.4rem;
`;
