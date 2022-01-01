import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Redirect from "react-router-dom/es/Redirect";

import AuthPage from "../pages/auth/AuthPage";
import Home from "../pages/Home"
// import AdminPanel from "../pages/admin/AdminPanel";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <PublicRoute path={"/login"} component={AuthPage} />
          <PrivateRoute
            path={"/"}
            render={() => {
              return (
                <Home />
              );
            }}
          />
        </Switch>
      </BrowserRouter>
      <ToastContainer />
    </>
  );
};

const isLogin = () => true;
// !!localStorage.getItem("x-auth-token")
const PublicRoute = ({ component, props }) => {
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

export default App;
