import React from "react";
import HeaderTodo from "../molecules/HeaderTodo";
import Refresh from "../atoms/Refresh";

const NameTodo = ({ name, handleRefresh }) => {
  return (
    <>
      <div
        className="
          flex flex-col sm:flex-row 
          justify-between 
          w-full sm:w-2/3 md:w-1/2 
          items-start sm:items-end gap-2
        "
      >
        <HeaderTodo name={name} />
        <Refresh refresh={handleRefresh} />
      </div>
    </>
  );
};

export default NameTodo;
