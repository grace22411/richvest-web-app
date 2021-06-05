import { v4 as uuid } from "uuid";
import { SET_ALERT, REMOVE_ALERT } from "./types";

let alertMessage = "";
let cautionType = "";

export const setAlert = (msg, alertType) => (dispatch) => {
  const id = uuid();
  if (alertType !== cautionType && alertMessage !== msg) {
    dispatch({
      type: SET_ALERT,
      payload: { msg, alertType, id },
    });
    cautionType = alertType;
    alertMessage = msg;
    setTimeout(() => {
      cautionType = "";
      alertMessage = "";
      dispatch({
        type: REMOVE_ALERT,
        payload: id,
      });
    }, 4000);
  }
};