import { configureStore } from "@reduxjs/toolkit"
import authReducer from "./AuthSlice"
import taskReducer from "./TaskSlice"

export const store = configureStore({
    reducer : {
        auth : authReducer,
        tasks : taskReducer,
    },
    devTools: true
});


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

