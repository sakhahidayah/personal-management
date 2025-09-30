import React from "react";
const HeaderTodo = ({ name }) => {
  return (
    <>
      <div className="flex flex-col gap-1 w-max h-max ">
        <h1 className="text-4xl font-bold text-gray-800">
          👋 Halo, <span className="drop-shadow-xl text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text">{name}</span>!
        </h1>
        <p className="mt-2 text-lg text-gray-500">Siap produktif hari ini?</p>
      </div>
    </>
  );
};

export default HeaderTodo;
