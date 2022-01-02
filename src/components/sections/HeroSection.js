import React from "react";
import styled, { keyframes } from "styled-components";
import { H1, MediumText } from "../styles/TestStyles";
import { themes } from "../styles/ColorStyles";
import PurchaseButton from "../buttons/PurchaseButton";
import WaveBackground from "../backgrounds/WaveBackground";

function HeroSection() {
  return (
    <Wrapper>
      <WaveBackground />
      <ContentWrapper>
        <TextWrapper>
          <Title>
            Health Club
            <br /> and Fitness of <span>Energy</span>
          </Title>
          <Description>
            oining a health club, gym, or fitness studio is the first step to
            improving your health, and IHRSA—the fitness industry’s trade
            association—knows finding the right facility is important. And we’re
            here to help you access free online workouts during a time when many
            clubs are closed. Here, you’ll discover all the resources you need
            to select the IHRSA-member club that fits your lifestyle.
          </Description>
          <PurchaseButton title="Start Now!" />
        </TextWrapper>
        <ImgWrapper>
          <img src="/images/home/home.png" alt="home" />
        </ImgWrapper>
      </ContentWrapper>
    </Wrapper>
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
const ContentWrapper = styled.div`
  max-width: 1234px;
  margin: 0 auto;
  padding: 200px 30px;
  display: grid;
  grid-template-columns: 457px auto;
  grid-gap: 10px;

  @media (max-width: 450px) {
    grid-template-columns: auto;
    gap: 60px;
    padding: 150px 20px 250px;
  }
`;

const TextWrapper = styled.div`
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
`;

const Description = styled(MediumText)``;

const ImgWrapper = styled.div`
  position: relative;
  max-width: 1234px;
  margin: 0 auto;
  padding: 0 0 0 155px;

  @media (max-width: 760px) {
    transform: scale(0.9);
    transform-origin: top left;
  }
  @media (max-width: 450px) {
    transform: scale(0.7);
    padding: 0;
  }
`;
