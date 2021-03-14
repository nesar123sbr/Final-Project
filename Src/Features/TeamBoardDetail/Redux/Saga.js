import { all, takeLatest, put, call } from "redux-saga/effects";
import axios from "axios";
import { Store } from "../../../Store/Store";
import qs from "qs";
import * as Navigation from "../../../Shared/Navigation/Nav";
import Toast from "react-native-simple-toast";
import { setLoading } from "../../../Store/GlobalAction";
import { getListData,setListData } from "./Action";

function* getSagaTeamBoardDetail(payload) {
  try {
    const config = {
      url: `https://whiteboard-team.herokuapp.com/listboard/${payload._id}`,
      method: "get",
      headers: {},
      validateStatus: (status) => status < 500,
    };

    const respond = yield call(axios, config);
    console.log("listRes", respond.data.data);
    yield put(setListData(respond.data.data));
  } catch (error) {
    console.log("frr", error);
  }
}

function* postSagaList(payload) {
  try {
    yield put(setLoading(true));

    const body = qs.stringify({
      title: `${payload.saveList}`,
    });

    console.log(body, "syggggggggg");

    const config = {
      url: "https://whiteboard-team.herokuapp.com/list",
      method: "post",
      data: body,
      headers: { "content-type": "application/x-www-form-urlencoded" },
    };
    const respond = yield call(axios, config);
    console.log(respond, "bawah ni");
    const body1 = qs.stringify({
      boardId: `${payload._id}`,
    });
    console.log(respond.data.data._id, "anak telantar");
    const config1 = {
      url: `https://whiteboard-team.herokuapp.com/list/${respond.data.data._id}/board`,
      method: "put",
      data: body1,
      headers: { "content-type": "application/x-www-form-urlencoded" },
      validateStatus: (status) => status < 500,
    };
    const response = yield call(axios, config1);
    console.log(response, "berhasil");
    yield put(getListData(payload._id));
  } catch (error) {
    console.log("wi", error);
  } finally {
    yield put(setLoading(false));
  }
}

export function* TeamBoardDetailSaga() {
  yield all([
    takeLatest("POST_NEW_LIST", postSagaList),
    takeLatest("GET_LIST_DATA", getSagaTeamBoardDetail),
  ]);
}
