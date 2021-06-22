import {
    GET_ALL_FUND,
  } from "../Actions/types";
  
  const initialState = {
    funds: [],
  };
  
const projuctFundReducer = (state = initialState, handler) => {
    const { type, payload } = handler;

    switch(type){
        case GET_ALL_FUND:
            console.log(payload);
            return{
                ...state,
                funds: payload
            }
           
        default:
            return state;
    } 
   
}

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