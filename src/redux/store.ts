import { configureStore } from "@reduxjs/toolkit"
import authReducer from "./AuthSlice"
import taskReducer from "./TaskSlice"
import groupReducer from "./GroupSlice"
import groupTaskReducer from "./GroupTaskSlice"

export const store = configureStore({
    reducer : {
        auth : authReducer,
        tasks : taskReducer,
        groups : groupReducer,
        groupTasks : groupTaskReducer
    },
    devTools: true
});


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

