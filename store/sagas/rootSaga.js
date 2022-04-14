import { all, fork } from "redux-saga/effects";
import postSaga from "./postSaga";

export function* rootSaga() {
  yield all([fork(postSaga)]);
}
