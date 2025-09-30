import React from "react";
import InputNameTodo from "../atoms/InputNameTodo";
import PlusIconAdd from "../atoms/PlusIcon";
import PlusIconName from "../atoms/PlusIconName";

const InputAddName = ({ userName, handleName }) => {
  return (
    <div className="relative w-full sm:w-2/3 md:w-1/2">
      <InputNameTodo userName={userName} handleName={handleName} />
      <PlusIconName submit={handleName} />
    </div>
  );
};

export default InputAddName;
