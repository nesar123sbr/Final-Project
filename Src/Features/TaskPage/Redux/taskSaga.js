import { all, takeLatest, put } from "redux-saga/effects";
import axios from "axios";
import { setListTask } from "../Redux/taskAction";

function* getTaskFromSaga() {
  try {
    // const token = Store.getState().LoginReducer.token;
    const respond = yield axios.get(
      "http://whiteboard-team.herokuapp.com/card"
      // {
      // headers: { Authorization: `Bearer ${token}` },
      // }
    );
    console.log(respond.data.data, "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxx");
    yield put(setListTask(respond.data.data));
  } catch (error) {
    console.log(error);
  }
}

export function* TaskSaga() {
  yield takeLatest("GET_LIST_TASK", getTaskFromSaga);
}
