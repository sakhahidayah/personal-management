import { useState, useRef } from "react";
import { Pencil, Trash2 } from "lucide-react";

const Notes = () => {
  const inputTitle = useRef();
  const inputNotes = useRef();
  const [editingNote, setEditingNote] = useState(null);
  const [notes, setNotes] = useState(() => {
    return JSON.parse(localStorage.getItem("Notes")) || [];
  });

  const handleAdd = (event) => {
    event.preventDefault();
    const title = inputTitle.current.value.trim();
    const noteContent = inputNotes.current.value.trim();

    if (title && noteContent) {
      setNotes((prevNotes) => {
        const updatedNotes = [
          ...prevNotes,
          {
            id: Date.now(),
            judul: title,
            Notes: noteContent,
          },
        ];
        localStorage.setItem("Notes", JSON.stringify(updatedNotes));
        return updatedNotes;
      });
      inputTitle.current.value = "";
      inputNotes.current.value = "";
    }
  };

  const handleEdit = (id) => {
    const getItem = JSON.parse(localStorage.getItem("Notes")) || [];
    const selectedItem = getItem.find((item) => item.id === id);
    if (selectedItem) {
      setEditingNote(selectedItem);
    }
  };

  const handleSaveEdit = () => {
    if (!editingNote) return;

    const updatedList = notes.map((item) => (item.id === editingNote.id ? editingNote : item));
    setNotes(updatedList);
    localStorage.setItem("Notes", JSON.stringify(updatedList));
    setEditingNote(null);
  };

  const handleDelete = (id) => {
    if (id) {
      const updated = notes.filter((res) => res.id !== id);
      setNotes(updated);
      localStorage.setItem("Notes", JSON.stringify(updated));
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Notes</h1>
          <p className="text-gray-600">Manage your personal notes</p>
        </div>

        {/* Input Section */}
        <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl p-8 mb-8 shadow-xl">
          <input ref={inputTitle} type="text" placeholder="Enter note title..." className="w-full px-6 py-3 rounded-2xl bg-slate-700/50 text-white placeholder-gray-400 outline-none mb-4 focus:ring-2 focus:ring-green-500 transition" />
          <textarea ref={inputNotes} placeholder="Write your note here..." className="w-full px-6 py-4 rounded-2xl bg-slate-700/50 text-white placeholder-gray-400 outline-none resize-none h-32 mb-4 focus:ring-2 focus:ring-green-500 transition" />
          <div className="flex justify-end">
            <button onClick={handleAdd} className="px-8 py-3 rounded-full bg-green-500 hover:bg-green-600 text-white font-semibold shadow-lg transition transform hover:scale-105">
              + Add Note
            </button>
          </div>
        </div>

        {/* Notes Section */}
        <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl p-8 shadow-xl">
          <h2 className="text-2xl font-bold text-white mb-6">Your Notes</h2>

          {notes.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {notes.map((note) => (
                <div key={note.id} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-bold text-gray-900 flex-1">{note.judul}</h3>
                    <div className="flex gap-2 ml-2">
                      <button onClick={() => handleDelete(note.id)} className="p-2 rounded-lg bg-red-100 hover:bg-red-200 text-red-600 transition">
                        <Trash2 size={18} />
                      </button>
                      <button onClick={() => handleEdit(note.id)} className="p-2 rounded-lg bg-yellow-100 hover:bg-yellow-200 text-yellow-600 transition">
                        <Pencil size={18} />
                      </button>
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm whitespace-pre-line leading-relaxed">{note.Notes}</p>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <div className="text-6xl mb-4">📝</div>
              <p className="text-gray-400 text-lg">No notes available. Create your first note!</p>
            </div>
          )}
        </div>
      </div>

      {/* Edit Modal */}
      {editingNote && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-3xl p-8 w-full max-w-2xl shadow-2xl relative">
            <button onClick={() => setEditingNote(null)} className="absolute -top-3 -right-3 w-10 h-10 rounded-full bg-gray-700 hover:bg-gray-800 text-white font-bold text-xl shadow-lg transition">
              ×
            </button>

            <h2 className="text-2xl font-bold text-gray-900 mb-6">Edit Note</h2>

            <input type="text" value={editingNote.judul} onChange={(e) => setEditingNote({ ...editingNote, judul: e.target.value })} className="w-full px-6 py-3 rounded-xl bg-gray-100 text-gray-900 outline-none mb-4 focus:ring-2 focus:ring-blue-500 transition" placeholder="Note title..." />

            <textarea value={editingNote.Notes} onChange={(e) => setEditingNote({ ...editingNote, Notes: e.target.value })} className="w-full px-6 py-4 rounded-xl bg-gray-100 text-gray-900 outline-none resize-none h-48 mb-6 focus:ring-2 focus:ring-blue-500 transition" placeholder="Note content..." />

            <div className="flex justify-end gap-3">
              <button onClick={() => setEditingNote(null)} className="px-6 py-3 rounded-xl bg-gray-200 hover:bg-gray-300 text-gray-700 font-semibold transition">
                Cancel
              </button>
              <button onClick={handleSaveEdit} className="px-6 py-3 rounded-xl bg-blue-500 hover:bg-blue-600 text-white font-semibold shadow-lg transition">
                Save Changes
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Notes;
