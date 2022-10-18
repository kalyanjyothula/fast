import { combineReducers } from "@reduxjs/toolkit";
import userReducer from "../container/App/reducer";
import mainPageReducer from "../container/MainPage/reducer";

export const reducer = combineReducers({
  user: userReducer,
  mainPage: mainPageReducer,
});
