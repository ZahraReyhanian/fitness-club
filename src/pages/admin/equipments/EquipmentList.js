import React, { useEffect, useState } from "react";
import { Button, Col, Container, Row, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import styled from "styled-components";
import "../../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import {
  deleteEquipmentApi,
  getAllEquipments,
} from "../../../api/admin/equipment_api";
import PanelTitle from "../../../components/title/PanelTitle";

const EquipmentList = () => {
  const [equipments, setEquipments] = useState([]);

  useEffect(() => {
    getAllEquipments((isOk, data) => {
      if (!isOk) return alert(data.message);
      else setEquipments(data);
    });
  }, []);

  const deleteEquipment = (id) => {
    deleteEquipmentApi(id, (isOk, data) => {
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
            <PanelTitle title={"Equipments"} />
          </Col>
          <Col md={4} sm={6}>
            <AddButtonWrapper>
              <Link to="/admin/equipment/create">
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
                {equipments.map((item) => (
                  <tr>
                    <td>{item.id}</td>
                    <td>{item.equipmentName}</td>
                    <td>{item.deviceHealthStatus}</td>
                    <td>
                      <Link to={`/admin/equipment/${item.id}`}>
                        <Button variant="primary">edit</Button>
                      </Link>
                    </td>
                    <td>
                      <Button
                        variant="danger"
                        onClick={() => deleteEquipment(item.id)}
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

export default EquipmentList;

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
