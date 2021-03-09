import { combineReducers } from "redux";
import { LoginReducer } from "../Auth/Login/Redux/Reducer";
import { RegisterReducer } from "../Auth/Register/Redux/Reducer";
import { GlobalReducer } from "./GlobalReducer";
import { TeamBoardReducer } from "../Features/TeamBoard/Redux/Reducer";
import { newCardReducer } from "../Features/NewCard/Redux/newCardReducer";
import { teamReducer } from "../Features/TeamPage/Redux/teamReducer";
import { taskReducer } from "../Features/TaskPage/Redux/taskReducer";
<<<<<<< HEAD
=======
import { EmailSentReducer } from "../Auth/EmailSent/Redux/Reducer";
import {ProfileReducer} from '../Features/ProfilePage/Redux/Reducer'

>>>>>>> 0836c2e6432f28d81246e3ea47dc391ae143faeb
export const AllReducer = combineReducers({
  LoginReducer,
  RegisterReducer,
  GlobalReducer,
  TeamBoardReducer,
  newCardReducer,
  teamReducer,
  taskReducer,
<<<<<<< HEAD
=======
  EmailSentReducer,
  ProfileReducer
>>>>>>> 0836c2e6432f28d81246e3ea47dc391ae143faeb
});
