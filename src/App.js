import React from "react";
import Login from "./Auth/Login";
import { BrowserRouter, Route, Switch, withRouter } from "react-router-dom";
import SignUp from "./Auth/SignUp";
import EmailVerification from "./Auth/EmailVerification";
import SetPassword from "./Auth/SetPassword";
import MainDashboard from "./Dashboard/pages/MainDashboard";
import Investment from "./Dashboard/pages/Investment";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/emailverification" component={EmailVerification} />
          <Route exact path="/setPassword" component={SetPassword} />
          <Route
          exact
          path="/dashboard"
          component={MainDashboard}
        />
        <Route
          exact
          path="/investment"
          component={Investment}
        />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
