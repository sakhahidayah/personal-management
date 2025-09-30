import React from "react";

const TodoNotFound = () => {
  return (
    <>
      <div className="w-full cursor-pointer flex flex-row  px-3 py-3 rounded-lg text-black bg-[#fefffd]">
        <p className="self-center font-semibold text-sm">No tasks available. Please add a new task to get started 😊.</p>
      </div>
    </>
  );
};

export default TodoNotFound;
