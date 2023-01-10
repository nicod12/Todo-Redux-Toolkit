import { createSlice } from "@reduxjs/toolkit";

/**
 *  initial state
 */

const initialState = [
  {
    id: "1",
    title: "Task 1",
    completed: false,
    description: "This is a task 1",
  },
  {
    id: "2",
    title: "Task 2",
    completed: true,
    description: "This is a task 2",
  },
];

/**
 * Actions
 */

const userSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.push(action.payload);
    },
    editTask: (state, action) => {
      const { id, title, description } = action.payload;
      const foundTask = state.find((task) => task.id === id);
      if (foundTask) {
        foundTask.title = title;
        foundTask.description = description;
      }
    },
    deleteTask: (state, action) => {
      const foundTask = state.find((task) => task.id === action.payload);
      if (foundTask) {
        state.splice(state.indexOf(foundTask), 1);
      }
    },
  },
});

export const { addTask, editTask, deleteTask } = userSlice.actions;
export default userSlice.reducer;
