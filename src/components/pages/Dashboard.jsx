import React from "react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const todos = JSON.parse(localStorage.getItem("TodoList")) || [];
  const notes = JSON.parse(localStorage.getItem("Notes")) || [];
  const schedule = JSON.parse(localStorage.getItem("Schedule")) || [];
  return (
    <div className="w-full h-full flex flex-col gap-10 p-4">
      {/* Header */}
      <div className="card-default p-4 border rounded-md flex justify-center items-center">
        <h1 className="font-semibold text-white text-2xl text-center">🗂️ Activity Center</h1>
      </div>

      {/* Cards Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Todo Card */}
        <Link to={"/todo"}>
          <div className="card-default flex flex-col gap-4 border rounded-lg p-4 h-72">
            <h3 className="text-center font-semibold text-white text-lg">Task</h3>
            <div className="flex flex-col gap-2 overflow-y-auto">
              {todos.length > 0 ? (
                todos.map((tasks, index) => (
                  <div key={index} className="flex items-center gap-1 bg-gray-200 text-black px-3 py-2 rounded-full font-bold text-xs">
                    {tasks.Task}
                  </div>
                ))
              ) : (
                <p className="text-gray-400 text-sm text-center">No tasks yet</p>
              )}
            </div>
          </div>
        </Link>

        {/* Notes Card */}
        <Link to={"/notes"}>
          <div className="card-default flex flex-col gap-4 border rounded-lg p-4 h-72">
            <h3 className="text-center font-semibold text-white text-lg">Notes</h3>
            <div className="flex flex-col gap-2 overflow-y-auto">
              {notes.length > 0 ? (
                notes.map((note, index) => (
                  <div key={index} className="flex items-center gap-1 bg-gray-200 text-black px-3 py-2 rounded-full font-bold text-xs">
                    {note.judul}
                  </div>
                ))
              ) : (
                <p className="text-gray-400 text-sm text-center">No notes yet</p>
              )}
            </div>
          </div>
        </Link>

        {/* Schedule Card */}
        <Link to={"/schedule"}>
          <div className="card-default flex flex-col gap-4 border rounded-lg p-4 h-72">
            <h3 className="text-center font-semibold text-white text-lg">Schedule</h3>
            <div className="flex flex-col gap-2 overflow-y-auto">
              {schedule.length > 0 ? (
                schedule.map((items) => (
                  <div key={items.id} className="flex items-center gap-1 bg-gray-200 text-black px-3 py-2 rounded-full font-bold text-xs">
                    {items.judul}
                  </div>
                ))
              ) : (
                <p className="text-gray-400 text-sm text-center">No schedule yet</p>
              )}
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Dashboard;
