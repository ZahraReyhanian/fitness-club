import React from "react";
import styled from "styled-components";
import { Col, Container, Row, ProgressBar } from "react-bootstrap";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { H2 } from "../../components/styles/TestStyles";
import PieProgress from "./PieProgress";
import Title from "./Title";

const Dashboard = ({ user, student, BMI, progress }) => {
  return (
    <DashboardWrapper>
      <Container className={"mt-3"}>
        <Row>
          <DashboardColUserName lg={6} md={7} sm={6}>
            <UserNameTop>
              <H2>Hi, {user.name}</H2>
              <span>Keep your progress</span>
            </UserNameTop>
            <UserBMI>
              BMI
              <ProgressBar now={BMI} label={`${BMI}%`} />
            </UserBMI>
          </DashboardColUserName>
          <DashboardColProgPie lg={6} md={5} sm={6}>
            <PieProgress value={progress} />
            Your Progress
          </DashboardColProgPie>
        </Row>
        <InfoSection>
          <Col lg={12}>
            <Title title={"Your Information"} span={"Your Information"} />
          </Col>
          <InfoWrapper>
            <InfoLeft lg={4} md={4} sm={6}>
              <p>Full Name</p>
              <p>Gender</p>
              <p>Age</p>
              <p>Weight</p>
              <p>Height</p>
              <p>Problem</p>
            </InfoLeft>
            <InfoRight lg={4} md={4} sm={6}>
              <p>: {user.name}</p>
              <p>: {student.gender}</p>
              <p>: {student.age == 0 ? "unset" : student.age}</p>
              <p>: {student.weight == 0 ? "unset" : student.weight + "KG"}</p>
              <p>: {student.Height == 0 ? "unset" : student.Height + "cm"}</p>
              <p>
                :{" "}
                {student.sick === "false"
                  ? "nothing"
                  : student.medicalSpecifications}
              </p>
            </InfoRight>
          </InfoWrapper>
        </InfoSection>
      </Container>
    </DashboardWrapper>
  );
};

export default Dashboard;

const DashboardWrapper = styled.div``;

const DashboardColUserName = styled(Col)`
  margin-top: 1rem;

  h2 {
    margin-bottom: 0.6rem;
  }
  span {
    font-size: 18px;
    font-weight: lighter;
  }
`;

const DashboardColProgPie = styled(Col)`
  margin-top: 0.5rem;
  text-align: center;
  @media (min-width: 576px) {
    margin-top: 1rem;
  }
`;

const InfoSection = styled(Row)`
  margin: 7rem 0 0 0;
`;
const InfoWrapper = styled(Row)`
  margin: 2.5rem 0 4rem 0;
`;

const InfoLeft = styled(Col)``;
const InfoRight = styled(Col)``;
const UserNameTop = styled.div``;
const UserBMI = styled.div`
  padding-top: 3.5rem;
`;
