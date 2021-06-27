import React, { useState } from "react";
import { Spin } from "antd";
import Header from "./Header";
import { Link, Redirect } from "react-router-dom";
import { setAlert } from "../Redux/Actions/alert";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { confirmPassword } from "../Redux/Actions/auth";
import { Form } from "../UserDashboard/styles/ComponentStyles";
import { ForgotPasswordContainer } from "./GlobalCss";

const ConfirmPassword = ({
  confirmPassword,
  match,
  isAuthenticated,
  loading,
  setAlert,
}) => {
  const passwordResetLinkToken = match.params.id;

  const [formData, setFormData] = useState({
    newPassword: "",
    newPassword2: "",
  });
  const { newPassword, newPassword2 } = formData;

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
    if (newPassword !== newPassword2) {
      setAlert("Password do not match", "error");
      return;
    }
    const payload = {
      newPassword: newPassword,
      passwordResetLinkToken: passwordResetLinkToken,
    };
    console.log(payload);
    confirmPassword(payload);
  };

  //   // Redirect if logged in
  //   if (isAuthenticated) {
  //     const userDetails = JSON.parse(localStorage.getItem('user'));
  //     if (userDetails.userType === 1) {
  //       // redirect to super admin dashboard
  //       return <Redirect to="/admin" />;
  //     } else if (userDetails.userType === 2) {
  //       // redirect to admin dashboard
  //       return <Redirect to="/admin" />;
  //     } else if (userDetails.userType === 3) {
  //       // redirect to staff dashboard
  //       return <Redirect to="/staff" />;
  //     } else if (userDetails.userType === 4) {
  //       // redirect to student dashboard
  //       return <Redirect to="/student" />;
  //     }
  //   }

  return (
    <div>
      <Header />

      <ForgotPasswordContainer>
        <Form>
          <h2>Reset Password</h2>
          <p>
          Kindly enter your reset code and new password       
          </p>

          <div className="form-group">
            <input
              type="password"
              placeholder="Enter New Password"
              name="newPassword"
              value={newPassword}
              onChange={(e) => onFormChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              placeholder="Enter New Password"
              name="newPassword"
              value={newPassword}
              onChange={(e) => onFormChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              placeholder="Confirm New Password"
              name="newPassword2"
              value={newPassword2}
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
  confirmPassword: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  loading: state.auth.loading,
});
export default connect(mapStateToProps, { confirmPassword, setAlert })(
  ConfirmPassword
);
