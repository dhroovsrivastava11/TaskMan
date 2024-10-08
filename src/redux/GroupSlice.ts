import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Group{
    id : String,
    name : String,
}

interface GroupState {
    groups : Group[]
}

const initialState : GroupState = {
    groups : []
}

const groupSlice = createSlice({
    name : 'group',
    initialState,
    reducers : {
        setGroups : (state, action) => {
            state.groups = action.payload;
        },

        clearGroups : (state) => {
            state.groups = [];
        },

        addGroup : (state, action) => {
            state.groups.push(action.payload);
        }
    }
})

export const {setGroups, clearGroups, addGroup} = groupSlice.actions;
export default groupSlice.reducer;