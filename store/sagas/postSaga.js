import axios from "axios";
import { all, call, put, takeLatest } from "redux-saga/effects";
import {
  fetchPostsFailure,
  fetchPostsSuccess,
  fetchPostFailure,
  fetchPostSuccess
} from "../actions/postAction";
import { postTypes } from "../actionTypes/actionType";

const getPosts = () =>
  axios.get("https://4f14-113-161-93-146.ap.ngrok.io/api/posts");

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

const getPost = (slug) =>
  axios.get(`https://4f14-113-161-93-146.ap.ngrok.io/api/posts/${slug}`);

function* fetchPostSaga(action) {
  try {
    const response = yield call(getPost, action.payload);
    yield put(
      fetchPostSuccess({
        post: response.data.data
      })
    );
  } catch (e) {
    yield put(
      fetchPostFailure({
        error: e.message
      })
    );
  }
}

export function* postsSaga() {
  yield all([takeLatest(postTypes.FETCH_POSTS_REQUEST, fetchPostsSaga)]);
}

export function* postSaga() {
  yield all([takeLatest(postTypes.FETCH_POST_REQUEST, fetchPostSaga)]);
}