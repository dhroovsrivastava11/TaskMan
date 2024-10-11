import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Task {
    id: string,
    title: string
};

export interface TaskState {
    tasks : Task[];
}

const initialState : TaskState = {
    tasks : []
};

const taskSlice = createSlice({
    name : 'task',
    initialState,
    reducers: {
        setTasks: (state, action : PayloadAction< Task[] >) => {
            state.tasks = action.payload;
        },
        addTask: (state, action : PayloadAction< Task > ) => {
            state.tasks.push(action.payload);
        },
        removeTask: (state, action : PayloadAction< string >) => {
            state.tasks = state.tasks.filter(task => task.id!==action.payload)
        },
        clearTasks: (state) => {
            state.tasks = []
        }
    },

})

export const {setTasks, addTask, removeTask, clearTasks} = taskSlice.actions;
export default taskSlice.reducer;