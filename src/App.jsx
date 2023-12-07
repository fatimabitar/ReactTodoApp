import React from "react";
import Header from "./components/Header";
import Statistics from "./components/Statistics";
import AddTodo from "./components/AddTodo.jsx";
import Tasks from "./components/Tasks.jsx";

const App = () => {
  return (
    <div className="flex flex-col gap-10">
      <Header />
      <Statistics />
      <AddTodo />
      <Tasks />
    </div>
  );
};

export default App;
