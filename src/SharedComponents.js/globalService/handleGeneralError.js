import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { AUTH_ERROR, GENERAL_ERROR } from "../../Redux/Actions/types";
import { setAlert } from "../../Redux/Actions/alert";
import { Redirect } from "react-router-dom";

export const handleGeneralErrors = (errors) => (dispatch) => {
  console.log(errors);
  dispatch({ type: "SPINNER", payload: false });

  if (errors.message === "Network Error") {
    dispatch(setAlert("Network Error", "error"));
  } else if (errors.message === "timeout of 0ms exceeded") {
    dispatch(setAlert("Request Timeout", "error"));
  } else {
    // try/catch block, just in case we get and unchecked err.message in the future
    // in which case "errors.response.data" would still be undefined
    try {
      dispatch({ type: GENERAL_ERROR, payload: errors.response.data });
      if (errors.response.data.statusCode === 2) {
        dispatch(setAlert("Invalid credential,details do not exist", "error"));
      } else if (errors.response.data.statusCode === 6) {
        dispatch(setAlert("Please try again", "error"));
      } else if (errors.response.data.statusCode === 7) {
        dispatch(setAlert("Credential already exist", "error"));
      } else if (errors.response.data.statusCode === 8) {
        dispatch(setAlert("Bad Request", "error"));
      } else if (errors.response.data.statusCode === 9) {
        dispatch(setAlert("Sign In Error", "error"));}
        else if (errors.response.data.statusCode === 401) {
          dispatch(setAlert("Invalid Email Address", "error"));
      } else if (errors.response.data.statusCode === 10) {
        dispatch(setAlert("Email already confirmed", "error"));
      } else if (errors.response.data.statusCode === 12) {
        dispatch(setAlert("New password Error", "error"));
      } else if (errors.response.data.statusCode === 13) {
        dispatch(setAlert("Invalid User type", "error"));
      } else if (errors.response.data.statusCode === 16) {
        dispatch(setAlert("Invalid File SIze", "error"));
      } else if (errors.response.data.statusCode === 15) {
        dispatch(setAlert("Customer Creation Error", "error"));
      } else if (errors.response.data.statusCode === 14) {
        dispatch(setAlert("Role Assignment Error", "error"));
      } else if (errors.response.data.statusCode === 18) {
        dispatch(setAlert("File Upload Error", "error"));
      } else if (errors.response.data.statusCode === 19) {
        dispatch(setAlert("File Delete Error", "error"));
      } else if (errors.response.statusCode === 401) {
        dispatch(setAlert("Session Expired, Please sign in", "error"));
        dispatch({ type: AUTH_ERROR, payload: errors.response });
        return <Redirect to="/" />;
      }
    } catch (error) {
      dispatch(setAlert("Something went wrong, please try again.", "error"));
    }
  }
};
const handleGeneralErr = (errors, props) => {
  return <div></div>;
};

handleGeneralErrors.propTypes = {};
const mapStateToProps = (state) => ({
  errors: state.global.errors,
});

export default connect(mapStateToProps)(handleGeneralErr);
