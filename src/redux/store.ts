import { configureStore } from "@reduxjs/toolkit"
import authReducer from "./AuthSlice"
import taskReducer from "./TaskSlice"
import groupReducer from "./GroupSlice"

export const store = configureStore({
    reducer : {
        auth : authReducer,
        tasks : taskReducer,
        groups : groupReducer
    },
    devTools: true
});


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

