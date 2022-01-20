import React, { useState, useEffect } from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import LoginIcon from "./images/user.svg";
import Button2 from "react-bootstrap/Button";
import uiImg from "./images/login.svg";
import { toast } from "react-toastify";
import { resetApi } from "../../api/api_auth";
import { useLocation, useParams } from "react-router-dom";
import queryString from "query-string";

const Reset = () => {
  const location = useLocation();
  const [emailRegister, setEmailRegister] = useState();
  const [passwordRegister, setPasswordRegister] = useState();
  const [confPasswordRegister, setConfPasswordRegister] = useState();

  const [authToken, setAuthToken] = useState();

  //   const { id } = useParams();

  useEffect(() => {
    const id = location.pathname.substring(7);
    setAuthToken(id);
  }, [location]);

  //   const verifyToken = () => {

  //     // const { token, id } = queryString.parse(location.search);
  //   };

  //   useEffect(() => {
  //     verifyToken();
  //   }, []);

  const validateRegister = (user) => {
    if (!user.email) return "ایمیل را وارد كنید";
    if (!user.password) return "رمز عبور را وارد كنيد";
    if (user.password !== user.confirmPassword) return "رمز عبور را تاييد كنيد";
  };

  const handleRegister = () => {
    const user = {
      email: emailRegister,
      password: passwordRegister,
      confirmPassword: confPasswordRegister,
      token: authToken,
    };
    const error = validateRegister(user);
    if (error) return toast.warn(error);

    console.log(user);
    resetApi(authToken, user, (isOk, data) => {
      const delayInMilliseconds = 1000; //1 second

      setTimeout(function () {
        if (!isOk) return toast.error(data);
        toast.success("Successful!");
        console.log(data);
        localStorage.setItem("x-auth-token", data.data.token);
        localStorage.setItem("email", data.data.user.email);
        localStorage.setItem("name", data.data.user.name);
        window.location.reload();
      }, delayInMilliseconds);
    });
  };

  return (
    <div>
      <Container className={"mt-5"}>
        <Row>
          <Col lg={6} md={6} sm={12} className="text-center mt-5 p-3">
            <img className="icon-img" src={LoginIcon} alt="userIcon" />
            <Form>
              <Form.Group className="mb-3" controlId="formBasicUsername">
                <Form.Control
                  value={emailRegister}
                  onChange={(e) => setEmailRegister(e.target.value)}
                  type="email"
                  placeholder="Enter email"
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Control
                  value={passwordRegister}
                  onChange={(e) => setPasswordRegister(e.target.value)}
                  type="password"
                  placeholder="Password"
                />
              </Form.Group>

              <Form.Group
                className="mb-3"
                controlId="formBasicConfirmedPassword"
              >
                <Form.Control
                  value={confPasswordRegister}
                  onChange={(e) => setConfPasswordRegister(e.target.value)}
                  type="password"
                  placeholder="Password"
                />
              </Form.Group>

              <Button2 variant="primary w-100" onClick={handleRegister}>
                Reset Password
              </Button2>
            </Form>
          </Col>
          <Col lg={6} md={6} sm={12}>
            <img className="w-100" src={uiImg} alt="LOGIN" />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Reset;
