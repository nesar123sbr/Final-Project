import { all } from "redux-saga/effects";
import { LoginSaga } from "../Auth/Login/Redux/Saga";
import { RegisterSaga } from "../Auth/Register/Redux/Saga";
<<<<<<< HEAD
import { teamSaga } from "../Features/TeamPage/Redux/teamSaga";
import { newCardSagas } from "../Features/NewCard/Redux/newCardSaga";

export function* SagaWatcher() {
  yield all([LoginSaga(), RegisterSaga(), newCardSagas(), teamSaga()]);
=======
import { forgotPasswordSaga } from "../Auth/ForgotPassword/Redux/Saga";
import { ProfileSaga } from "../Features/ProfilePage/Redux/Saga";

export function* SagaWatcher() {
  yield all([LoginSaga(), RegisterSaga(), forgotPasswordSaga(), ProfileSaga()]);
>>>>>>> 0836c2e6432f28d81246e3ea47dc391ae143faeb
}
