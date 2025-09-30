import { useState } from "react";
import { BriefcaseIcon, CalendarCheckIcon, CalendarIcon, NotePencilIcon } from "@phosphor-icons/react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [open, setOpen] = useState(true); // default open di desktop

  return (
    <>
      {/* Tombol Hamburger (opsional, bisa tetap di desktop juga) */}
      {!open && (
        <button onClick={() => setOpen(true)} className="fixed top-4 left-1 z-50 bg-[#0F172A] text-white px-4 py-2 rounded-lg shadow-lg ">
          ☰
        </button>
      )}

      {/* Overlay hanya muncul di mobile */}
      {open && <div onClick={() => setOpen(false)} className="fixed inset-0 bg-black/50 z-40 md:hidden"></div>}

      {/* Sidebar */}
      {open && (
        <aside className="fixed top-0 left-0 h-screen w-60 bg-gradient-to-tr from-[#1E1E2F] to-[#0F172A] flex flex-col justify-between py-4 px-4 shadow-sm z-50">
          {/* Tombol Close (selalu tampil) */}
          <button onClick={() => setOpen(false)} className="text-white text-2xl font-bold self-end absolute top-2 right-3 hover:text-[#9caf98] transition-all duration-200">
            &times;
          </button>

          <div>
            <p className="text-white text-center font-bold text-xl mt-8 w-full border-b pb-2">PERSONAL MANAGEMENT</p>
            <div className="flex flex-col mt-5 gap-4">
              <Link to={"/dashboard"} className="flex flex-row items-center py-1 gap-2 rounded-full px-3 transition-all duration-200 hover:bg-[#9caf98] w-full">
                <BriefcaseIcon size={25} className="text-white" />
                <span className="font-medium text-lg text-white">Dashboard</span>
              </Link>
              <Link to={"/todo"} className="flex flex-row items-center py-1 gap-2 rounded-full px-3 transition-all duration-200 hover:bg-[#9caf98] w-full">
                <CalendarCheckIcon size={25} className="text-white" />
                <span className="font-medium text-lg text-white">Todo</span>
              </Link>
              <Link to={"/notes"} className="flex flex-row items-center py-1 gap-2 rounded-full px-3 transition-all duration-200 hover:bg-[#9caf98] w-full">
                <NotePencilIcon size={25} className="text-white" />
                <span className="font-medium text-lg text-white">Notes</span>
              </Link>
              <Link to={"/schedule"} className="flex flex-row items-center py-1 gap-2 rounded-full px-3 transition-all duration-200 hover:bg-[#9caf98] w-full">
                <CalendarIcon size={25} className="text-white" />
                <span className="font-medium text-lg text-white">Schedule</span>
              </Link>
            </div>
          </div>
        </aside>
      )}
    </>
  );
};

export default Sidebar;
