import { all, call, put, takeLatest } from "redux-saga/effects";
import axios from "axios";
import * as Navigation from "../../../Shared/Navigation/Nav";
import { Alert } from "react-native";
import Toast from "react-native-simple-toast";
import { setLoading } from "../../../Store/GlobalAction";

function* forgotPassword(payload) {
  try {
    const { changePass } = payload;
    const body = {
      email: changePass,
    };
    const config = {
      url: "https://whiteboard-signup.herokuapp.com/forgot-password",
      method: "post",
      data: body,
      validateStatus: (status) => status < 500,
    };
    const respond = yield call(axios, config);
    if (respond.status == 200) {
      yield put({
        type: "SET_RESPOND",
        respond: respond.data.message,
      });
      yield Navigation.navigate({
        name: "EmailSent",
        params: {},
      });
      console.log("berhasil", respond.data.message);
    }
  } catch (error) {
    console.log(error);
  }
}
export function* forgotPasswordSaga() {
  yield takeLatest("CHANGE_PASSWORD", forgotPassword);
}
