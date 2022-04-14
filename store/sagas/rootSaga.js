import { all, fork } from "redux-saga/effects";
import {postSaga, postsSaga} from "./postSaga";

export function* rootSaga() {
  yield all([fork(postsSaga), fork(postSaga)]);
}
