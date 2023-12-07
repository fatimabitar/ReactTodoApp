import React from "react";
import { useSelector } from "react-redux";
import { selectTasks } from "../app/TasksSlice";
import TaskItem from "./TaskItem";

const Tasks = () => {
  const tasksItems = useSelector(selectTasks);
  console.log(...tasksItems);
  return (
    <div className="sp-container">
      {tasksItems.map((task, i) => (
        <TaskItem key={i} task={task}/>
      ))}
    </div>
  );
};

export default Tasks;
