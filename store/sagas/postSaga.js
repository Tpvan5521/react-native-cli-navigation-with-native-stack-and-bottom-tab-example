import axios from "axios";
import { all, call, put, takeLatest } from "redux-saga/effects";
import {
  fetchPostsFailure,
  fetchPostsSuccess
} from "../actions/postAction";
import { postTypes } from "../actionTypes/actionType";

const getPosts = () =>
  axios.get("https://8036-113-161-93-146.ap.ngrok.io/api/posts");

function* fetchPostsSaga() {
  try {
    const response = yield call(getPosts);
    yield put(
      fetchPostsSuccess({
        posts: response.data.data
      })
    );
  } catch (e) {
    yield put(
      fetchPostsFailure({
        error: e.message
      })
    );
  }
}

function* postSaga() {
  yield all([takeLatest(postTypes.FETCH_POST_REQUEST, fetchPostsSaga)]);
}

export default postSaga;