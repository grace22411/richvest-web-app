import {
  REGISTER_FAIL,
  REGISTER_SUCCESS,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  LOADING,
  USER_EMAIL_VERIFIED,
} from "../Actions/types";

const initialState = {
  token: localStorage.getItem("token"),
  user: JSON.parse(localStorage.getItem("user")),
  userDetails: JSON.parse(localStorage.getItem("userDetails")),
  isAuthenticated: false,
  loading: true,
  isEmailVerified: false,
};

export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case USER_LOADED:
      return {
        ...state,
        isAuthenticated: true,
        loading: false,
      };
    case LOADING:
      return {
        ...state,
        loading: true,
      };
    case REGISTER_SUCCESS:
    case LOGIN_SUCCESS:
      localStorage.setItem("token", payload);
      // localStorage.setItem("user", JSON.stringify(payload.objectValue.user));
      // localStorage.setItem(
      //   "userDetails",
      //   JSON.stringify(payload.objectValue.userProfileInformation)
      // );
      console.log(payload)

      return {
        ...state,
        ...payload.objectValue,
        user: JSON.parse(localStorage.getItem("user")),
        userDetails: JSON.parse(localStorage.getItem("userDetails")),
        isAuthenticated: true,
        loading: false,
      };
    case AUTH_ERROR:
    case LOGIN_FAIL:
    case REGISTER_FAIL:
    case LOGOUT:
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      return {
        ...state,
        token: null,
        isAuthenticated: false,
        loading: false,
      };
    case USER_EMAIL_VERIFIED:
      return {
        ...state,
        isEmailVerified: payload,
      };
    default:
      return state;
  }
}