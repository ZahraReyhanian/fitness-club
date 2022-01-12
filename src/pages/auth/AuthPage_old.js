import React, {useState} from 'react';
import useStyles from "./styles";
import {Paper} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Input from "@material-ui/core/Input";
import Button from "@material-ui/core/Button";
import {toast} from "react-toastify";
import {loginApi, registerApi} from "../../api/api_auth";

const LOGIN_TAB_VALUE = 1;
const REG_TAB_VALUE = 2;

const AuthPage_old = () => {
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
        setTab(newValue)
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
        <Paper className={classes.container}>
            <Typography className={classes.headerText}>خوش آمدید به توییتر فارسی</Typography>
            <Tabs
                value={tab}
                indicatorColor="primary"
                textColor="primary"
                onChange={handleChangeTab}
                aria-label="disabled tabs example"
            >
                <Tab label="ورود" value={LOGIN_TAB_VALUE} className={classes.tab}/>
                <Tab label="ثبت نام" value={REG_TAB_VALUE} className={classes.tab}/>

            </Tabs>
            {tab === LOGIN_TAB_VALUE &&
            <div className={classes.containerInput}>
                <Typography>نام کاربری</Typography>
                <Input value={usernameLogin} onChange={e=>setUsernameLogin(e.target.value)} />
                <Typography>رمز عبور</Typography>
                <Input type='password' value={passwordLogin} onChange={e=>setPasswordLogin(e.target.value)} />
                <Button variant={"contained"} color={"primary"} onClick={handleLogin}>ورود</Button>
            </div>
            }
            {tab === REG_TAB_VALUE &&
            <div className={classes.containerInput}>
                <Typography>نام کاربری</Typography>
                <Input value={usernameRegister} onChange={e=>setUsernameRegister(e.target.value)} />
                <Typography>نام</Typography>
                <Input value={fullNameRegister} onChange={e=>setFullNameRegister(e.target.value)}/>
                <Typography>رمز عبور</Typography>
                <Input type='password' value={passwordRegister} onChange={e=>setPasswordRegister(e.target.value)}/>
                <Typography>تکرار رمز عبور</Typography>
                <Input type='password' value={confPasswordRegister} onChange={e=>setConfPasswordRegister(e.target.value)} />
                <Button variant={"contained"} color={"primary"} onClick={handleRegister}>ثبت نام </Button>
            </div>
            }
        </Paper>
    );
};

export default AuthPage_old;