import { createSlice, nanoid } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

const initialState = {
  tasksItems: localStorage.getItem("tasks")
    ? JSON.parse(localStorage.getItem("tasks"))
    : [],
  completedTasks: 0,
};

const TasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.tasksItems.push({
        id: nanoid(),
        text: action.payload,
        completed: false,
      });
      toast.success("Your Task has been added.");
      localStorage.setItem("tasks", JSON.stringify(state.tasksItems));
    },
    deleteTask: (state, action) => {
      console.log(state.tasksItems);
      const removeItem = state.tasksItems.filter(
        (item) => item.id !== action.payload.id
      );
      state.tasksItems = removeItem;
      localStorage.setItem("tasks", JSON.stringify(state.tasksItems));
      toast.success(`${action.payload.text} removed from your tasks.`);
    },
    taskCompleted: (state, action) => {
      const itemIndex = state.tasksItems.findIndex(
        (item) => item.id === action.payload.id
      );
      state.tasksItems[itemIndex].completed =
        !state.tasksItems[itemIndex].completed;
      console.log(state.tasksItems);

      localStorage.setItem("tasks", JSON.stringify(state.tasksItems));
      toast.success(`${action.payload.text} has completed.`);
    },
    // setGetTotal: (state, action) => {
    //   let totalCompleted = state.tasksItems.reduce(
    //     (tasktTotal, taskItem) => {
    //       const { completed } = taskItem;
    //       completed ? `${tasktTotal}` : "";
    //       return cartTotal;
    //     },
    //     {
    //       totalAmount: 0,
    //       totalQTY: 0,
    //     }
    //   );
    //   state.cartTotalAmount = totalAmount;
    //   state.cartTotalQTY = totalQTY;
    //   console.log("done: " + state.completedTasks);
    // },
  },
});

export const { addTask, deleteTask, taskCompleted, setGetTotal } =
  TasksSlice.actions;
export const selectTasks = (state) => state.tasks.tasksItems;
export const selectCompleted = (state) => state.tasks.taskCompleted;
export default TasksSlice.reducer;
