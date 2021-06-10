import axios from "axios";
import {
  LOGIN_SUCCESS,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_FAIL,
  LOADING,
  SPINNER,
  GENERAL_ERROR,
  LOGOUT,
  USER_EMAIL_VERIFIED,
} from "./types";
import { setAlert } from "./alert";
import { Link, Redirect } from "react-router-dom";
import setAuthToken from "../../features/setAuthToken";
import { handleGeneralErrors } from "../../SharedComponents.js/globalService/handleGeneralError.js";
import { endpoints } from "./endpoints";

const token = localStorage.getItem("token");
const user = localStorage.getItem("user");
export const base_url = "https://www.richvest.gq/";

// load user
export const loadUserService = (token) => async (dispatch) => {
  if (token) {
    setAuthToken(token);
    dispatch({
      type: USER_LOADED,
    });
  } else {
    dispatch({
      type: AUTH_ERROR,
    });
  }
};

//login user
export const loginService = (payload,logPage) => async (dispatch) => {
  const config = {
    Jwt: {
        "secret": "PPRvE7CrIqzCnEYLF6InNv7ADrNqCzjInAQYLH9JxSIsWYdcjSnQYTL6nEu0MIES",
        "expirationInMinutes": 1440},
    headers: {
      "Content-Type": "application/json",
    },
  };

  const { emailAddress, password } = payload || {};

  dispatch({ type: LOADING });
  
    console.log(payload);
    const res = await axios.post(
      `${endpoints.login}?emailAddress=${emailAddress}&password=${password}`,
      config
    )
    .then(async(res) => {
        dispatch(setAlert("Welcome", "success"));
    console.log(res);
    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data,
    });
    // dispatch(loadUserService(res.data));
    // const {data} = res.data;
    // await localStorage.setItem("user", JSON.stringify(data))
    logPage.redirect("/dashboard")
    })
    .catch ((err) => {
    if (
      err.message === "Network Error" ||
      err.message === "timeout of 0ms exceeded"
    ) {
      dispatch({ type: SPINNER, payload: false });
      dispatch(handleGeneralErrors(err.message));
      dispatch({
        type: LOGIN_FAIL,
      });
    } else {
      dispatch({ type: SPINNER, payload: false });
      dispatch(handleGeneralErrors(err));
      dispatch({
        type: LOGIN_FAIL,
      });
      console.log(err);
    }
  })
};

//Account Setup
export const accountSetup = (payload,page) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  dispatch({ type: LOADING });

  console.log(payload);
  dispatch({ type: SPINNER, payload: true });
  axios
    .post(`${endpoints.AccountSetup}`, payload, config)
    .then(async(res) => {
      dispatch({ type: SPINNER, payload: false });
      dispatch(setAlert("Account Setup Successful"));
      const {data} = res.data;
      dispatch(loadUserService());
      await localStorage.setItem("user", JSON.stringify(data))
      page.redirect("/dashboard")
    })
    .catch((err) => {
      if (
        err.message === "Network Error" ||
        err.message === "timeout of 0ms exceeded"
      ) {
        dispatch({ type: SPINNER, payload: false });
        dispatch(handleGeneralErrors(err.message));
        dispatch({
          type: LOGIN_FAIL,
        });
      } else {
        dispatch({ type: SPINNER, payload: false });
        dispatch(handleGeneralErrors(err));
        dispatch({
          type: LOGIN_FAIL,
        });
        console.log(err);
      }
    });
};

//Reset password
export const resetPassword = (payload) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  dispatch({ type: LOADING });
  try {
    console.log(payload);
    dispatch({ type: SPINNER, payload: true });
    const res = await axios.post(`${endpoints.SendMail}`, payload, config);
    dispatch({ type: SPINNER, payload: false });
    dispatch(setAlert("Password reset link has been sent to your mail"));
    console.log(res.data);
  } catch (err) {
    if (
      err.message === "Network Error" ||
      err.message === "timeout of 0ms exceeded"
    ) {
      dispatch({ type: SPINNER, payload: false });
      dispatch(handleGeneralErrors(err.message));
      dispatch({
        type: LOGIN_FAIL,
      });
    } else {
      dispatch({ type: SPINNER, payload: false });
      dispatch(handleGeneralErrors(err));
      dispatch({
        type: LOGIN_FAIL,
      });
      console.log(err.response.data);
    }
  }
};

//confirm reset password from mail
export const confirmPassword = (payload) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  dispatch({ type: LOADING });
  try {
    console.log(payload);
    dispatch({ type: SPINNER, payload: true });
    const res = await axios.post(
      `${endpoints.SetNewPassword}`,
      payload,
      config
    );
    dispatch({ type: SPINNER, payload: false });
    dispatch(setAlert("Welcome", "success"));
    console.log(res.data);
    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data,
    });
    dispatch(loadUserService());
  } catch (err) {
    if (
      err.message === "Network Error" ||
      err.message === "timeout of 0ms exceeded"
    ) {
      dispatch({ type: SPINNER, payload: false });
      dispatch(handleGeneralErrors(err.message));
      dispatch({
        type: LOGIN_FAIL,
      });
    } else {
      dispatch({ type: SPINNER, payload: false });
      dispatch(handleGeneralErrors(err));
      dispatch({
        type: LOGIN_FAIL,
      });
      console.log(err.response.data);
    }
  }
};

//logout
export const logoutService = () => (dispatch) => {
  dispatch({
    type: LOGOUT,
  });
};

// Verify User Email address
export const VerifyUserEmail = (emailToken) => async (dispatch) => {
  dispatch({ type: SPINNER, payload: true });
  const data = {
    emailConfirmationLinkToken: emailToken,
  };
  axios
    .post(endpoints.VerifyUserEmail, data)
    .then((res) => {
      dispatch({ type: SPINNER, payload: false });
      dispatch(setAlert("Email Address Confirmed", "success"));
      dispatch({
        type: LOGIN_SUCCESS,
        payload: res.data,
      });
      dispatch(loadUserService());
      dispatch({ type: USER_EMAIL_VERIFIED, payload: true });
    })
    .catch((err) => {
      if (err.response) {
        console.error(err.response);
        if (err.response.data.statusCode === 10) {
          dispatch(setAlert(err.response.data.statusMessage, "error"));
        }
        dispatch(setAlert("Email address could not be confirmed", "error"));
      } else {
        console.error(err);
        dispatch(setAlert("Connection Error", "error"));
      }
      dispatch({ type: SPINNER, payload: false });
    });
};

// Resend email verification
export const ResendEmailVerification = (email) => async (dispatch) => {
  const data = {
    emailAddress: email,
  };
  axios
    .post(endpoints.ResendUserEmailVerificationLink, data)
    .then((res) => {
      dispatch(setAlert(res.data.statusMessage, "success"));
    })
    .catch((err) => {
      if (err.response) {
        console.error(err.response);
        dispatch(setAlert(err.response.data.statusMessage, "error"));
      } else {
        console.error(err);
        dispatch(setAlert("Connection Error", "error"));
      }
      dispatch({ type: SPINNER, payload: false });
    });
};
