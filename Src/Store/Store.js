import { applyMiddleware, createStore } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { AllReducer } from "./CombineReducer";
import logger from "redux-logger";
import createSagaMiddleware from "redux-saga";
import { SagaWatcher } from "./SagaWatcher";
<<<<<<< HEAD
=======
import { ProfileReducer } from "../Features/ProfilePage/Redux/Reducer";
>>>>>>> 0836c2e6432f28d81246e3ea47dc391ae143faeb

const persistConfig = {
  key: "papanputih",
  storage: AsyncStorage,
<<<<<<< HEAD
  blacklist: ["TeamBoardReducer"],
=======
  blacklist: [],
>>>>>>> 0836c2e6432f28d81246e3ea47dc391ae143faeb
};

const SagaMiddleware = createSagaMiddleware();
const AllMiddleware = applyMiddleware(SagaMiddleware, logger);
const persistedReducer = persistReducer(persistConfig, AllReducer);

export const Store = createStore(persistedReducer, AllMiddleware);
export const Persistor = persistStore(Store);

SagaMiddleware.run(SagaWatcher);
