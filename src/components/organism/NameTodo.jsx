import React from "react";
import HeaderTodo from "../molecules/HeaderTodo";
import Refresh from "../atoms/Refresh";
const NameTodo = ({ name, handleRefresh }) => {
  return (
    <>
      <div className="flex flex-row justify-between w-2/3 items-end">
        <HeaderTodo name={name} />
        <Refresh refresh={handleRefresh} />
      </div>
    </>
  );
};

export default NameTodo;
