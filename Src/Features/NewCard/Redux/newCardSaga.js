import { all, takeLatest, put } from "redux-saga/effects";
import axios from "axios";
import { setListLabel, putLabelId } from "./newCardAction";
import { putTeamId } from "../../TeamPage/Redux/teamAction";

function* postCardSaga(payload) {
  try {
    const body = {
      title: payload.title,
      description: payload.desc,
      priority: payload.priority,
      dueDate: payload.selectedDate,
    };
    console.log(body, "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx");
    const respond = yield axios.post(
      "https://whiteboard-team.herokuapp.com/card",
      body
    );
    console.log(respond);
  } catch (error) {
    console.log(error.response);
  }
}

function* assignTeamId(payload) {
  try {
    const body = { teamId: payload._id };
    const respond = yield axios.put(
      "https://whiteboard-team.herokuapp.com/api/card",
      body
    );
    console.log(respond);
    yield put(putTeamId(respond.data.data));
  } catch (error) {
    console.log(error.response);
  }
}

function* assignLabelId(payload) {
  try {
    const body = {
      labelId: payload.labelId,
    };
    const respond = yield axios.put(
      "https://whiteboard-team.herokuapp.com/api/card",
      body
    );
    console.log(respond);
    yield put(putLabelId(respond.data.data));
  } catch (error) {
    console.log(error.response);
  }
}

function* postLabelSaga(payload) {
  try {
    const body = {
      labelName: payload.labelName,
    };
    const respond = yield axios.post(
      "https://whiteboard-team.herokuapp.com/label",
      body
    );
    console.log(respond);
    yield put({ type: "GET_LIST_LABEL" });
  } catch (error) {
    console.log(error);
  }
}

function* getLabelFromSaga() {
  try {
    const respond = yield axios.get(
      "https://whiteboard-team.herokuapp.com/label "
    );
    console.log(respond);
    // const labelName = respond.data.labelName;
    yield put(setListLabel(respond.data.data, true));
  } catch (error) {
    console.log(error);
  }
}

export function* newCardSagas() {
  // yield takeLatest("SET_CARD", postCard);
  yield takeLatest("POST_LABEL", postLabelSaga);
  yield takeLatest("GET_LIST_LABEL", getLabelFromSaga);
  yield takeLatest("POST_CARD", postCardSaga);
  yield takeLatest("PUT_TEAM_ID", assignTeamId);
  yield takeLatest("SET_LIST_LABEL", assignLabelId);
  // yield takeLatest("GET_LABEL", getLabel);
}
