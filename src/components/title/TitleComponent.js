import React from "react";
import styled from "styled-components";
import { H2, MediumText } from "../styles/TestStyles";

const TitleComponent = ({ title, subtitle }) => {
  return (
    <TitleWrapper>
      <Title>{title}</Title>
      <Subtitle>{subtitle}</Subtitle>
    </TitleWrapper>
  );
};

export default TitleComponent;

const TitleWrapper = styled.div`
  text-align: center;
`;

const Title = styled(H2)``;

const Subtitle = styled(MediumText)`
  margin-top: 10px;
`;
