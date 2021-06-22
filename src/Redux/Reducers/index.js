import { combineReducers } from "redux";
import alert from "./alert";
import auth from "./auth";
import projuctFundReducer from "./project-fund-mgt";
import global from "./global";

const rootReducers = combineReducers({
  alert,
  auth,
  global,
  projectFund: projuctFundReducer,
});
export default rootReducers;