import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Redirect } from "react-router-dom";

import AuthPage from "../pages/auth/AuthPage";
import Home from "../pages/Home";
import ProfilePanel from "../pages/profile/ProfilePanel";
import AdminPanel from "../pages/admin/AdminPanel";
import NotFound from "../pages/404";
import Exercise from "../pages/exercise/Exercise";
import AllExercise from "../pages/exercise/AllExercise";
import AllEquipment from "../pages/equipment/AllEquipment";
import Reset from "../pages/auth/Reset";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <AuthRoute path={"/login"} component={AuthPage} />
          <AuthRoute path={"/reset/:token"} component={Reset} />
          <PrivateRoute
            path={"/profile"}
            render={() => {
              return <ProfilePanel />;
            }}
          />
          <PrivateRoute
            path={"/setting"}
            render={() => {
              return <ProfilePanel />;
            }}
          />
          <PrivateRoute
            path={"/profile_exercise"}
            render={() => {
              return <ProfilePanel />;
            }}
          />
          <PrivateRoute
            path={"/exercise/:id"}
            render={() => {
              return <Exercise />;
            }}
          />
          <PrivateRoute
            exact
            path={"/exercises"}
            render={() => {
              return <AllExercise />;
            }}
          />
          <PrivateRoute
            exact
            path={"/equipments"}
            render={() => {
              return <AllEquipment />;
            }}
          />

          <PrivateRouteAdmin
            path={"/admin"}
            render={() => {
              return <AdminPanel />;
            }}
          />

          <PrivateRoute
            exact
            path={"/"}
            render={() => {
              return <Home />;
            }}
          />

          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
      <ToastContainer />
    </>
  );
};

const isLogin = () => !!localStorage.getItem("x-auth-token");
const isAdmin = () => !!localStorage.getItem("x-auth-token");

const AuthRoute = ({ component, props }) => {
  return (
    <Route
      {...props}
      render={(props) => {
        if (isLogin()) return <Redirect to={"/"} />;
        else {
          return React.createElement(component, props);
        }
      }}
    />
  );
};

const PrivateRoute = ({ render, props }) => {
  return (
    <Route
      {...props}
      render={(props) => {
        if (isLogin()) return render(props);
        else {
          return <Redirect to={"/login"} />;
        }
      }}
    />
  );
};

const PrivateRouteAdmin = ({ render, props }) => {
  return (
    <Route
      {...props}
      render={(props) => {
        if (isLogin()) {
          if (isAdmin()) return render(props);
          else return <Redirect to={"/"} />;
        } else {
          return <Redirect to={"/login"} />;
        }
      }}
    />
  );
};

export default App;
