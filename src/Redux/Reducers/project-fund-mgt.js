import {
    GET_ALL_FUND,
    LOADING,
  } from "../Actions/types";
  
  const initialState = {
    funds: [],
    loading:true
  };
  
const projuctFundReducer = (state = initialState, handler) => {
    const { type, payload } = handler;

    switch(type){
        case GET_ALL_FUND:
            console.log(payload);
            return{
                ...state,
                funds: payload,
                loading: false,
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