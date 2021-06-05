import { combineReducers } from "redux";
import alert from "./alert";
import auth from "./auth";
import global from "./global";

const rootReducers = combineReducers({
  alert,
  auth,
  global,
});
export default rootReducers;