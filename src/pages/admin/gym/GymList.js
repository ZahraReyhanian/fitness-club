import React, { useEffect, useState } from "react";
import { Button, Col, Container, Row, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import styled from "styled-components";
import "../../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { deleteGymApi, getAllGym } from "../../../api/admin/gym_api";
import PanelTitle from "../../../components/title/PanelTitle";

const GymList = () => {
  const [gymList, setGymList] = useState([]);

  useEffect(() => {
    getAllGym((isOk, data) => {
      if (!isOk) return alert(data.message);
      else setGymList(data);
    });
  }, []);

  const deleteGym = (id) => {
    deleteGymApi(id, (isOk, data) => {
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
            <PanelTitle title={"Gym"} />
          </Col>
          <Col md={4} sm={6}>
            <AddButtonWrapper>
              <Link to="/admin/gym/create">
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
                  <th>text</th>
                  <th>edit</th>
                  <th>delete</th>
                </tr>
              </thead>
              <tbody>
                {gymList.map((item) => (
                  <tr>
                    <td>{item.id}</td>
                    <td>{item.gymName}</td>
                    <td>{item.gymText}</td>
                    <td>
                      <Link to={`/admin/gym/${item.id}`}>
                        <Button variant="primary">edit</Button>
                      </Link>
                    </td>
                    <td>
                      <Button
                        variant="danger"
                        onClick={() => deleteGym(item.id)}
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

export default GymList;

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
