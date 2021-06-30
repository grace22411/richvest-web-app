import React, { useState } from "react";
import { Spin } from "antd";
import Header from "./Header";
import { Link, Redirect } from "react-router-dom";
import { setAlert } from "../Redux/Actions/alert";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { confirmPasswordNew } from "../Redux/Actions/auth";

import { ForgotPasswordContainer, Form } from "./GlobalCss";

const ConfirmPassword = ({
  confirmPasswordNew,
  match,
  isAuthenticated,
  loading,
  setAlert,
}) => {

  const [formData, setFormData] = useState({
    token:"",
    password: "",
    confirmPassword: "",
  });
  const { password, confirmPassword , token} = formData;

  const onFormChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const onSubmitForm = (e) => {
    e.preventDefault();
    Object.entries(formData).forEach((each) => {
      if (each[1] === "") {
        setAlert(`${each[0]} is required`, "error");
        return;
      }
    });
    if (password !== confirmPassword) {
      setAlert("Password do not match", "error");
      return;
    }
    const payload = {
      password: password,
      confirmPassword:  confirmPassword,
      token: token,
    };
    console.log(payload);
    confirmPasswordNew(payload, {redirect: (url) => history.replace(url)});
  };

    // Redirect if logged in
    if (isAuthenticated) {
      return <Redirect to="/" />;
    }

  return (
    <div>
      <Header />

      <ForgotPasswordContainer>
        <Form className="confirm-password">
          <h2>Reset Password</h2>
          <p>
          Kindly enter your reset code and new password       
          </p>
          <div className="form-group">
            <input
              type="number"
              placeholder="Enter code"
              name="token"
              value={token}
              onChange={(e) => onFormChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              placeholder="Enter New Password"
              name="password"
              value={password}
              onChange={(e) => onFormChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              placeholder="Confirm New Password"
              name="confirmPassword"
              value={confirmPassword}
              onChange={(e) => onFormChange(e)}
            />
          </div>
          <Link to="/">
            <button onClick={onSubmitForm} disabled={loading}>
              Confirm Password {loading && <Spin />}
            </button>
          </Link>
        </Form>
      </ForgotPasswordContainer>
    </div>
  );
};
ConfirmPassword.propTypes = {
  confirmPasswordNew: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  loading: state.auth.loading,
});
export default connect(mapStateToProps, {confirmPasswordNew, setAlert })(
  ConfirmPassword
);
