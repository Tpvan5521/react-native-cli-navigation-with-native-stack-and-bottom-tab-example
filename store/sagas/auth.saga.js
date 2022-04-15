import axios from "axios";
import { all, call, put, takeLatest } from "redux-saga/effects";
import { 
    fetchUserSuccess, 
    fetchUserFailure,
    loginSuccess,
    loginFailure
} from "../actions/auth.action";
import { authTypes } from "../actionTypes";

const getUsers = (payload) =>
  axios.post(`https://fabe-113-161-93-146.ap.ngrok.io/api/users/login`, payload);

function* fetchLoginSaga(action) {
  try {
    const response = yield call(getUsers, action.payload);
    yield put(
      loginSuccess({
        user: { username, email, createdDate },
        id: response.data.id,
        token: response.data.token,
        refreshToken: response.data.refreshToken
        // save token and refreshToken
        // decode and save exp
      }) 
    );
  } catch (e) {
    yield put(
      loginFailure({
        error: e.message
      })
    );
  }
}

const getUser = (id) =>
  axios.get(`https://fabe-113-161-93-146.ap.ngrok.io/api/users/${id}`);

function* fetchUserSaga(action) {
  try {
    const response = yield call(getUser, action.payload);
    const { username, email, createdDate } = response
    yield put(
      fetchUserSuccess({
        user: { username, email, createdDate }
      })
    );
  } catch (e) {
    yield put(
      fetchUserFailure({
        error: e.message
      })
    );
  }
}

export function* loginSaga() {
  yield all([takeLatest(authTypes.LOGIN_REQUEST, fetchLoginSaga)]);
}

export function* userSaga() {
  yield all([takeLatest(authTypes.FETCH_USER_REQUEST, fetchUserSaga)]);
}