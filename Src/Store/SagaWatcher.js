import { all } from "redux-saga/effects";
import { LoginSaga } from "../Auth/Login/Redux/Saga";
import { RegisterSaga } from "../Auth/Register/Redux/Saga";
import { teamSaga } from "../Features/TeamPage/Redux/teamSaga";
import { newCardSagas } from "../Features/NewCard/Redux/newCardSaga";
import { TaskSaga } from "../Features/TaskPage/Redux/taskSaga";

export function* SagaWatcher() {
  yield all([
    LoginSaga(),
    RegisterSaga(),
    newCardSagas(),
    teamSaga(),
    TaskSaga(),
  ]);
}
