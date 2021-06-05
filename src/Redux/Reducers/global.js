import {SPINNER, GENERAL_ERROR} from '../Actions/types';

const initialState = {loading: false, errors: {}};

export default function (state = initialState, action) {
  const {type, payload} = action;
  switch (action.type) {
    case SPINNER:
      return {
        loading: payload,
      };
    case GENERAL_ERROR:
      return {
        ...state,
        errors: payload,
      };
    default:
      return state;
  }
}
