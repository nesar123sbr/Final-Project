import { all } from "redux-saga/effects";
import { LoginSaga } from "../Auth/Login/Redux/Saga";
import { RegisterSaga } from "../Auth/Register/Redux/Saga";
import { forgotPasswordSaga } from "../Auth/ForgotPassword/Redux/Saga";

export function* SagaWatcher() {
  yield all([LoginSaga(), RegisterSaga(), forgotPasswordSaga()]);
}
