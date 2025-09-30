import React from "react";
import { TrashSimpleIcon } from "@phosphor-icons/react";
const TaskTodo = ({ index, tasks, deleteTask }) => {
  return (
    <>
      <div key={index} className="flex flex-row items-center gap-1 bg-gray-200 text-black px-3 rounded-full py-2 font-bold text-sm justify-between">
        {tasks}
        <button onClick={deleteTask} className="px-3 py-1 group  rounded-lg bg-red-400 font-semibold ">
          <TrashSimpleIcon size={20} className="group-hover:text-black  transition-all duration-200" />
        </button>
      </div>
    </>
  );
};

export default TaskTodo;
