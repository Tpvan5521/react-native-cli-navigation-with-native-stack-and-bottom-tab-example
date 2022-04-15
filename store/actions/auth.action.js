import { authTypes } from "../actionTypes";

export const loginRequest = (payload) => ({
  type: authTypes.LOGIN_REQUEST,
  payload
});

export const loginSuccess = (
  payload
) => ({
  type: authTypes.LOGIN_SUCCESS,
  payload
});

export const loginFailure = (
  payload
) => ({
  type: authTypes.LOGIN_FAILURE,
  payload
});

export const fetchUserRequest = (payload) => ({
  type: authTypes.FETCH_USER_REQUEST,
  payload
});

export const fetchUserSuccess = (
  payload
) => ({
  type: authTypes.FETCH_USER_SUCCESS,
  payload
});

export const fetchUserFailure = (
  payload
) => ({
  type: authTypes.FETCH_USER_FAILURE,
  payload
});
