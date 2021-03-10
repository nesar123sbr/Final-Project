import React from "react";
import { all, takeLatest, put, call } from "redux-saga/effects";
import axios from "axios";
import { Store } from "../../../Store/Store";
import * as Navigation from "../../../Shared/Navigation/Nav";
import Toast from "react-native-simple-toast";
import { setListTeams } from "./Action";

function* getSagaTeams({ payload }) {
  const { token } = Store.getState().LoginReducer;
  try {
    const AuthStr = "Bearer ".concat(token);
    const respond = yield axios.get(
      `https://whiteboard-team.herokuapp.com/api/team`,
      { headers: { Authorization: AuthStr } }
    );
    console.log(respond)
    yield put(setListTeams(respond.data.data));
  } catch (error) {
    console.log(error);
  }
}
export const LandingSaga = function* () {
  yield takeLatest("GET_LIST_TEAMS", getSagaTeams);
};
