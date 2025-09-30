import React from "react";
import InputAddTask from "../molecules/InputAddTask";
const FormInputTodo = ({ input, handleSubmit }) => {
  return (
    <>
      <div className="relative w-2/3 ">
        <InputAddTask input={input} submit={handleSubmit} />
      </div>
    </>
  );
};

export default FormInputTodo;
