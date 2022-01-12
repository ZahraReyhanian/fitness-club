import React from "react";
import styled from "styled-components";

export default function WaveBackground() {
  return (
    <Wrapper>
      <Background />
      <Wave src="/images/waves/ex-wave1.svg" style={{ top: "410px" }} />
      <Wave src="/images/waves/ex-wave2.svg" style={{ top: "626px" }} />
      <Wave src="/images/waves/ex-wave3.svg" style={{ top: "699px" }} />

      <BottomWave src="/images/waves/ex-wave4.svg" style={{ top: "798px" }} />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: relative;
`;

const Wave = styled.img`
  position: absolute;
  z-index: -1;
  width: 100%;
`;

const BottomWave = styled(Wave)`
  @media (prefers-color-scheme: dark) {
    content: url("/images/waves/hero-wave3-dark.svg");
  }
`;

const Background = styled.div`
  background: linear-gradient(200.44deg, #4316db 13.57%, #9076e7 98.38%);
  position: absolute;
  width: 100%;
  height: 1060px;
  z-index: -1;
  @media (max-width: 1010px) {
    height: 992px;
  }
  @media (min-width: 1440px) {
    height: 1160px;
  }
  @media (max-width: 768px) {
    height: 850px;
  }
`;

const MaskTop = styled.div`
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0.3) 0%,
    rgba(0, 0, 0, 0) 100%
  );
  position: absolute;
  width: 100%;
  height: 400px;
  z-index: -1;
`;

const MaskBottom = styled.div`
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 0.3) 100%
  );
  position: absolute;
  width: 100%;
  height: 400px;
  z-index: -1;
`;
