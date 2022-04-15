import { authTypes } from "../actionTypes"

const initialState = {
  pending: false,
  error: null,
  user: null,
  isAuthenticated: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case authTypes.LOGIN_REQUEST:
      return {
        ...state,
        pending: true
      };
    case authTypes.LOGIN_SUCCESS:
      return {
        ...state,
        pending: false,
        user: action.payload.user,
        isAuthenticated: true,
        error: null
      };
    case authTypes.LOGIN_FAILURE:
      return {
        ...state,
        pending: false,
        error: action.payload.error
      };
    case authTypes.FETCH_USER_REQUEST:
      return {
        ...state,
        pending: true
      };
    case authTypes.FETCH_USER_SUCCESS:
      return {
        ...state,
        pending: false,
        user: action.payload.user,
        error: null
      };
    case authTypes.FETCH_USER_FAILURE:
      return {
        ...state,
        pending: false,
        error: action.payload.error
      };
    default:
      return {
        ...state
      };
  }
};
