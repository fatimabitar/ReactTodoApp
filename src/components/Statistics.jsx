import { FaArrowCircleRight, FaCheck } from "react-icons/fa";
import { useSelector } from "react-redux";
import { selectCompleted, selectTasks } from "../app/TasksSlice";

const Statistics = () => {
  const tasks = useSelector(selectTasks);
  const numberOfTasks = tasks.length;

  const done = useSelector(selectCompleted);
  console.log(done);

  return (
    <div className="sp-container flex items-center justify-between">
      <h2 className="text-2xl">
        Your Tasks:{" "}
        <span className="text-green-400 font-bold">{numberOfTasks}</span>
      </h2>
      {/* <div className="flex items-center justify-between gap-2">
        <div className="flex justify-between items-center gap-2">
          <FaCheck className="text-lg text-green-400" />
          <h3 className="text-xl">Completed tasks:</h3>
        </div>
        <h4 className="text-xl">{done}</h4>
      </div>
      <div className="flex items-center justify-between gap-2">
        <div className="flex justify-between items-center gap-2">
          <FaArrowCircleRight className="text-lg text-red-500" />
          <h3 className="text-xl">In progress:</h3>
        </div>
        <h4 className="text-xl">{numberOfTasks - done}</h4>
      </div> */}
    </div>
  );
};

export default Statistics;
