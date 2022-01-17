import React, { useEffect, useState } from "react";
import { Button, Col, Container, Row, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import styled from "styled-components";
import "../../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import {
  deleteExerciseApi,
  getAllExercises,
} from "../../../api/admin/exercise_api";
import PanelTitle from "../../../components/title/PanelTitle";

const ExerciseList = () => {
  const [exercises, setExercises] = useState([]);

  useEffect(() => {
    getAllExercises((isOk, data) => {
      if (!isOk) return alert(data.message);
      else setExercises(data);
    });
  }, []);

  const deleteExercise = (id) => {
    deleteExerciseApi(id, (isOk, data) => {
      if (isOk) {
        toast.success("Successful !");
      } else toast.error(data);
    });

    window.location.reload();
  };

  return (
    <GymWrapper>
      <Container mt={3}>
        <Row>
          <Col md={8} sm={6}>
            <PanelTitle title={"Exercises"} />
          </Col>
          <Col md={4} sm={6}>
            <AddButtonWrapper>
              <Link to="/admin/exercise/create">
                <Button variant="info">add</Button>
              </Link>
            </AddButtonWrapper>
          </Col>
        </Row>
        <TableRow>
          <Col mt={2} md={12} sm={12}>
            <Table responsive striped bordered hover>
              <thead>
                <tr>
                  <th>#</th>
                  <th>name</th>
                  <th>status</th>
                  <th>edit</th>
                  <th>delete</th>
                </tr>
              </thead>
              <tbody>
                {exercises.map((item) => (
                  <tr>
                    <td>{item.id}</td>
                    <td>{item.exerciseName}</td>
                    <td>{item.deviceHealthStatus}</td>
                    <td>
                      <Link to={`/admin/exercise/${item.id}`}>
                        <Button variant="primary">edit</Button>
                      </Link>
                    </td>
                    <td>
                      <Button
                        variant="danger"
                        onClick={() => deleteExercise(item.id)}
                      >
                        delete
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Col>
        </TableRow>
      </Container>
    </GymWrapper>
  );
};

export default ExerciseList;

const GymWrapper = styled.div`
  margin-top: 3rem;
`;

const TableRow = styled(Row)`
  margin-top: 2rem;
`;
const AddButtonWrapper = styled.div`
  padding-top: 1rem;
  padding-right: 2rem;
  display: flex;
  justify-content: end;
`;
