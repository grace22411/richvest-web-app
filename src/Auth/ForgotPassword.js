import React, { useState } from "react";
import Header from "./Header";
import password from "../UserDashboard/images/password.svg";
import { Form } from "../UserDashboard/styles/ComponentStyles";
import { ForgotPasswordContainer } from "./GlobalCss";
import { Spin, Tabs } from "antd";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { resetPassword } from "../Redux/Actions/auth";
import { setAlert } from "../Redux/Actions/alert";

const ForgotPassword = ({ resetPassword, loading, setAlert }) => {
 
  const [emailAddress, setEmail] = useState("");

  const onFormChange = (e) => {
    setEmail(e.target.value);
  };
  const onSubmitForm = (e) => {
    e.preventDefault();
    if (emailAddress === "") {
      setAlert(`Email Address is required`, "error");
      return;
    }
    console.log(emailAddress);
    const payload = { emailAddress: emailAddress };
    resetPassword(payload);
    console.log(payload)
  };
  return (
    <div>
      <Header />

      <ForgotPasswordContainer>
        <div className="forgetPasswordImage">
          <img src={password} alt="forgot password image" />
        </div>
        <Form>
          <h2>Forgot Password</h2>
          <p>
          Kindly enter the email associated with your account to reset your password.
          </p>
          <div className="form-group">
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter email"
              name="emailAddress"
              value={emailAddress}
              onChange={(e) => onFormChange(e)}
              required
            />
            <button onClick={onSubmitForm} disabled={loading}>
              Reset Password
              {loading && <Spin />}
            </button>
          </div>
        </Form>
      </ForgotPasswordContainer>
    </div>
  );
};
ForgotPassword.propTypes = {
  resetPassword: PropTypes.func.isRequired,
  setAlert: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  loading: state.auth.loading,
});
export default connect(mapStateToProps, { resetPassword, setAlert })(
  ForgotPassword
);
