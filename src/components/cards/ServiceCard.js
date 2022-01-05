import React from "react";
import styled from "styled-components";
import { H3 } from "../styles/TestStyles";

const ServiceCard = (props) => {
  const service = props.data;
  return (
    <Service imgUrl={service.image}>
      <ServiceContent>
        <ServiceDetail>{service.title}</ServiceDetail>
      </ServiceContent>
    </Service>
  );
};

export default ServiceCard;

const Service = styled.div`
  border-radius: 30px;
  height: 400px;
  width: 100%;
  background: black;
  overflow: hidden;
  background: #c33764; /* fallback colour. Make sure this is just one solid colour. */
  background: -webkit-linear-gradient(
      rgba(29, 38, 113, 0.5),
      rgba(195, 55, 100, 0.5)
    ),
    url(${({ imgUrl }) => imgUrl});
  background: linear-gradient(rgba(29, 38, 113, 0.5), rgba(195, 55, 100, 0.5)),
    url(${({ imgUrl }) => imgUrl});
  background-size: cover;
  background-repeat: no-repeat;

  @media (max-width: 769px) {
    border-radius: 20px;
  }
`;
const ServiceContent = styled.div`
  margin-top: 330px;
  padding: 0 30px;
`;

const ServiceDetail = styled(H3)`
  font-weight: 100;
  color: #fff;
  transition: 0.2s ease-out;

  &:hover {
    color: #3913b8;
    cursor: context-menu;
  }
`;
