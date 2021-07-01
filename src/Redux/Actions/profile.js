import axios from "axios";
import {
  LOADING,
  SPINNER,
  CREATE_PROFILE_SUCCESS,
  CREATE_PROFILE_FAILED,
  CREATE_FUND_FAILED
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
      type: CREATE_PROFILE_SUCCESS,
    });
  } else {
    dispatch({
      type: CREATE_PROFILE_FAILED,
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



//Account Setup
export const ProfileSetup = (payload) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  dispatch({ type: LOADING });

  console.log(payload);
  dispatch({ type: SPINNER, payload: true });
  axios
    .post(`${endpoints.userProfileUpdate}`, payload, config)
    .then(async(res) => {
      dispatch({ type: SPINNER, payload: false });
      dispatch(setAlert("Profile Updated Successfully"));

      const {data} = res.data;

      dispatch(loadUserService());

      await localStorage.setItem("user", JSON.stringify(data))
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
          type: CREATE_FUND_FAILED,
        });
      } else {
        dispatch({ type: SPINNER, payload: false });
        dispatch(handleGeneralErrors(err));
        dispatch({
          type: CREATE_FUND_FAILED,
        });
        console.log(err);
      }
    });
};

