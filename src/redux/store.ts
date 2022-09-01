import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import userReducer from "./slices/userSlice";

const store = configureStore({
    reducer: combineReducers({
        user: userReducer,
    })
} as any);

export default store;