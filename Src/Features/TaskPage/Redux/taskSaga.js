import { all, takeLatest, put } from "redux-saga/effects";
import axios from "axios";
import { setListTask } from "../Redux/taskAction";
import * as Navigation from "../../../Shared/Navigation/Nav";

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

function* getDataCardSaga(payload) {
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
    yield Navigation.navigate({
      name: "TeamBoardDetail",
      params: {
        _id: payload.payload._id,
        title: payload.payload.title,
        teamName: payload.payload.teamName,
      },
    });
  } catch (error) {
    console.log(error);
  }
}
export function* TaskSaga() {
  yield all([
    takeLatest("GET_LIST_TASK", getTaskFromSaga),
    takeLatest("GET_CARD_DATA", getDataCardSaga),
  ]);
}
