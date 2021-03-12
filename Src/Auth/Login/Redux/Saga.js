import { all, call, put, takeLatest } from "redux-saga/effects";
import axios from "axios";
import * as Navigation from "../../../Shared/Navigation/Nav";
import Toast from "react-native-simple-toast";
import { setLoading } from "../../../Store/GlobalAction";
function* Login(payload) {
  try {
    yield put(setLoading(true));
    const { email, password } = payload;
    const body = {
      email,
      password,
    };
    // const respond = yield axios.post(
    //   'https://whiteboard-signup.herokuapp.com/login',
    //   body,
    // ).then((result) => console.log('hhhhhh',result))
    const config = {
      url: "https://whiteboard-signup.herokuapp.com/login",
      method: "post",
      data: body,
      validateStatus: (status) => status < 500,
    };
    const respond = yield call(axios, config); //function => parameter si axios
    console.log(respond, "ini res1");
    if (respond.status == 200) {
      yield put({
        type: "SET_TOKEN",
        email,
        token: respond.data.token,
      });
      Toast.show(respond.data.message);
      yield Navigation.navigate({
        name: "BottomTab",
        params: {},
      });
    } else {
      console.log(respond.data.message);
      Toast.show(respond.data.message);
    }
  } catch (error) {
    console.log("hdhdydyh", error);
  } finally {
    yield put(setLoading(false));
  }
}
export function* LoginSaga() {
  yield takeLatest("LOGIN", Login);
}
