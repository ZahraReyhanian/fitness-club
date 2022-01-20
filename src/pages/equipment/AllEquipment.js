import React, { useEffect, useState } from "react";
import styled from "styled-components";
import EquipmentCards from "../../components/cards/EquipmentCards";
import { exerciseData } from "../../components/data/exerciseData";
import Layout from "../../components/layout/layout";
import TitleComponent from "../../components/title/TitleComponent";

import { Container, Col, Row } from "react-bootstrap";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { getEquipment } from "../../api/api_home";

const AllEquipment = () => {
  const [equipments, setEquipments] = useState([]);

  useEffect(() => {
    getEquipment((isOk, data) => {
      if (!isOk) return alert(data.message);
      else {
        setEquipments(data.data.sportEquipment);
      }
    });
  }, []);

  return (
    <Layout>
      <Background>
        <ExContainer>
          <ExerciseTitle>
            <TitleComponent
              title="Equipments"
              subtitle="equipments you need and we provide for you"
            />
          </ExerciseTitle>
          <Wrapper>
            <Row>
              {equipments.map((equipment) => {
                return (
                  <Col lg={3} md={4} sm={12}>
                    <EquipmentCards data={equipment} />
                  </Col>
                );
              })}
            </Row>
          </Wrapper>
        </ExContainer>
      </Background>
    </Layout>
  );
};

export default AllEquipment;

const Background = styled.div`
  background: linear-gradient(180deg, #461adc 0%, #f2f6ff 100%);
`;

const ExContainer = styled(Container)`
  padding-top: 150px;
`;

const ExerciseTitle = styled.div`
  h2 {
    font-size: 51px;
    margin-bottom: 1rem;
  }
  h2,
  p {
    color: #fff;
  }
`;

const Wrapper = styled(Container)`
  margin-top: 5rem;
`;
