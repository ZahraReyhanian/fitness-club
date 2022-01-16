import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { Button, Col, Container, Row, Form } from "react-bootstrap";
import styled from "styled-components";
import "../../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import PanelTitle from "../../../components/title/PanelTitle";
import { getEditGym, updateGym } from "../../../api/admin/gym_api";
import { useLocation, useParams } from "react-router-dom";

const GymEdit = (props) => {
  const input = React.useRef();
  const inputFile = React.useRef();
  const [gymName, setGymName] = useState([]);
  const [gymText, setGymText] = useState([]);
  const [imageFile, setImageFile] = useState();
  const [imagePath, setImagePath] = useState();

  const { id } = useParams();

  const location = useLocation();
  useEffect(() => {
    getEditGym(id, (isOk, data) => {
      if (!isOk) return alert(data.message);
      else {
        setGymName(data.gymName);
        setGymText(data.gymText);
        setImagePath(data.image.original);
      }
    });
  }, [location]);

  const validateData = (gym) => {
    if (!gym.gymName) return "Enter Name";
    if (!gym.gymText) return "Enter Text";
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

  const handleEdit = () => {
    const gym = {
      gymName: gymName,
      gymText: gymText,
      image: imageFile,
    };
    const error = validateData(gym);
    if (error) return toast.warn(error);

    const formData = new FormData();
    formData.append("gymName", gymName);
    formData.append("gymText", gymText);
    formData.append("image", imageFile);
    formData.append("id", id);
    updateGym(id, formData, (isOK, data) => {
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
            <PanelTitle title={"Gym Edit"} />
          </Col>
        </Row>
        <FormRow>
          <Col mt={2} md={12} sm={12}>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control
                  value={gymName}
                  onChange={(e) => setGymName(e.target.value)}
                  type="text"
                  placeholder="Enter name"
                ></Form.Control>
              </Form.Group>

              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Control
                  value={gymText}
                  onChange={(e) => setGymText(e.target.value)}
                  as="textarea"
                  placeholder="Enter text"
                  rows={3}
                />
              </Form.Group>

              <Form.Group>
                <Form.Control
                  type={"file"}
                  ref={inputFile}
                  onChange={onChangeImg}
                ></Form.Control>
              </Form.Group>

              <Form.Group>
                <img src={"http://localhost:8000//" + imagePath} alt="" />
              </Form.Group>
              <SubmitButton variant="primary" onClick={handleEdit}>
                Submit
              </SubmitButton>
            </Form>
          </Col>
        </FormRow>
      </Container>
    </GymWrapper>
  );
};

export default GymEdit;

const GymWrapper = styled.div`
  margin-top: 3rem;
`;

const FormRow = styled(Row)`
  margin-top: 2rem;
`;

const SubmitButton = styled(Button)`
  margin-top: 1rem;
`;
