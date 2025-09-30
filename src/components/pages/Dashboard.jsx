import React from "react";
import { Link } from "react-router-dom";
const Dashboard = () => {
  const todos = JSON.parse(localStorage.getItem("TodoList"));
  const notes = JSON.parse(localStorage.getItem("Notes"));
  return (
    <>
      <div className="w-full h-full flex flex-col gap-14  p-1">
        <div className="card-default p-2 border w-full rounded-md h-24 flex justify-center items-center">
          <h1 className="font-semibold text-white text-2xl ">🗂️ Activity Center</h1>
        </div>
        <div className="grid grid-cols-3">
          <Link to={"/todo"}>
            <div className="card-default flex flex-col  gap-4  border w-72  rounded-lg h-72">
              <h3 className=" w-max   text-center font-semibold text-white text-lg"> Task</h3>
              {todos.length > 0
                ? todos.map((tasks, index) => (
                    <div key={index} className="flex flex-row items-center gap-1 bg-gray-200 text-black px-3 rounded-full py-2 font-bold text-xs justify-between">
                      {tasks.Task}
                    </div>
                  ))
                : null}
            </div>
          </Link>
          <Link to={"/notes"}>
            <div className="card-default flex flex-col gap-4  border w-72  rounded-lg  h-72">
              <h3 className=" w-max   text-center font-semibold text-white text-lg"> Notes</h3>
              {notes.length > 0
                ? notes.map((note, index) => (
                    <div key={index} className="flex flex-row items-center gap-1 bg-gray-200 text-black px-3 rounded-full py-2 font-bold text-xs justify-between">
                      {note.judul}
                    </div>
                  ))
                : null}
            </div>
          </Link>
          <Link to={"/schedule"}>
            <div className="card-default flex flex-col p-4  border w-72  rounded-lg  h-72">
              <h3 className=" w-max   text-center font-semibold text-white text-lg"> Schedule</h3>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
