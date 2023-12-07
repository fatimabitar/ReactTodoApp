import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteTask, taskCompleted } from "../app/TasksSlice";
import { FaCheck, FaTimes } from "react-icons/fa";

const TaskItem = ({ task }) => {
  const { id, text, completed } = task;
  const [check, setCheck] = useState(completed);
  const dispatch = useDispatch();
  const OnDeleteTask = () => {
    dispatch(deleteTask({ id, text, completed }));
  };
  const onComplete = () => {
    dispatch(taskCompleted({ id, text, completed }));
    setCheck(!completed);
  };
  return (
    <div className="flex items-center justify-between mb-10 bg-zinc-900 
    px-5 py-2 rounded shadow-md shadow-zinc-800">
      <div
        className={`transition-all duration-500 ${
          check ? "line-through text-slate-300" : ""
        }`}
      >
        <p className="text-xl">{text}</p>
      </div>
      <div>
        <button
          onClick={onComplete}
          className="bg-green-400 w-10 h-10 rounded-full inline-flex items-center justify-center mr-2 cursor-pointer"
        >
          <FaCheck />
        </button>
        <button
          onClick={OnDeleteTask}
          className="bg-red-500 w-10 h-10 rounded-full inline-flex items-center justify-center cursor-pointer"
        >
          <FaTimes />
        </button>
      </div>
    </div>
  );
};

export default TaskItem;
