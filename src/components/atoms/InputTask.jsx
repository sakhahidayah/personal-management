import React from "react";

const InputTask = ({ input, submit }) => {
  return (
    <>
      <input
        ref={input}
        className="w-full px-4 py-2 rounded-full bg-gradient-to-br shadow-lg hover:shadow-xl transition from-[#1F2937] to-[#111827] font-semibold text-lg text-white"
        type="text"
        placeholder="Add new task..
            "
        onKeyDown={submit}
      />
    </>
  );
};

export default InputTask;
