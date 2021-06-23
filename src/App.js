import React, {useEffect}from "react";
import Login from "./Auth/Login";
import { BrowserRouter, Route, Router, Switch, withRouter } from "react-router-dom";
import SignUp from "./Auth/SignUp";

import Alert from "../src/SharedComponents.js/globalService/Alert";
import setAuthToken from "./features/setAuthToken";

import EmailVerification from "./Auth/EmailVerification";
import SetPassword from "./Auth/SetPassword";
import Dashboard from "./UserDashboard/pages/Dashboard";
import MiniInvestment from "./UserDashboard/pages/MiniInvestment";
import AboutProduct from "./UserDashboard/pages/AboutProduct";
import SourceFunding from "./UserDashboard/pages/SourceFunding";
import { loadUserService } from "./Redux/Actions/auth";
import store from "./Redux/store";
import Refferal from "./UserDashboard/pages/Refferal";
import Profile from "./UserDashboard/pages/Profile";
import "antd/dist/antd.css";
import { Provider } from "react-redux";
import ProjectFund from "./UserDashboard/pages/ProjectFund";

if (localStorage.user) {
  setAuthToken(localStorage.user);
}

function App() {
  useEffect(() => {
    store.dispatch(loadUserService());
  }, []);
  return (
    <>
    <Alert />
      <BrowserRouter>
        <Switch>

      
          <Route exact path="/" component={Login} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/emailverification" component={EmailVerification} />
          <Route exact path="/setPassword" component={SetPassword} />

          
          <Route
          exact
          path="/dashboard"
          component={Dashboard}
        />
        <Route
          exact
          path="/project-fund"
          component={ProjectFund}
        />
        <Route
          exact
          path="/mini-investment"
          component={MiniInvestment}
        />
        <Route
          exact
          path="/mini-investment/about-product"
          component={AboutProduct}
        />
        <Route
          exact
          path="/mini-investment/source-funding"
          component={SourceFunding}
        />
        <Route
          exact
          path="/refferal"
          component={Refferal}
        />
        <Route
          exact
          path="/profile"
          component={Profile}
        />
        {/* <PrivateRoute exact path="/investment" component={Investment} /> */}
        {/* <Route
          exact
          path="/investment"
          render={({ match: { url } }) => (
            <>
              <Switch>
                <Router
                  path={`${url}/`}
                  component={Investment}
                  exact
                />
                <Router
                  path={`${url}/mini-investment`}
                  component={MiniInvestment}
                  exact
                />
              </Switch>
            </>
          )}
        /> */}
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
