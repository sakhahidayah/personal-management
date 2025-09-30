import React from "react";
import InputTask from "../atoms/InputTask";
import PlusIconAdd from "../atoms/PlusIcon";

const InputAddTask = ({ input, submit }) => {
  return (
    <>
      <InputTask input={input} submit={submit} />
      <PlusIconAdd submit={submit} />
    </>
  );
};

export default InputAddTask;
