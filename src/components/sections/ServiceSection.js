import React from "react";
import styled from "styled-components";
import ServiceCard from "../cards/ServiceCard";
import { serviceData } from "../data/serviceData";
import { Container } from "../styles/GlobalStyles";
import TitleComponent from "../title/TitleComponent";

const ServiceSection = () => {
  return (
    <ServiceContainer>
      <Container>
        <TitleComponent title="Our Services" />
        <ServiceRow>
          {serviceData.map((service) => {
            return (
              <ServiceColumn>
                <ServiceCard data={service} />
              </ServiceColumn>
            );
          })}
        </ServiceRow>
      </Container>
    </ServiceContainer>
  );
};

export default ServiceSection;

const ServiceContainer = styled.div`
  background: linear-gradient(180deg, #e6e9fa 0%, #f2f6ff 100%);
  padding-top: 70px;
  padding-bottom: 150px;
  margin: 0;
`;

export const ServiceRow = styled.div`
  padding-top: 50px;
  display: flex;
  margin: 0 -15px -15px -15px;
  flex-wrap: wrap;
  align-items: center;
  flex-direction: ${({ imgStart }) => (imgStart ? "row-reverse" : "row")};
`;

export const ServiceColumn = styled.div`
  margin-bottom: 15px;
  padding-right: 15px;
  padding-left: 15px;
  flex: 1;
  max-width: 33.33%;
  flex-basis: 33.33%;

  @media screen and (max-width: 768px) {
    max-width: 100%;
    flex-basis: 100%;
    display: flex;
    justify-content: center;
  }
`;
