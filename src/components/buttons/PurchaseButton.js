import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Caption2 } from "../styles/TestStyles";

export default function PurchaseButton({ title }) {
  return (
    <Link to="/page-2">
      <Wrapper>
        <Title>{title || "Get Pro Access"}</Title>
      </Wrapper>
    </Link>
  );
}

const Wrapper = styled.div`
  padding: 21px 12px;
  width: 280px;
  height: 65px;
  background: linear-gradient(180deg, #ffffff 0%, #d9dfff 100%);
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.1),
    0px 20px 40px rgba(23, 0, 102, 0.2),
    inset 0px 0px 0px 0.5px rgba(255, 255, 255, 0.5);
  border-radius: 20px;
  transition: 1s 0.2s cubic-bezier(0.075, 0.82, 0.165, 1);

  :hover {
    box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.1),
      0px 30px 60px rgba(23, 0, 102, 0.5),
      inset 0px 0px 0px 0.5px rgba(255, 255, 255, 0.5);
    transform: translateY(-3px);
  }
`;

const Title = styled(Caption2)`
  color: black;
  text-align: center;
`;
