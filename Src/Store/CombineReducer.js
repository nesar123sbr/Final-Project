import { combineReducers } from "redux";
import { LoginReducer } from "../Auth/Login/Redux/Reducer";
import { RegisterReducer } from "../Auth/Register/Redux/Reducer";
import { GlobalReducer } from "./GlobalReducer";
import { TeamBoardReducer } from "../Features/TeamBoard/Redux/Reducer";
import { newCardReducer } from "../Features/NewCard/Redux/newCardReducer";
import { teamReducer } from "../Features/TeamPage/Redux/teamReducer";
import { taskReducer } from "../Features/TaskPage/Redux/taskReducer";
import { LandingReducer } from "../Features/LandingPage/Redux/Reducer";
import { EmailSentReducer } from "../Auth/EmailSent/Redux/Reducer";
import { ProfileReducer } from "../Features/ProfilePage/Redux/Reducer";
import { ListDataReducer } from "../Features/TeamBoardDetail/Redux/Reducer";

export const AllReducer = combineReducers({
  LoginReducer,
  RegisterReducer,
  GlobalReducer,
  TeamBoardReducer,
  newCardReducer,
  teamReducer,
  taskReducer,
  LandingReducer,
  EmailSentReducer,
  ProfileReducer,
  ListDataReducer,
});
