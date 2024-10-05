import { configureStore } from "@reduxjs/toolkit"
import authSlice from "./AuthSlice"
import taskSlice from "./TaskSlice"

export const store = configureStore({
    reducer : {
        auth : authSlice,
        tasks : taskSlice
    },
    devTools: true
});


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
