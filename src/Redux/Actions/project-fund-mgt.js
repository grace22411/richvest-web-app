import axios from "axios";
import { LOADING, SPINNER, GET_ALL_FUND } from "./types";
import setAuthToken from "../../features/setAuthToken";
import { handleGeneralErrors } from "../../SharedComponents.js/globalService/handleGeneralError.js";
import { endpoints } from "./endpoints";
import { setAlert } from "./alert";
import * as jwt from "jsonwebtoken";


export const fetchAllProjectFundPaginated =
(PageNumber = 1, PageSize = 10,) =>
async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  const user = JSON.parse(localStorage.getItem('user'))
  const params = {
      PageNumber: PageNumber,
      pageSize: PageSize,
      userId:user?.userId
    };
    dispatch({ type: LOADING });
    try {
      dispatch({ type: SPINNER, payload: true });
      const res = await axios.get(`${endpoints.GetAllProjectFunds}`, {params,});

      dispatch({ type: SPINNER, payload: false });
      console.log(res.data);
      dispatch({
        type: GET_ALL_FUND,
        payload: res.data,
      });
      console.log(user)
    } catch (err) {
      dispatch(handleGeneralErrors(err));
    }
  };

export const createFund = (payload) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  dispatch({ type: LOADING });

  dispatch({ type: SPINNER, payload: true });
  await axios
    .post(`${endpoints.CreateProjectFund}`, payload, config)
    .then((res) => {
      dispatch(setAlert("Fund Created", "success"));
      dispatch(fetchAllProjectFundPaginated());
      console.log(res.data);
    })
    .catch((err) => {
      dispatch(handleGeneralErrors(err));
    });
  dispatch({ type: SPINNER, payload: false });
};
