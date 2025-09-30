import React from "react";
import TaskTodo from "../molecules/TaskTodo";
import TodoNotFound from "../molecules/TodoNotFound";
const TaskList = ({ task, handleDelete }) => {
  return (
    <>
      <div className="flex flex-col gap-3 w-2/3 h-full  bg-gradient-to-br shadow-lg hover:shadow-xl transition from-[#1F2937] to-[#111827] rounded-lg p-4">{task.length > 0 ? task.map((tasks, index) => <TaskTodo key={index} index={index} tasks={tasks.Task} deleteTask={() => handleDelete(tasks.id)} />) : <TodoNotFound />}</div>
    </>
  );
};

export default TaskList;
