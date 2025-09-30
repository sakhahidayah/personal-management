import React from "react";

const InputNameTodo = ({ userName, handleName }) => {
  return (
    <>
      <input
        ref={userName}
        className="w-full pr-12 px-4 py-2 rounded-full bg-[#111827] shadow-lg 
             hover:shadow-xl transition font-semibold text-lg text-white 
             placeholder-gray-400"
        type="text"
        placeholder="Enter your Name..."
        onKeyDown={handleName}
      />
    </>
  );
};

export default InputNameTodo;
