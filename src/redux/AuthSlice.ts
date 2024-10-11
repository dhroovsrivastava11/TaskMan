import { createSlice } from "@reduxjs/toolkit";

interface AuthState {
    user : {
        uid : string,
        displayName : string | null,
        email : string
    } | null
}

const initialState : AuthState = {
    user : null,
}

const authSlice = createSlice({
    name : 'auth',
    initialState,
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload;
        },
        clearUser: (state) => {
            state.user = null;
        }
    }
})

export const { setUser, clearUser } = authSlice.actions;
export default authSlice.reducer;