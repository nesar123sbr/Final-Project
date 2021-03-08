import React from "react";
import { all, takeLatest, put, call } from "redux-saga/effects";
import axios from "axios";
import { Store } from "../../../Store/Store";
import qs from "qs";
import { Alert } from "react-native";
import * as Navigation from "../../../Shared/Navigation/Nav";
import Toast from "react-native-simple-toast";

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
      email: respond.data.data.email,
      name: respond.data.data.name,
      role: respond.data.data.role,
      industry: respond.data.data.industry,
      company_name: respond.data.data.company_name,
    });
  } catch (error) {
    console.log(error);
  }
}
function* patchSagaPassword(payload) {
  const { token } = Store.getState().LoginReducer;
  try {
    // yield put(setLoading(true))

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
      yield put({type:"SET_OUT_PROFILE"})
      Toast.show(respond.data.message);
      yield Navigation.navigate({
        name: "StackNav",
        params: {},
      });
    } else {
      yield put({ type: "LOG_OUT" });
      Toast.show(respond.data.message);
      yield put({type:"SET_OUT_PROFILE"})
      yield Navigation.navigate({
        name: "StackNav",
        params: {},
      });
    }
  } catch (error) {
    console.log("inidninwdndwi", error);
  }
}
function* patchSagaEmail(payload) {
  const { token } = Store.getState().LoginReducer;
  try {
    // yield put(setLoading(true))

    const AuthStr = "Bearer ".concat(token);
    const body = qs.stringify({
      email: `${payload.email}`,
    });
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
      yield put({type:"SET_OUT_PROFILE"})
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
  }
}
function* patchSagaProfile(payload){
  const { token } = Store.getState().LoginReducer;
  try {
    // yield put(setLoading(true))
    
    const AuthStr = "Bearer ".concat(token);
    const body = qs.stringify({
      name:`${payload.addName}`,
      role:`${payload.addRole}`,
      industry:`${payload.addIndustry}`,
      company_name:`${payload.addCompany}`
    });
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
      yield put({type:"SET_OUT_PROFILE"})
      Toast.show(respond.data.status);
      yield Navigation.navigate({
        name: "StackNav",
        params: {},
      });
    } else {
      console.log('naga',respond.data.status)
      Toast.show(respond.data.status);
    }
  } catch (error) {
    console.log("ini error", error);
  }
}
export function* ProfileSaga() {
  yield all([
    takeLatest("GET_PROFILE", getSagaProfile),
    takeLatest("PATCH_PASSWORD", patchSagaPassword),
    takeLatest("PATCH_EMAIL", patchSagaEmail),
    takeLatest("PATCH_PROFILE",patchSagaProfile)
  ]);
}
