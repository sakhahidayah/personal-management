import React, { useState, useRef } from "react";
import { toast, ToastContainer } from "react-toastify";
import { PencilSimpleIcon, X } from "@phosphor-icons/react";

const Schedule = () => {
  const title = useRef();
  const date = useRef();
  const schedule = useRef();
  const [lov, setLov] = useState(null);
  const [edit, setEdit] = useState(false);
  const [jadwal, setJadwal] = useState(() => {
    return JSON.parse(localStorage.getItem("Schedule")) || [];
  });
  const handleEdit = (id) => {
    const getItem = JSON.parse(localStorage.getItem("Schedule")) || [];
    const selectedItem = getItem.find((item) => item.id === id);
    if (selectedItem) {
      setLov(selectedItem);
      setEdit(true);
    } else {
      console.log("not found");
    }
  };
  const handleSaveEdit = () => {
    if (!lov) return;
    const updatedList = jadwal.map((item) => (item.id === lov.id ? lov : item));
    setJadwal(updatedList);
    localStorage.setItem("Schedule", JSON.stringify(updatedList));
    setEdit(false);
    toast.success("Schedule updated successfully!");
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const judul = title.current.value.trim();
    const tanggal = date.current.value.trim();
    const jadwalValue = schedule.current.value.trim();
    if (judul && tanggal && jadwalValue) {
      setJadwal((prev) => {
        const updatedJadwal = [
          ...prev,
          {
            id: Date.now(),
            judul: judul,
            tanggal: tanggal,
            jadwalValue: jadwalValue,
          },
        ];
        localStorage.setItem("Schedule", JSON.stringify(updatedJadwal));
        return updatedJadwal;
      });
      title.current.value = "";
      date.current.value = "";
      schedule.current.value;
      toast.success("Schedule has been successfully added.");
    } else {
      toast.error("Schedule cannot be empty. Please enter a valid notes.");
    }
  };
  return (
    <>
      <div className="p-6">
        {/* Input Section */}
        <div className="mb-6 flex flex-col gap-3">
          <input ref={title} type="text" placeholder="Enter schedule title..." className="px-4 py-2 rounded-full bg-[#101728] text-white shadow-md outline-none placeholder-gray-400" />
          <input ref={date} type="date" className="px-4 py-2 rounded-full bg-[#101728] text-white shadow-md outline-none placeholder-gray-400" />
          <textarea ref={schedule} placeholder="Write schedule details..." className="px-4 py-3 rounded-2xl bg-[#101728] text-white shadow-md outline-none placeholder-gray-400 resize-none h-28" />
          <button onClick={handleSubmit} className="self-end px-5 py-2 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-medium shadow-md transition">
            + Add Schedule
          </button>
        </div>

        {/* Schedule List */}
        <div className="bg-[#101728] p-5 rounded-2xl shadow-lg  ">
          <h2 className="text-lg font-semibold text-white mb-4">Your Schedule</h2>

          {jadwal.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {jadwal.map((items) => (
                <div key={items.id} className="bg-white p-4 rounded-2xl shadow-md hover:shadow-lg transition">
                  <div className="flex flex-row justify-between">
                    <h3 className="font-bold text-gray-900 text-lg">{items.judul}</h3>
                    <PencilSimpleIcon
                      onClick={() => {
                        handleEdit(items.id);
                      }}
                      size={30}
                      className="px-2 self-center rounded-lg py-1 hover:bg-yellow-300 bg-yellow-200 text-black cursor-pointer"
                    />
                  </div>
                  <p className="text-gray-500 text-sm">{items.tanggal}</p>
                  <p className="text-gray-700 mt-2 text-sm">{items.jadwalValue}</p>
                </div>
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center gap-2 text-center ">
              <span className="text-4xl">🗓️</span>
              <p className="bg-white text-gray-700 px-4 py-3 rounded-lg shadow-sm">No Schedule available. Please add a new schedule.</p>
            </div>
          )}
        </div>
        {edit ? (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 ">
            <div className="p-4 w-96 h-max rounded-lg bg-white relative">
              <div className="mb-6 flex flex-col gap-3">
                {lov && (
                  <>
                    <input
                      type="text"
                      value={lov.judul}
                      onChange={(e) => {
                        setLov({ ...lov, judul: e.target.value });
                      }}
                      className="px-4 py-2 rounded-full bg-[#101728] text-white shadow-md outline-none placeholder-gray-400"
                    />
                    <input
                      type="date"
                      value={lov.tanggal}
                      onChange={(e) => {
                        setLov({ ...lov, tanggal: e.target.value });
                      }}
                      className="px-4 py-2 rounded-full bg-[#101728] text-white shadow-md outline-none placeholder-gray-400"
                    />
                    <textarea
                      value={lov.jadwalValue}
                      onChange={(e) => {
                        setLov({ ...lov, jadwalValue: e.target.value });
                      }}
                      className="px-4 py-3 rounded-2xl bg-[#101728] text-white shadow-md outline-none placeholder-gray-400 resize-none h-28"
                    />
                    <button onClick={handleSaveEdit} className="px-4 py-2 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-medium">
                      Save Changes
                    </button>
                  </>
                )}
              </div>

              <button
                onClick={() => {
                  setEdit(false);
                }}
                className="px-3 py-1 hover:text-white text-center rounded-full bg-slate-300 absolute -top-3 -right-2 font-bold text-lg"
              >
                {" "}
                &times;
              </button>
            </div>
          </div>
        ) : null}
        <ToastContainer />
      </div>
    </>
  );
};

export default Schedule;
