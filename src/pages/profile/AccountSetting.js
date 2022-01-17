import React from "react";
import { Row, Col, Form, Button } from "react-bootstrap";
import Title from "./Title";
import styled from "styled-components";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";

const AccountSetting = () => {
  return (
    <AccountWrapper>
      <Row>
        <Col lg={12} md={12} sm={12}>
          <Title title="Account Setting" span="" />
        </Col>
      </Row>
      <AccountRow>
        <Col lg={12} md={12} sm={12}>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <SettingButton>Submit</SettingButton>
          </Form>
        </Col>
      </AccountRow>
    </AccountWrapper>
  );
};

export default AccountSetting;

const AccountRow = styled(Row)`
  margin-top: 2rem;
`;

const AccountWrapper = styled.div``;

const SettingButton = styled(Button)`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px 80px;

  width: 120px;
  height: 44px;

  background: linear-gradient(91.4deg, #2fb8ff 0%, #9eecd9 100%);
  box-shadow: 0px 20px 40px rgba(147, 231, 221, 0.3);
  border: none;
  border-radius: 30px;
  color: #0e435c;
  transition: all 0.5s ease-in-out;

  &:hover {
    box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.1),
      0px 30px 60px rgba(23, 0, 102, 0.5),
      inset 0px 0px 0px 0.5px rgba(255, 255, 255, 0.5);
    transform: translateY(-1px);
  }
`;
