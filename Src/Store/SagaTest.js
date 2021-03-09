import { all, put, takeLatest } from "redux-saga/effects";
import { getListLabel } from "../Features/NewCard/Redux/newCardAction";

function* getAllListLabels() {
  console.log("test");
}

export function* CardSagaWatcher() {
  yield all([yield takeLatest(getListLabel().type, getAllListLabels)]);
}
