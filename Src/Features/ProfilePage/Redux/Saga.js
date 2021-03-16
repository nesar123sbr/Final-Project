import { all, takeLatest, put, call } from "redux-saga/effects";
import axios from "axios";
import { Store } from "../../../Store/Store";
import qs from "qs";
import { Alert } from "react-native";
import * as Navigation from "../../../Shared/Navigation/Nav";
import Toast from "react-native-simple-toast";
import { setLoading } from "../../../Store/GlobalAction";

function* getSagaProfile({ payload }) {
  const { token } = Store.getState().LoginReducer;
  try {
    const AuthStr = "Bearer ".concat(token);
    const respond = yield axios.get(
      `https://whiteboard-signup.herokuapp.com/profile`,
      { headers: { Authorization: AuthStr } }
    );
    yield put({
      type: "SET_PROFILE",
      photo:respond.data.data.photo,
      email: respond.data.data.email,
      name: respond.data.data.name,
      role: respond.data.data.role,
      industry: respond.data.data.industry,
      company_name: respond.data.data.company_name,
    });
    console.log("resProfile", respond);
  } catch (error) {
    console.log(error);
  }
}
function* patchSagaPassword(payload) {
  const { token } = Store.getState().LoginReducer;
  try {
    yield put(setLoading(true));

    const AuthStr = "Bearer ".concat(token);
    const body = qs.stringify({
      current_password: `${payload.currentPass}`,
      new_password: `${payload.newPass}`,
    });
    console.log(body, "body ku");
    const config = {
      url: "https://whiteboard-signup.herokuapp.com/update-my-password",
      method: "patch",
      data: body,
      headers: { Authorization: AuthStr },
      validateStatus: (status) => status < 500,
    };
    const respond = yield call(axios, config);
    console.log(respond, "bawah ni");
    if (respond.data.status == 201) {
      yield put({ type: "LOG_OUT" });
      yield put({ type: "SET_OUT_PROFILE" });
      Toast.show(respond.data.message);
      yield Navigation.navigate({
        name: "StackNav",
        params: {},
      });
    } else {
      yield put({ type: "LOG_OUT" });
      Toast.show(respond.data.message);
      yield put({ type: "SET_OUT_PROFILE" });
      yield Navigation.navigate({
        name: "StackNav",
        params: {},
      });
    }
  } catch (error) {
    console.log("inidninwdndwi", error);
  } finally {
    yield put(setLoading(false));
  }
}
function* patchSagaEmail(payload) {
  const { token } = Store.getState().LoginReducer;
  try {
    yield put(setLoading(true));

    const AuthStr = "Bearer ".concat(token);
    const body = new FormData();
    body.append("email", payload.email);
    // const body = qs.stringify({
    //   email: `${payload.email}`,
    // });
    console.log(body, "body ku");
    const config = {
      url: "https://whiteboard-signup.herokuapp.com/profile",
      method: "patch",
      data: body,
      headers: { Authorization: AuthStr },
      validateStatus: (status) => status < 500,
    };
    const respond = yield call(axios, config);
    console.log(respond.data.status, "bawah ni");
    if (respond.status == 200) {
      yield put({ type: "LOG_OUT" });
      yield put({ type: "SET_OUT_PROFILE" });
      Toast.show(respond.data.status);
      yield Navigation.navigate({
        name: "StackNav",
        params: {},
      });
    } else {
      Toast.show(respond.data.status);
    }
  } catch (error) {
    console.log("ini error", error);
  } finally {
    yield put(setLoading(false));
  }
}
function* patchSagaProfile(payload) {
  const { token } = Store.getState().LoginReducer;
  try {
    yield put(setLoading(true));

    const AuthStr = "Bearer ".concat(token);
    const body = new FormData();
    body.append("name", payload.addName);
    body.append("role", payload.addRole);
    body.append("industry", payload.addIndustry);
    body.append("company_name", payload.addCompany);
    body.append("photo", {uri:payload.response.uri,type:payload.response.type,name:payload.response.fileName});
    console.log(body, "body ku");
    const config = {
      url: "https://whiteboard-signup.herokuapp.com/profile",
      method: "patch",
      data: body,
      headers: { Authorization: AuthStr,"Content-Type":"multipart/form-data" },
      validateStatus: (status) => status < 500,
    };
    const respond = yield call(axios, config);
    console.log(respond, "bawah ni yaaa");
    if (respond.status == 200) {
      yield Navigation.navigate({
        name: "Profile",
        params: {},
      });
    } else {
      console.log("naga", respond.data.status);
      Toast.show(respond.data.status);
    }
  } catch (error) {
    console.log("ini error", error);
  } finally {
    yield put(setLoading(false));
  }
}
export function* ProfileSaga() {
  yield all([
    takeLatest("GET_PROFILE", getSagaProfile),
    takeLatest("PATCH_PASSWORD", patchSagaPassword),
    takeLatest("PATCH_EMAIL", patchSagaEmail),
    takeLatest("PATCH_PROFILE", patchSagaProfile),
  ]);
}
