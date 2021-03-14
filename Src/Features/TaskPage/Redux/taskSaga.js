import { all, takeLatest, put } from "redux-saga/effects";
import axios from "axios";
import { setListTask } from "../Redux/taskAction";

function* getTaskFromSaga() {
  try {
    console.log("VVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV");
    // const token = Store.getState().LoginReducer.token;
    const respond = yield axios.get(
      "https://whiteboard-team.herokuapp.com/card"
      // {
      // headers: {},
      // }
    );
    // let filtered = respond.data.data;
    console.log(respond.data.data, "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxx");
    yield put(setListTask(respond.data.data));
  } catch (error) {
    console.log(error);
  }
}

export function* TaskSaga() {
  yield takeLatest("GET_LIST_TASK", getTaskFromSaga);
}
