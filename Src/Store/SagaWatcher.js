import { all } from "redux-saga/effects";
import { LoginSaga } from "../Auth/Login/Redux/Saga";
import { RegisterSaga } from "../Auth/Register/Redux/Saga";
import { teamSaga } from "../Features/TeamPage/Redux/teamSaga";
import { newCardSagas } from "../Features/NewCard/Redux/newCardSaga";
import { forgotPasswordSaga } from "../Auth/ForgotPassword/Redux/Saga";
import { ProfileSaga } from "../Features/ProfilePage/Redux/Saga";
import { LandingSaga } from "../Features/LandingPage/Redux/Saga"

export function* SagaWatcher() {
  yield all([LoginSaga(), RegisterSaga(), forgotPasswordSaga(), ProfileSaga(),newCardSagas(), teamSaga(),LandingSaga()]);

}
