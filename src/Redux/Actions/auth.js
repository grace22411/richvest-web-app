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
import { setAlert, setAlertConfirm } from "./alert";
import { Link, Redirect } from "react-router-dom";
import setAuthToken from "../../features/setAuthToken";
import { handleGeneralErrors } from "../../SharedComponents.js/globalService/handleGeneralError.js";
import { endpoints } from "./endpoints";
import * as jwt from "jsonwebtoken"
import userEvent from "@testing-library/user-event";

const token = localStorage.getItem("token");
const user = localStorage.getItem("user");
export const base_url = "https://www.richvest.gq/";

// load user
export const loadUserService = () => async (dispatch) => {
  if (localStorage.user) {
    setAuthToken(localStorage.user);
    dispatch({
      type: USER_LOADED,
    });
  } else {
    dispatch({
      type: AUTH_ERROR,
    });
  }
};
    const jwtConfig = {
        secret: "PPRvE7CrIqzCnEYLF6InNv7ADrNqCzjInAQYLH9JxSIsWYdcjSnQYTL6nEu0MIES"
    }
export function getUserFromLocalStorage(token) {
    // const token =  localStorage.getItem("user");
    const secret = jwtConfig.secret;
    let user = jwt.verify(token, secret)
    return user;
}


//login user
export const loginService = (payload,logPage) => async (dispatch) => {

  dispatch({ type: LOADING });
  
  
  const handleLogin = async () => {
      try {
          const options = {
              method: 'POST',
              data: {...payload},
              url: `${endpoints.login}`,
              headers: {
                  "Content-Type": "application/json",
                },
            }
            const response = await axios(options);
            dispatch(setAlert("Welcome", "success"));
            const user = getUserFromLocalStorage(response.data);
            localStorage.setItem("user", JSON.stringify(user));
            logPage.redirect("/dashboard")
            //console.log(user);

        } catch(err) {
            console.log(err.response.data)
            dispatch(setAlert(err.response.data, 'error'))
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
        }
    }

    handleLogin()
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
      page.redirect("/verifyEmail")
      //dispatch(setAlertConfirm("Please check your mail to verify your account",'error'));
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
   const params = {
    emailAddress:payload.emailAddress
  };

  dispatch({ type: LOADING });
  try {
    console.log(payload);
    dispatch({ type: SPINNER, payload: true });
    const res = await axios.get(`${endpoints.SendMail}`, {params}, config);
    dispatch({ type: SPINNER, payload: false });
    dispatch(setAlert(res.data.message));
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
export const confirmPasswordNew = (payload,goLogPage) => async (dispatch) => {
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
      `${endpoints.ResetPassword}`,
      payload,
      config
    );
    dispatch({ type: SPINNER, payload: false });
    dispatch(setAlert("Password changed successfully", "success"));
    console.log(res.data);
    goLogPage.redirect('/')
    // dispatch({
    //   type: LOGOUT,
    //   payload: res.data,
    // });
    // dispatch(loadUserService());
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
      console.log(err);
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
export const VerifyUserEmail = (token) => async (dispatch) => {
  dispatch({ type: SPINNER, payload: true });
  const data = {
    emailConfirmationLinkToken: token,
  };
  axios
    .get(endpoints.VerifyUserEmail, data)
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
