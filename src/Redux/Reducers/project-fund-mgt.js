import {
  GET_ALL_FUND,
  CREATE_FUND_SUCCESS,
  LOADING,
  CREATE_FUND_PENDING,
  CREATE_FUND_FAILED,
} from "../Actions/types";

const initialState = {
  funds: [],
  loading: true,
  createFundsLoading: false,
  hasCreatedFunds: false,
};

const projuctFundReducer = (state = initialState, handler) => {
  const { type, payload } = handler || {};

  switch (type) {
    case GET_ALL_FUND:
      console.log(payload);
      return {
        ...state,
        funds: payload,
        loading: false,
      };
    case CREATE_FUND_PENDING:
      return {
        ...state,
        hasCreatedFunds: false,
        createFundsLoading: true,
      };
    case CREATE_FUND_SUCCESS:
      return {
        ...state,
        hasCreatedFunds: true,
        createFundsLoading: false,
      };
    case CREATE_FUND_FAILED:
      return {
        ...state,
        hasCreatedFunds: false,
        createFundsLoading: false,
      };
    default:
      return state;
  }
};

export default projuctFundReducer;

// switch (type) {
// //   case GET_ALL_ADMINS:
// //     return {
// //       ...state,
// //       superAdmins: [...payload],
// //     };

//   case GET_ALL_FUND:

// //   case GET_ALL_SUPERADMIN_DASHBOARD:
// //     return {
// //       ...state,
// //       superAdminDashboards: payload,
// //     };
//   default:
//     return state;
// }
