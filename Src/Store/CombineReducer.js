import { combineReducers } from "redux";
import { LoginReducer } from "../Auth/Login/Redux/Reducer";
import { RegisterReducer } from "../Auth/Register/Redux/Reducer";
import { GlobalReducer } from "./GlobalReducer";
import { TeamBoardReducer } from "../Features/TeamBoard/Redux/Reducer";
import { newCardReducer } from "../Features/NewCard/Redux/newCardReducer";
import { teamReducer } from "../Features/TeamPage/Redux/teamReducer";
import { taskReducer } from "../Features/TaskPage/Redux/taskReducer";

export const AllReducer = combineReducers({
  LoginReducer,
  RegisterReducer,
  GlobalReducer,
  TeamBoardReducer,
  newCardReducer,
  teamReducer,
  taskReducer,
});
