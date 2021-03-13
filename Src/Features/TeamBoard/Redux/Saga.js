import { all, takeLatest, put, call } from "redux-saga/effects";
import axios from "axios";
import { Store } from "../../../Store/Store";
import qs from "qs";
import * as Navigation from "../../../Shared/Navigation/Nav";
import Toast from "react-native-simple-toast";
import { setCardTeam, getListTeamBoard } from "./Action";
import { setLoading } from "../../../Store/GlobalAction";

function* getSagaTeamBoard(payload) {
  const { token } = Store.getState().LoginReducer;
  try {
    console.log("kimbek", payload._id);
    console.log(
      `https://whiteboard-team.herokuapp.com/api/team/${payload._id}/team`
    );
    const AuthStr = "Bearer ".concat(token);
    // const respond = yield axios.get(
    //   `https://whiteboard-team.herokuapp.com/api/team/${payload.id}/team`,
    //   { headers: { Authorization: AuthStr } }
    // );
    const config = {
      url: `https://whiteboard-team.herokuapp.com/api/team/${payload._id}/team`,
      method: "get",
      data: qs.parse(),
      headers: { Authorization: AuthStr },
      validateStatus: (status) => status < 500,
    };

    const respond = yield call(axios, config);
    console.log("teamRes", respond.data.message.boardId);
    yield put(setCardTeam(respond.data.message.boardId));
  } catch (error) {
    console.log("frr", error);
  }
}

function* postSaga(payload) {
  const { token } = Store.getState().LoginReducer;
  try {
    yield put(setLoading(true));

    const AuthStr = "Bearer ".concat(token);
    const body = qs.stringify({
      title: `${payload.saveBoard}`,
      teamId: `${payload._id}`,
    });
    console.log(body, "syggggggggg");
    const config = {
      url: "https://whiteboard-team.herokuapp.com/api/board",
      method: "post",
      data: body,
      headers: { Authorization: AuthStr },
      validateStatus: (status) => status < 500,
    };
    const respond = yield call(axios, config);
    console.log(respond, "bawah ni");
    const body1 = qs.stringify({
      boardId: `${respond.data.data._id}`,
    });
    console.log(body1, "anak telantar");
    const config1 = {
      url: `https://whiteboard-team.herokuapp.com/api/boardid/${payload._id}`,
      method: "put",
      data: body1,
      headers: { Authorization: AuthStr },
      validateStatus: (status) => status < 500,
    };
    const response = yield call(axios, config1);
    console.log(response, "berhasil");
    yield put(getListTeamBoard(payload._id));
  } catch (error) {
    console.log("wi", error);
  } finally {
    yield put(setLoading(false));
  }
}

export function* TeamBoardSaga() {
  yield all([
    takeLatest("POST_NEW_BOARD", postSaga),
    takeLatest("GET_LIST_TEAM_BOARD", getSagaTeamBoard),
  ]);
}
