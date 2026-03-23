import { configureStore } from "@reduxjs/toolkit";
import taskReducer from "../components/taskSlice";
import { loadTasks, saveTasks } from "./localStorage";

export const store = configureStore({
  reducer: {
    tasks: taskReducer,
  },
  preloadedState: {
    tasks: {
      tasks: loadTasks(),
    },
  },
});

store.subscribe(() => {
  saveTasks(store.getState().tasks.tasks);
});
