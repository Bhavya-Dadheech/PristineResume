import { createStore, applyMiddleware } from "redux";
import { thunk } from "redux-thunk";
import logger from "redux-logger";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./rootReducer";
import { loadState, saveState } from "../models/localStorage";

const store = createStore(rootReducer, loadState(), composeWithDevTools(applyMiddleware(logger, thunk)));

store.subscribe(() => {
  const state = store.getState();
  saveState(state); // Save the current state to LocalStorage
});

export default store;
