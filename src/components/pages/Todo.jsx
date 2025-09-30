import React, { useRef, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import InputNameTodo from "../atoms/InputNameTodo";
import TaskList from "../atoms/TaskList";
import NameTodo from "../organism/NameTodo";
import FormInputTodo from "../organism/FormInputTodo";
const Todo = () => {
  const input = useRef();
  const userName = useRef();
  const [name, setName] = useState(() => {
    return JSON.parse(localStorage.getItem("UserName")) || [];
  });
  const [task, setTask] = useState(() => {
    return JSON.parse(localStorage.getItem("TodoList")) || [];
  });
  const handleName = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      const value = userName.current.value.trim();
      if (!value) {
        toast.error("Task cannot be empty. Please enter a valid task.");
        return;
      } else {
        setName(value);
        localStorage.setItem("UserName", JSON.stringify(value));
      }
    }
  };
  const handleSubmit = (event) => {
    if (event.key === "Enter" || event.type === "click") {
      event.preventDefault();
      const value = input.current.value.trim();
      if (!value) {
        toast.error("Task cannot be empty. Please enter a valid task.");
        return;
      } else {
        setTask((prevTask) => {
          const updatedTask = [
            ...prevTask,
            {
              id: Date.now(),
              Task: value,
              status: false,
            },
          ];
          localStorage.setItem("TodoList", JSON.stringify(updatedTask));
          return updatedTask;
        });
        input.current.value = "";
        toast.success("Task has been successfully added.");
      }
    }
  };

  const handleDelete = (id) => {
    const updated = task.filter((res) => res.id !== id);
    setTask(updated);
    toast.success("🗑️ Task has been removed successfully.");
    localStorage.setItem("TodoList", JSON.stringify(updated));
  };

  const handleRefresh = (event) => {
    event.preventDefault();
    localStorage.removeItem("UserName");
    setName([]);
  };

  return (
    <>
      <div className=" w-full h-full  px-4 flex flex-col gap-1">
        <div className=" flex flex-col gap-5  h-full">
          {name.length > 0 ? <NameTodo name={name} handleRefresh={handleRefresh} /> : <InputNameTodo userName={userName} handleName={handleName} />}
          <FormInputTodo input={input} handleSubmit={handleSubmit} />
          <TaskList task={task} handleDelete={handleDelete} />
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default Todo;
