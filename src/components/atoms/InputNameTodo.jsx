import React from "react";

const InputNameTodo = ({ userName, handleName }) => {
  return (
    <>
      <input
        ref={userName}
        className="w-1/3 px-4 py-1 rounded-full bg-gradient-to-br shadow-lg hover:shadow-xl transition from-[#1F2937] to-[#111827] font-semibold text-lg"
        type="text"
        placeholder="Enter your Name..
            "
        onKeyDown={handleName}
      />
    </>
  );
};

export default InputNameTodo;
