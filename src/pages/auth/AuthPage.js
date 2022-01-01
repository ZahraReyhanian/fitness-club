import React, {useState} from 'react';
import useStyles from "./styles";
import {toast} from "react-toastify";
import {loginApi, registerApi} from "../../api/api_auth";
import {Col, Container, Form, Row} from "react-bootstrap";
import Button2 from "react-bootstrap/Button";
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import LoginIcon from "./images/user.svg";
import uiImg from "./images/login.svg";
import "./Login.css";

const LOGIN_TAB_VALUE = 1;
const REG_TAB_VALUE = 2;
const RESET_TAB_VALUE = 3;

const AuthPage = () => {
    const classes = useStyles();

    const [tab, setTab] = useState(LOGIN_TAB_VALUE);

    //login state
    const [usernameLogin, setUsernameLogin] = useState();
    const [passwordLogin, setPasswordLogin] = useState();

    //register state
    const [fullNameRegister, setFullNameRegister] = useState();
    const [usernameRegister, setUsernameRegister] = useState();
    const [passwordRegister, setPasswordRegister] = useState();
    const [confPasswordRegister, setConfPasswordRegister] = useState();

    const handleChangeTab = (e, newValue) => {
        if(tab == REG_TAB_VALUE) setTab(LOGIN_TAB_VALUE);
        else setTab(REG_TAB_VALUE);
    }

    const handleChangeTabReset = (e, newValue) => {
        setTab(RESET_TAB_VALUE);
    }

    const validateLogin = (user) =>{
        if (!user.username)
            return "نام كاربری را وارد كنید"
        if (!user.password)
            return "رمز عبور را وارد كنيد"
    }

    const validateRegister = (user) =>{
        if (!user.username)
            return "نام كاربری را وارد كنید"
        if (!user.name)
            return "نام را وارد كنید"
        if (!user.password)
            return "رمز عبور را وارد كنيد"
        if (user.password != user.confPasswordRegister)
            return "رمز عبور را تاييد كنيد"
    }

    const handleRegister = ()=>{
        const user = {
            name: fullNameRegister,
            username: usernameRegister,
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

    const handleLogin = ()=>{
        const user = {
            username : usernameLogin,
            password : passwordLogin
        }
        const error = validateLogin(user)
        if (error)
            return toast.warn(error)

        loginApi(user, (isOk, data)=>{
            if (!isOk)
                return  toast.error(data)
            toast.success("شما با موفقيت وارد شديد");
            localStorage.setItem("name", data.name);
            localStorage.setItem("image", data.image);
            localStorage.setItem("username", data.username);
            localStorage.setItem("x-auth-token", data['x-auth-token']);
            window.location.reload();
        })
    }

    return (
        <>
            {tab === LOGIN_TAB_VALUE &&
            <Container className={"mt-5"}>
                <Row>
                    <Col lg={6} md={6} sm={12} className="text-center mt-5 p-3">
                        <img className="icon-img" src={LoginIcon} alt="userIcon"/>
                        <Form>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Control value={usernameLogin} onChange={e=>setUsernameLogin(e.target.value)} type="text" placeholder="Enter username" />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Control value={passwordLogin} onChange={e=>setPasswordLogin(e.target.value)} type="password" placeholder="Password" />
                            </Form.Group>

                            <Button2 variant="primary w-100" type="submit" onClick={handleLogin}>Login</Button2>

                            <div className="mt-3">
                                <a href="#" onClick={handleChangeTabReset}><small className="reset">Password Reset</small></a> ||
                                <a href="#" onClick={handleChangeTab}><small className="reset ml-2"> Register</small></a>
                            </div>

                        </Form>
                    </Col>
                    <Col lg={6} md={6} sm={12}>
                        <img className="w-100" src={uiImg} alt="LOGIN"/>
                    </Col>
                </Row>
            </Container>
            }
            {tab === REG_TAB_VALUE &&
            <Container className={"mt-5"}>
                <Row>
                    <Col lg={6} md={6} sm={12} className="text-center mt-5 p-3">
                        <img className="icon-img" src={LoginIcon} alt="userIcon"/>
                        <Form>
                            <Form.Group className="mb-3" controlId="formBasicUsername">
                                <Form.Control value={usernameRegister} onChange={e=>setUsernameRegister(e.target.value)} type="text" placeholder="Enter username" />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicFullName">
                                <Form.Control value={fullNameRegister} onChange={e=>setFullNameRegister(e.target.value)} type="text" placeholder="Enter full name" />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Control value={passwordRegister} onChange={e=>setPasswordRegister(e.target.value)} type="password" placeholder="Password" />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicConfirmedPassword">
                                <Form.Control value={confPasswordRegister} onChange={e=>setConfPasswordRegister(e.target.value)}  type="password" placeholder="Password" />
                            </Form.Group>

                            <Button2 variant="primary w-100" type="submit" onClick={handleRegister}>Register</Button2>

                            <div className="mt-3">
                                <a href="#" onClick={handleChangeTabReset}><small className="reset">Password Reset</small></a> ||
                                <a href="#" onClick={handleChangeTab}><small className="reset ml-2"> LOGIN</small></a>

                            </div>

                        </Form>
                    </Col>
                    <Col lg={6} md={6} sm={12}>
                        <img className="w-100" src={uiImg} alt="LOGIN"/>
                    </Col>
                </Row>
            </Container>
            }

            {tab === RESET_TAB_VALUE &&
            <Container className={"mt-5"}>
                <Row>
                    <Col lg={6} md={6} sm={12} className="text-center mt-5 p-3">
                        <img className="icon-img" src={LoginIcon} alt="userIcon"/>
                        <Form>
                            <Form.Group className="mb-3" controlId="formBasicUsername">
                                <Form.Control value={usernameRegister} onChange={e=>setUsernameRegister(e.target.value)} type="text" placeholder="Enter username" />
                            </Form.Group>


                            <Button2 variant="primary w-100" type="submit" onClick={handleRegister}>Reset Password</Button2>

                            <div className="mt-3">
                                <a href="#" onClick={() => setTab(REG_TAB_VALUE)}><small className="reset">REGISTER</small></a> ||
                                <a href="#" onClick={() => setTab(LOGIN_TAB_VALUE)}><small className="reset ml-2"> LOGIN</small></a>

                            </div>

                        </Form>
                    </Col>
                    <Col lg={6} md={6} sm={12}>
                        <img className="w-100" src={uiImg} alt="LOGIN"/>
                    </Col>
                </Row>
            </Container>
            }

        </>
    );
};

export default AuthPage;