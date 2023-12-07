import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../app/TasksSlice";

const AddTodo = () => {
  const dispatch = useDispatch();
  const [taskText, setTaskText] = useState();

  const onAddText = (e) => {
    e.preventDefault();
    dispatch(addTask(taskText));
    setTaskText("");
  };

  return (
    <div className="sp-container">
      <form className="flex items-center justify-center gap-3">
        <input
          type="text"
          placeholder="Input your task!"
          onChange={(e) => {
            setTaskText(e.target.value);
          }}
          className="rounded-lg outline-0 border-0 py-1 px-4 w-96 shadow-md shadow-slate-600 text-slate-900"
        />
        <input
          type="submit"
          value="save"
          onClick={(e) => {
            onAddText(e);
          }}
          className="button-theme cursor-pointer bg-red-500"
        />
      </form>
    </div>
  );
};

export default AddTodo;
