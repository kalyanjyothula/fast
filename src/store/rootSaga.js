import { all } from "redux-saga/effects";
import { AppSaga } from "../container/App/saga";
import { MainPageSaga } from "../container/MainPage/saga";

export function* watcherSaga() {
  // console.log(...AppSaga)
  yield all([...AppSaga, ...MainPageSaga]);
  // yield takeLatest(getUser.type, getUserSaga);
}
