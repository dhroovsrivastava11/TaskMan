import { createSlice } from "@reduxjs/toolkit";
import { TaskState as GroupTaskState } from "./TaskSlice"

const initialState : GroupTaskState = {
    tasks : []
} 

const GroupTaskSlice = createSlice({
    name : 'Group Tasks',
    initialState,
    reducers : {
        setGroupTasks: (state, action) => {
            state.tasks = action.payload;
        },
        addGroupTask: (state, action) => {
            state.tasks.push(action.payload);
        },
        removeGroupTask: (state, action) => {
            state.tasks = state.tasks.filter(task => task.id!==action.payload)
        },
        clearGroupTasks: (state) => {
            state.tasks = []
        }
    }
})

export const {setGroupTasks, addGroupTask, removeGroupTask, clearGroupTasks} = GroupTaskSlice.actions;
export default GroupTaskSlice.reducer;

