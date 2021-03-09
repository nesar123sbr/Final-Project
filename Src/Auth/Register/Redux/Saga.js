import { all, call, put, takeLatest } from "redux-saga/effects";
import axios from "axios";
import * as Navigation from "../../../Shared/Navigation/Nav";
import qs from "qs";
import { setLoading } from "../../../Store/GlobalAction";
import Toast from "react-native-simple-toast";

function* Register(payload) {
  try {
    yield put(setLoading(true));
    const body = qs.stringify({
      name: `${payload.name}`,
      email: `${payload.email}`,
      password: `${payload.password}`,
    });
    console.log(body, "body ku");
    // const respond = yield axios.post(
    //   'https://whiteboard-signup.herokuapp.com/signup',
    //   body,
    //   {
    //     headers: {
    //       'Content-Type': 'application/x-www-form-urlencoded',
    //     },
    //   },
    // );
    const config = {
      url: "https://whiteboard-signup.herokuapp.com/signup",
      method: "post",
      data: body,
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      validateStatus: (status) => status < 500,
    };
    const respond = yield call(axios, config);
    console.log(respond, "bawah ni");
    if (respond.data.status == 201) {
      yield put({
        type: "SET_NEW_USER",
        name: payload.name,
        email: payload.email,
        password: payload.password,
      });

      Toast.show(respond.data.data.message);
      yield Navigation.navigate({
        name: "Login",
        params: {},
      });
      console.log(respond, "ini rspdddssd");
    } else {
      console.log(respond, "ini rsp err");
      Toast.show(respond.data.message);
    }
  } catch (error) {
    console.log("inidninwdndwi", error);
  } finally {
    yield put(setLoading(false));
  }
}

export function* RegisterSaga() {
  yield takeLatest("REGISTER", Register);
}
