import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { Button, Col, Container, Row, Form, FormLabel } from "react-bootstrap";
import styled from "styled-components";
import "../../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import PanelTitle from "../../../components/title/PanelTitle";
import { FormControlLabel, Radio, RadioGroup } from "@material-ui/core";
import {
  createExercise,
  getEditExercise,
  updateExercise,
} from "../../../api/admin/exercise_api";
import AsyncSelect from "react-select/async";
import { getAxiosInstanceAuth } from "../../../api/api";
import { useLocation, useParams } from "react-router-dom";

const ExerciseCreate = () => {
  const input = React.useRef();
  const inputFile = React.useRef();
  const inputFile2 = React.useRef();

  const [exerciseName, setExerciseName] = useState();
  const [exerciseDescription, setExerciseDescription] = useState();
  const [setNumber, setSetNumber] = useState(0);
  const [repeat, setRepeat] = useState(0);
  const [exercisetime, setExercisetime] = useState(0);
  const [level, setLevel] = useState();
  const [tip, setTip] = useState();
  const [gender, setGender] = useState();

  const [SP, setSP] = useState();

  const [imageFile, setImageFile] = useState();
  const [imagePath, setImagePath] = useState();

  const [videoURLFile, setVideoURLFile] = useState();
  const [videoURLPath, setVideoURLPath] = useState();

  const [selectedValue, setSelectedValue] = useState(null);

  const { id } = useParams();

  const location = useLocation();
  useEffect(() => {
    getEditExercise(id, (isOk, data) => {
      if (!isOk) return alert(data.message);
      else {
        setExerciseName(data.exerciseName);
        setExerciseDescription(data.exerciseDescription);
        setSetNumber(data.set);
        setRepeat(data.repeat);
        setExercisetime(data.exerciseTime);
        setLevel(data.level);
        setTip(data.tip);
        setGender(data.gender);
        setSP(data.sportsequipment);
        setSelectedValue(data.sportsequipment);
        setVideoURLPath("http://localhost:8000//" + data.videoURL);
        setImagePath("http://localhost:8000//" + data.image);
        console.log(data);
      }
    });
  }, [location]);

  // handle input change event
  const handleInputChange = (value) => {
    setSP(value);
  };

  // handle selection
  const handleChange = (value) => {
    setSelectedValue(value);
  };

  const fetchData = () => {
    return getAxiosInstanceAuth()
      .get(
        "/admin/sportsEquipment?api_token=" +
          localStorage.getItem("x-auth-token")
      )
      .then((response) => {
        const dataRes = response.data.data.SP.docs;
        return dataRes;
      });
  };

  const validateData = (exercise) => {
    if (!exercise.exerciseName) return "Enter Name";
    if (!exercise.exerciseDescription) return "Enter Description";
    if (!exercise.level) return "Enter Level";
    if (!exercise.gender) return "Enter Gender";
    if (!exercise.tip) return "Enter Tip";
  };

  const onChangeImg = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      setImageFile(e.target.files[0]);

      const reader = new FileReader();
      reader.onload = (e) => {
        setImagePath(e.target.result);
      };
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  const onChangeVideo = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      setVideoURLFile(e.target.files[0]);

      const reader = new FileReader();
      reader.onload = (e) => {
        setVideoURLPath(e.target.result);
      };
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  const handleCreate = () => {
    const exercise = {
      exerciseName: exerciseName,
      exerciseDescription: exerciseDescription,
      set: setNumber,
      repeat: repeat,
      exerciseTime: exercisetime,
      level: level,
      tip: tip,
      gender: gender,
      image: imageFile,
      SP: SP,
    };
    console.log(exercise);
    const error = validateData(exercise);
    if (error) return toast.warn(error);

    const formData = new FormData();
    formData.append("exerciseName", exerciseName);
    formData.append("exerciseDescription", exerciseDescription);
    formData.append("set", setNumber);
    formData.append("repeat", repeat);
    formData.append("exerciseTime", exercisetime);
    formData.append("level", level);
    formData.append("tip", tip);
    formData.append("gender", gender);
    formData.append("SP", SP);
    formData.append("image", imageFile);
    formData.append("videoURL", videoURLFile);

    console.log(exercise);

    updateExercise(id, formData, (isOK, data) => {
      if (isOK) {
        toast.success("Successful");
      } else toast.error(data);
    });
  };

  return (
    <GymWrapper>
      <Container mt={3}>
        <Row>
          <Col md={12} sm={12}>
            <PanelTitle title={"Exercise Edit"} />
          </Col>
        </Row>
        <FormRow>
          <Col mt={2} md={12} sm={12}>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicName">
                <FormLabel component="legend">Name</FormLabel>
                <Form.Control
                  value={exerciseName}
                  onChange={(e) => setExerciseName(e.target.value)}
                  type="text"
                  placeholder="Enter name"
                ></Form.Control>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicSet">
                <FormLabel component="legend">Number of set</FormLabel>
                <Form.Control
                  value={setNumber}
                  onChange={(e) => setSetNumber(e.target.value)}
                  type="number"
                  placeholder="Enter number of set"
                ></Form.Control>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicRepeat">
                <FormLabel component="legend">Repeat</FormLabel>
                <Form.Control
                  value={repeat}
                  onChange={(e) => setRepeat(e.target.value)}
                  type="number"
                  placeholder="Enter number of repeat"
                ></Form.Control>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicTime">
                <FormLabel component="legend">Time</FormLabel>
                <Form.Control
                  value={exercisetime}
                  onChange={(e) => setExercisetime(e.target.value)}
                  type="number"
                  placeholder="Enter time (minutes)"
                ></Form.Control>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicLevel">
                <FormLabel component="legend">Level</FormLabel>
                <RadioGroup
                  row
                  aria-label="level"
                  name="row-radio-buttons-group"
                  value={level}
                >
                  <FormControlLabel
                    value="easy"
                    control={<Radio />}
                    label="easy"
                    onChange={(e) => setLevel(e.target.value)}
                  />
                  <FormControlLabel
                    value="medium"
                    control={<Radio />}
                    label="medium"
                    onChange={(e) => setLevel(e.target.value)}
                  />
                  <FormControlLabel
                    value="hard"
                    control={<Radio />}
                    label="hard"
                    onChange={(e) => setLevel(e.target.value)}
                  />
                </RadioGroup>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicGender">
                <FormLabel component="legend">Gender</FormLabel>
                <RadioGroup
                  row
                  aria-label="gender"
                  name="row-radio-buttons-group"
                  value={gender}
                >
                  <FormControlLabel
                    value="male"
                    control={<Radio />}
                    label="male"
                    onChange={(e) => setGender(e.target.value)}
                  />
                  <FormControlLabel
                    value="female"
                    control={<Radio />}
                    label="female"
                    onChange={(e) => setGender(e.target.value)}
                  />
                  <FormControlLabel
                    value="both"
                    control={<Radio />}
                    label="both"
                    onChange={(e) => setGender(e.target.value)}
                  />
                </RadioGroup>
              </Form.Group>

              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <FormLabel component="legend">Description</FormLabel>
                <Form.Control
                  value={exerciseDescription}
                  onChange={(e) => setExerciseDescription(e.target.value)}
                  as="textarea"
                  placeholder="Enter description"
                  rows={3}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="exampleForm.ControlTip">
                <FormLabel component="legend">Tip</FormLabel>
                <Form.Control
                  value={tip}
                  onChange={(e) => setTip(e.target.value)}
                  as="textarea"
                  placeholder="Enter tip"
                  rows={3}
                />
              </Form.Group>

              <Form.Group>
                <FormLabel>equipment</FormLabel>
                <AsyncSelect
                  cacheOptions
                  defaultOptions
                  value={selectedValue}
                  getOptionLabel={(e) => e.equipmentName}
                  getOptionValue={(e) => e.id}
                  loadOptions={fetchData}
                  onInputChange={handleInputChange}
                  onChange={handleChange}
                />
              </Form.Group>

              <Form.Group>
                <FormLabel>main image</FormLabel>
                <Form.Control
                  type={"file"}
                  ref={inputFile}
                  onChange={onChangeImg}
                ></Form.Control>
              </Form.Group>

              <Form.Group>
                <img src={imagePath} alt="image" />
              </Form.Group>

              <Form.Group>
                <FormLabel>gif image</FormLabel>
                <Form.Control
                  type={"file"}
                  ref={inputFile2}
                  onChange={onChangeVideo}
                ></Form.Control>
              </Form.Group>

              <Form.Group>
                <img src={videoURLPath} alt="" />
              </Form.Group>

              <SubmitButton variant="primary" onClick={handleCreate}>
                Submit
              </SubmitButton>
            </Form>
          </Col>
        </FormRow>
      </Container>
    </GymWrapper>
  );
};

export default ExerciseCreate;

const GymWrapper = styled.div`
  margin-top: 3rem;
`;

const FormRow = styled(Row)`
  margin-top: 2rem;
`;

const SubmitButton = styled(Button)`
  margin-top: 1rem;
`;
