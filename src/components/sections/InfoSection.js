import React from "react";
import {
  InfoSec,
  InfoRow,
  InfoColumn,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  ImgWrapper,
  Img,
} from "./InfoSection.elements";
import { Button, Container } from "../styles/GlobalStyles";
import { Link } from "react-router-dom";
import WaveBackground from "../backgrounds/WaveBackground";

const InfoSection = ({
  lightBg,
  bgUrl,
  imgStart,
  lightTopLine,
  lightText,
  lightTextDesc,
  buttonLable,
  description,
  headLine,
  topLine,
  primary,
  img,
  alt,
  start,
}) => {
  return (
    <>
      {/* <WaveBackground /> */}
      <InfoSec lightBg={lightBg} bgUrl={bgUrl}>
        <Container>
          <InfoRow imgStart={imgStart}>
            <InfoColumn>
              <TextWrapper>
                <TopLine lightTopLine={lightTopLine}>{topLine}</TopLine>
                <Heading lightText={lightText}>{headLine}</Heading>
                <Subtitle lightTextDesc={lightTextDesc}>{description}</Subtitle>
                <Link to="">
                  <Button big fontBig primary={primary}>
                    {buttonLable}
                  </Button>
                </Link>
              </TextWrapper>
            </InfoColumn>
            <InfoColumn>
              <ImgWrapper start={start}>
                <Img src={img} alt={alt} />
              </ImgWrapper>
            </InfoColumn>
          </InfoRow>
        </Container>
      </InfoSec>
    </>
  );
};

export default InfoSection;
