import React, { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
import { H1, MediumText } from "../styles/TestStyles";
import { themes } from "../styles/ColorStyles";
import PurchaseButton from "../buttons/PurchaseButton";
import WaveBackground from "../backgrounds/WaveBackground";

import { Col, Row } from "react-bootstrap";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { getHome } from "../../api/api_home";

function HeroSection({ data }) {
  return (
    <>
      <Wrapper>
        <WaveBackground />
        <ContentWrapper>
          <TextWrapper md={5} sm={12}>
            <Title>
              Health Club
              <br /> and Fitness of <span>{data.gymName}</span>
            </Title>
            <Description>{data.gymText}</Description>
            <PurchaseButton title="Start Now!" />
          </TextWrapper>
          <ImgWrapper md={7} sm={12}>
            <img
              src={"http://localhost:8000/" + data.image.original}
              alt="home"
            />
          </ImgWrapper>
        </ContentWrapper>
      </Wrapper>
    </>
  );
}

export default HeroSection;

const animation = keyframes`
  0% { opacity: 0; transform: translateY(-10px); filter: blur(10px); }
  100% {opacity: 1; transform: translateY(0px); filter: blur(0px);}
`;

const Wrapper = styled.div`
  overflow: hidden;
`;
const ContentWrapper = styled(Row)`
  max-width: 1234px;
  margin: 0 auto;
  padding: 200px 30px;

  @media (max-width: 450px) {
    padding: 150px 20px 250px;
  }
`;

const TextWrapper = styled(Col)`
  max-width: 1234px;
  display: grid;
  gap: 30px;

  > * {
    opacity: 0;
    animation: ${animation} 1s forwards;

    :nth-child(1) {
      animation-delay: 0s;
    }
    :nth-child(2) {
      animation-delay: 0.2s;
    }
    :nth-child(3) {
      animation-delay: 0.4s;
    }
  }
`;
const Title = styled(H1)`
  color: ${themes.dark.text1};
  line-height: 80px;
  background: linear-gradient(180deg, #730040 0%, #301cbe 100%);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;

  span {
    background: linear-gradient(180deg, #ffd7ff 0%, #ffb6ff 100%);
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
  }

  @media (max-width: 914px) and (min-width: 768px) {
    font-size: 30px;
    font-weight: 700;
    line-height: 55px;
  }
`;

const Description = styled(MediumText)`
  @media (max-width: 914px) and (min-width: 768px) {
    font-size: 16px;
  }
`;

const ImgWrapper = styled(Col)`
  position: relative;
  max-width: 1234px;
  margin: 0 auto;
  padding: 0 2rem;
  img {
    width: 100%;
    margin-top: 2rem;
  }

  @media (max-width: 914px) and (min-width: 768px) {
    padding: 0;
  }
  @media (max-width: 760px) {
    transform: scale(0.9);
    padding: 0;
    img {
      width: 100%;
      margin-top: 88px;
    }
  }
  @media (max-width: 450px) {
    transform: scale(0.7);
  }
`;
