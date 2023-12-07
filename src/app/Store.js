import { configureStore } from "@reduxjs/toolkit";
import TasksSlice from "./TasksSlice.jsx";

const Store = configureStore({
    reducer: {
        tasks: TasksSlice,
    }
});

export default Store;