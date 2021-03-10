import { all, takeLatest, put } from "redux-saga/effects";
import axios from "axios";
import { setLabel, setListLabel } from "./newCardAction";

// function* postCard() {
//   try {
//     const body = {
//       title: action.payload,
//       desc: action.payload,
//       selectedMembers: action.payload,
//       priority: action.payload,
//       assign: action.payload,
//       selectedDate: action.payload,
//       selectedLabels: action.payload,
//     };
//     const respond = yield axios.get("whiteboard-team.herokuapp.com/card", body);
//     console.log(respond);
//     const allGenres = respond.data.genres;
//     yield put({ type: "SET_GENRES", payload: allGenres });
//   } catch (error) {
//     console.log(error);
//   }
// }

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
  // yield takeLatest("GET_LABEL", getLabel);
}
