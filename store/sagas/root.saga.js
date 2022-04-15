import { all, fork } from "redux-saga/effects";
import {postSaga, postsSaga} from "./post.saga";

export function* rootSaga() {
  yield all([fork(postsSaga), fork(postSaga)]);
}
