import React, {useState} from 'react';
import {Col, Container, Form, Row} from "react-bootstrap";
import LoginIcon from "./images/user.svg";
import Button2 from "react-bootstrap/Button";
import uiImg from "./images/login.svg";
import {toast} from "react-toastify";
import {registerApi} from "../../api/api_auth";

const Reset = () => {
    const [emailRegister, setEmailRegister] = useState();
    const [passwordRegister, setPasswordRegister] = useState();
    const [confPasswordRegister, setConfPasswordRegister] = useState();

    const validateRegister = (user) =>{
        if (!user.email)
            return "ایمیل را وارد كنید"
        if (!user.password)
            return "رمز عبور را وارد كنيد"
        if (user.password !== user.confPasswordRegister)
            return "رمز عبور را تاييد كنيد"
    }

    const handleRegister = ()=>{
        const user = {
            email: emailRegister,
            password: passwordRegister,
            confPasswordRegister: confPasswordRegister
        };
        const error = validateRegister(user);
        if(error)
            return toast.warn(error);

        user.confPasswordRegister = undefined
        registerApi(user, (isOk, data)=>{
            if (!isOk)
                return  toast.error(data)
            toast.success("شما با موفقيت ثبت نام شديد");
            localStorage.setItem("name", data.name);
            localStorage.setItem("image", data.image);
            localStorage.setItem("username", data.username);
            localStorage.setItem("x-auth-token", data['x-auth-token']);
            window.location.reload();

        })

    }

    return (
        <div>
            <Container className={"mt-5"}>
                <Row>
                    <Col lg={6} md={6} sm={12} className="text-center mt-5 p-3">
                        <img className="icon-img" src={LoginIcon} alt="userIcon"/>
                        <Form>
                            <Form.Group className="mb-3" controlId="formBasicUsername">
                                <Form.Control value={emailRegister} onChange={e=>setEmailRegister(e.target.value)} type="email" placeholder="Enter email" />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Control value={passwordRegister} onChange={e=>setPasswordRegister(e.target.value)} type="password" placeholder="Password" />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicConfirmedPassword">
                                <Form.Control value={confPasswordRegister} onChange={e=>setConfPasswordRegister(e.target.value)}  type="password" placeholder="Password" />
                            </Form.Group>

                            <Button2 variant="primary w-100" type="submit" onClick={handleRegister}>Register</Button2>

                        </Form>
                    </Col>
                    <Col lg={6} md={6} sm={12}>
                        <img className="w-100" src={uiImg} alt="LOGIN"/>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Reset;