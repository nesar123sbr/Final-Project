import { all, takeLatest, put } from "redux-saga/effects";
import axios from "axios";
import { setListTeam } from "./teamAction";
import { Store } from "../../../Store/Store";
import { navigate } from "../../../Shared/Navigation/Nav";

function* getListTeamSaga() {
  try {
    const token = Store.getState().LoginReducer.token;
    const respond = yield axios.get(
      "https://whiteboard-team.herokuapp.com/api/team",
      { headers: { Authorization: `Bearer ${token}` } }
    );
    console.log(respond);
    // const labelName = respond.data.labelName;
    yield put(setListTeam(respond.data.data));
    yield put(navigate("Team", {}));
  } catch (error) {
    console.log(error);
  }
}

function* postTeamSaga(payload) {
  console.log("xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx");
  const token = Store.getState().LoginReducer.token;
  try {
    console.log(token);
    const body = {
      teamName: payload.teamName,
    };
    const respond = yield axios.post(
      "https://whiteboard-team.herokuapp.com/api/team",
      body,
      { headers: { Authorization: `Bearer ${token}` } }
    );
    console.log(respond);
    yield put({ type: "GET_LIST_TEAM" });
  } catch (error) {
    console.log(error.response);
  }
}

export function* teamSaga() {
  yield takeLatest("GET_LIST_TEAM", getListTeamSaga);
  yield takeLatest("POST_TEAM", postTeamSaga);
}
