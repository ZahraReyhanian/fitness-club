import React, { useState } from "react";
import { FormControlLabel, Radio, RadioGroup } from "@material-ui/core";
import { Row, Col, Form, FormLabel, Button } from "react-bootstrap";
import Title from "./Title";
import styled from "styled-components";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { toast } from "react-toastify";
import { updateProfileSetting } from "../../api/api_home";

const ProfileSetting = () => {
  const [email, setEmail] = useState();
  const [name, setName] = useState();
  const [weight, setWeight] = useState();
  const [height, setHeight] = useState();
  const [age, setAge] = useState();
  const [gender, setGender] = useState();
  const [problem, setProblem] = useState();

  const handleProfile = () => {
    const user = {
      email: email,
      name: name,
      weight: weight,
      Height: height,
      age: age,
      gender: gender,
    };

    updateProfileSetting(user, (isOk, data) => {
      if (!isOk) return toast.error(data);

      const delayInMilliseconds = 1000; //1 second

      setTimeout(function () {
        toast.success("Successful!");
        localStorage.setItem("name", name);
        localStorage.setItem("email", email);
        window.location.reload();
      }, delayInMilliseconds);
    });
  };

  return (
    <PersonalWrapper>
      <Row>
        <Col lg={12} md={12} sm={12}>
          <Title title="Personal Setting" span="" />
        </Col>
      </Row>
      <AccountRow>
        <Col lg={12} md={12} sm={12}>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                placeholder="Enter Email"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                value={name}
                onChange={(e) => setName(e.target.value)}
                type="text"
                placeholder="Enter Name"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicWeight">
              <Form.Label>Weight</Form.Label>
              <Form.Control
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
                type="number"
                placeholder="Enter Weight"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicHeight">
              <Form.Label>Height</Form.Label>
              <Form.Control
                value={height}
                onChange={(e) => setHeight(e.target.value)}
                type="number"
                placeholder="Height"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicAge">
              <Form.Label>Age</Form.Label>
              <Form.Control
                value={age}
                onChange={(e) => setAge(e.target.value)}
                type="number"
                placeholder="Age"
              />
            </Form.Group>

            <FormLabel component="legend">Gender</FormLabel>
            <RadioGroup
              value={gender}
              onChange={(e) => setGender(e.target.value)}
              row
              aria-label="gender"
              name="row-radio-buttons-group"
            >
              <FormControlLabel
                value="female"
                control={<Radio />}
                label="Female"
              />
              <FormControlLabel value="male" control={<Radio />} label="Male" />
            </RadioGroup>

            <Form.Group className="mb-3" controlId="formBasicProblem">
              <Form.Label>Problem</Form.Label>
              <Form.Control
                value={problem}
                onChange={(e) => setProblem(e.target.value)}
                as="textarea"
                placeholder="Enter Problem if you have"
                rows={3}
              />
            </Form.Group>
            <SettingButton onClick={handleProfile}>Submit</SettingButton>
          </Form>
        </Col>
      </AccountRow>
    </PersonalWrapper>
  );
};

export default ProfileSetting;

const AccountRow = styled(Row)`
  margin-top: 2rem;
`;

const PersonalWrapper = styled.div`
  margin-top: 1rem;
`;

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
