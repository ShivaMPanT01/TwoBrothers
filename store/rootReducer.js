import { combineReducers } from "@reduxjs/toolkit";
import AuthReducer from "./Auth/AuthSlice";

export const rootReducer = combineReducers({
    auth: AuthReducer,
});
