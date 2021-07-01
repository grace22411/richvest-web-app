import React, {useEffect}from "react";
import Login from "./Auth/Login";
import { BrowserRouter, Route, Router, Switch, withRouter } from "react-router-dom";
import SignUp from "./Auth/SignUp";

import Alert from "../src/SharedComponents.js/globalService/Alert";
import setAuthToken from "./features/setAuthToken";

import TermsAndCondition from "./UserDashboard/pages/TermsAndCondition";
import ForgotPassword from "./Auth/ForgotPassword";
import ConfirmPassword from "./Auth/ResetPassword";
import Dashboard from "./UserDashboard/pages/Dashboard";
 import Loan from "./UserDashboard/pages/Loan";
import Savings from "./UserDashboard/pages/Savings";
import Wallet from "./UserDashboard/pages/Wallet";
import { loadUserService } from "./Redux/Actions/auth";
import store from "./Redux/store";
import Refferal from "./UserDashboard/pages/Refferal";
import Profile from "./UserDashboard/pages/Profile";
import "antd/dist/antd.css";
import { Provider } from "react-redux";
import ProjectFund from "./UserDashboard/pages/ProjectFund";
import VerifyEmailPage from "./UserDashboard/pages/VerifyEmailPage";

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
          {/* <Route exact path="/emailverification" component={EmailVerification} /> */}
          <Route exact path="/forgotPassword" component={ForgotPassword} />
          <Route exact path="/resetPassword" component={ConfirmPassword} />
          <Route exact path="/verifyEmail" component={VerifyEmailPage} />

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
          path="/my-loan"
          component={Loan}
        />
        <Route
          exact
          path="/my-wallet"
          component={Wallet}
        />
        <Route
          exact
          path="/termsAndCondition"
          component={TermsAndCondition}
        />
        <Route
          exact
          path="/my-savings"
          component={Savings}
        />
       
        <Route
          exact
          path="/referral"
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
