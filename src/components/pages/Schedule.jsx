import React from "react";

const Schedule = () => {
  return (
    <div className="p-6">
      {/* Input Section */}
      <div className="mb-6 flex flex-col gap-3">
        <input type="text" placeholder="Enter schedule title..." className="px-4 py-2 rounded-full bg-[#101728] text-white shadow-md outline-none placeholder-gray-400" />
        <input type="date" className="px-4 py-2 rounded-full bg-[#101728] text-white shadow-md outline-none placeholder-gray-400" />
        <textarea placeholder="Write schedule details..." className="px-4 py-3 rounded-2xl bg-[#101728] text-white shadow-md outline-none placeholder-gray-400 resize-none h-28" />
        <button className="self-end px-5 py-2 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-medium shadow-md transition">+ Add Schedule</button>
      </div>

      {/* Schedule List */}
      <div className="bg-[#101728] p-5 rounded-2xl shadow-lg">
        <h2 className="text-lg font-semibold text-white mb-4">Your Schedule</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Dummy Schedule Card */}
          <div className="bg-white p-4 rounded-2xl shadow-md hover:shadow-lg transition">
            <h3 className="font-bold text-gray-900 text-lg">Team Meeting</h3>
            <p className="text-gray-500 text-sm">2025-10-05</p>
            <p className="text-gray-700 mt-2 text-sm">Discuss project timeline, assign tasks, and finalize budget.</p>
          </div>

          <div className="bg-white p-4 rounded-2xl shadow-md hover:shadow-lg transition">
            <h3 className="font-bold text-gray-900 text-lg">Doctor Appointment</h3>
            <p className="text-gray-500 text-sm">2025-10-10</p>
            <p className="text-gray-700 mt-2 text-sm">Annual checkup at the city hospital, bring medical reports.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Schedule;
