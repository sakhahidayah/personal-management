import { PencilSimpleIcon } from "@phosphor-icons/react";
import { useRef, useState } from "react";
import { ToastContainer, toast } from "react-toastify";

const Notes = () => {
  const inputTitle = useRef();
  const inputNotes = useRef();
  const [notes, setNotes] = useState(() => {
    return JSON.parse(localStorage.getItem("Notes")) || [];
  });
  const handleAdd = (event) => {
    event.preventDefault();
    const title = inputTitle.current.value.trim();
    const notes = inputNotes.current.value.trim();
    if (title && notes) {
      setNotes((prevNotes) => {
        const updatedNotes = [
          ...prevNotes,
          {
            id: Date.now(),
            judul: title,
            Notes: notes,
          },
        ];
        localStorage.setItem("Notes", JSON.stringify(updatedNotes));
        return updatedNotes;
      });
      inputTitle.current.value = "";
      inputNotes.current.value = "";
      toast.success("Notes has been successfully added.");
    } else {
      toast.error("Notes cannot be empty. Please enter a valid notes.");
    }
  };
  return (
    <div className="p-6">
      {/* Input Section */}
      <div className="mb-6 flex flex-col gap-3">
        <input ref={inputTitle} type="text" placeholder="Enter note title.." className="px-4 py-2 rounded-full bg-[#101728] text-white shadow-md outline-none placeholder-gray-400" />
        <textarea ref={inputNotes} placeholder="Write your note here..." className="px-4 py-3 rounded-2xl bg-[#101728] text-white shadow-md outline-none placeholder-gray-400 resize-none h-28" />
        <button className="self-end px-5 py-2 rounded-full bg-green-600 hover:bg-green-700 text-white font-medium shadow-md transition" onClick={handleAdd}>
          + Add Note
        </button>
      </div>

      {/* Notes List */}
      <div className="bg-[#101728] p-5 rounded-2xl shadow-lg">
        <h2 className="text-lg font-semibold text-white mb-4">Your Notes</h2>
        {notes.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {notes.map((note) => (
              <div key={note.id} className="bg-white p-4 rounded-2xl shadow-md hover:shadow-lg transition">
                <div className="flex flex-row justify-between">
                  <h3 className="font-bold text-gray-900 text-lg">{note.judul}</h3>
                  <PencilSimpleIcon size={30} className="px-2 self-center rounded-lg py-1 hover:bg-yellow-300 bg-yellow-200 text-black cursor-pointer" />
                </div>
                <p className="text-gray-700 mt-2 text-sm">{note.Notes}</p>
              </div>
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center gap-2 text-center">
            <span className="text-4xl">📝</span>
            <p className="bg-white text-gray-700 px-4 py-3 rounded-lg shadow-sm">No notes available. Please add a new note.</p>
          </div>
        )}
      </div>
      <ToastContainer />
    </div>
  );
};

export default Notes;
