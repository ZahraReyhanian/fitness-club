import React, { useState } from "react";
import { toast } from "react-toastify";
import { Button, Col, Container, Row, Form, FormLabel } from "react-bootstrap";
import styled from "styled-components";
import "../../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import PanelTitle from "../../../components/title/PanelTitle";
import { FormControlLabel, Radio, RadioGroup } from "@material-ui/core";
import { createEquipment } from "../../../api/admin/equipment_api";

const EquipmentCreate = () => {
  const input = React.useRef();
  const inputFile = React.useRef();
  const [equipmentName, setEquipmentName] = useState([]);
  const [explain, setExplain] = useState([]);
  const [deviceHealthStatus, setDeviceHealthStatus] = useState([]);
  const [imageFile, setImageFile] = useState();
  const [imagePath, setImagePath] = useState();

  const validateData = (equipment) => {
    if (!equipment.equipmentName) return "Enter Name";
    if (!equipment.deviceHealthStatus) return "Enter Status";
    if (!equipment.image) return "Enter Image";
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

  const handleCreate = () => {
    const equipment = {
      equipmentName: equipmentName,
      explain: explain,
      deviceHealthStatus: deviceHealthStatus,
      image: imageFile,
    };
    console.log(equipment);
    const error = validateData(equipment);
    if (error) return toast.warn(error);

    const formData = new FormData();
    formData.append("equipmentName", equipmentName);
    formData.append("explain", explain);
    formData.append("deviceHealthStatus", deviceHealthStatus);
    formData.append("image", imageFile);
    createEquipment(formData, (isOK, data) => {
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
            <PanelTitle title={"Equipment Create"} />
          </Col>
        </Row>
        <FormRow>
          <Col mt={2} md={12} sm={12}>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Control
                  value={equipmentName}
                  onChange={(e) => setEquipmentName(e.target.value)}
                  type="text"
                  placeholder="Enter name"
                ></Form.Control>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicStatus">
                <FormLabel component="legend">Status</FormLabel>
                <RadioGroup
                  row
                  aria-label="status"
                  name="row-radio-buttons-group"
                >
                  <FormControlLabel
                    value="true"
                    control={<Radio />}
                    label="Available"
                    onChange={(e) => setDeviceHealthStatus(e.target.value)}
                  />
                  <FormControlLabel
                    value="false"
                    control={<Radio />}
                    label="Unavailable"
                    onChange={(e) => setDeviceHealthStatus(e.target.value)}
                  />
                </RadioGroup>
              </Form.Group>

              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Control
                  value={explain}
                  onChange={(e) => setExplain(e.target.value)}
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
                <img src={imagePath} alt="" />
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

export default EquipmentCreate;

const GymWrapper = styled.div`
  margin-top: 3rem;
`;

const FormRow = styled(Row)`
  margin-top: 2rem;
`;

const SubmitButton = styled(Button)`
  margin-top: 1rem;
`;
