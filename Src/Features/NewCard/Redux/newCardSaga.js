import { all, takeLatest, put, takeEvery, call } from "redux-saga/effects";
import axios from "axios";
import { setListLabel, putLabelId } from "./newCardAction";
import { putListId } from "../../TeamBoardDetail/Redux/Action";

function* postCardSaga(postCardData, labelId, boardId, teamId, listId) {
  console.log(teamId, "teamId");
  console.log(labelId, "labelId");
  console.log(boardId, "boardId");
  try {
    const body = {
      title: postCardData.title,
      description: postCardData.desc,
      priority: postCardData.priority,
      dueDate: postCardData.selectedDate,
    };

    const respond = yield call(axios, {
      method: "post",
      url: "https://whiteboard-team.herokuapp.com/card",
      data: body,
    });

    yield labelId.forEach((value) => {
      const label = axios.put(
        `https://whiteboard-team.herokuapp.com/card/${respond.data.data._id}/label`,
        { labelId: value }
      );
      console.log(label, "xxxxxxxxxxlabel");
    });
    const board = yield axios.put(
      `https://whiteboard-team.herokuapp.com/card/${respond.data.data._id}/board`,
      { boardId }
    );
    console.log(board, "xxxxxxxxxxboard");
    const team = yield axios.put(
      `https://whiteboard-team.herokuapp.com/card/${respond.data.data._id}/team`,
      { teamId }
    );
    console.log(team, "xxxxxxxxxxteam");
    const list = yield axios.put(
      `https://whiteboard-team.herokuapp.com/card/${respond.data.data._id}/list `,
      { listId }
    );
    console.log(list, "xxxxxxxxxxlist");
  } catch (error) {
    console.log(error.response);
  }
}

function* combinedSagas({ postCardData, labelId, boardId, teamId, listId }) {
  yield postCardSaga(postCardData, labelId, boardId, teamId, listId);
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
  yield takeLatest("POST_LABEL", postLabelSaga);
  yield takeLatest("GET_LIST_LABEL", getLabelFromSaga);
  yield takeLatest("POST_CARD", postCardSaga);
  yield takeEvery("COMBINED_ACTION", combinedSagas);
}
