import React from "react";
import InputAddTask from "../molecules/InputAddTask";

const FormInputTodo = ({ input, handleSubmit }) => {
  return (
    <>
      <div className="relative w-full sm:w-2/3 md:w-1/2">
        <InputAddTask input={input} submit={handleSubmit} />
      </div>
    </>
  );
};

export default FormInputTodo;
