import { BriefcaseIcon, CalendarCheckIcon, CalendarIcon, GearIcon, NotePencilIcon, PowerIcon, UserIcon, UsersIcon } from "@phosphor-icons/react";
import { Link } from "react-router-dom";
const Sidebar = () => {
  return (
    <>
      <aside className="w-60 h-screen bg-gradient-to-tr from-[#1E1E2F] to-[#0F172A] flex flex-col justify-between py-4 px-4 relative  shadow-sm">
        <button className="text-white text-2xl bold self-end absolute top-0 right-3 hover:text-[#9caf98] transition-all duration-200">&times;</button>
        <div>
          <p className="text-white self-center font-bold text-xl mt-8 w-full border-b">PERSONAL MANAGEMENT</p>
          <div className="flex flex-col mt-5 gap-4">
            <Link to={"/dashboard"} className="flex flex-row items-center  py-1 gap-2 rounded-full px-3 transition-all duration-200 hover:bg-[#9caf98] w-full">
              <BriefcaseIcon size={25} className="text-white" />
              <span className="font-medium text-lg text-white">Dashboard</span>
            </Link>
            <Link to={"/todo"} className="flex flex-row items-center  py-1 gap-2 rounded-full px-3 transition-all duration-200 hover:bg-[#9caf98] w-full">
              <CalendarCheckIcon size={25} className="text-white" />
              <span className="font-medium text-lg text-white">Todo</span>
            </Link>
            <Link to={"/notes"} className="flex flex-row items-center  py-1 gap-2 rounded-full px-3 transition-all duration-200 hover:bg-[#9caf98] w-full">
              <NotePencilIcon size={25} className="text-white" />
              <span className="font-medium text-lg text-white">Notes</span>
            </Link>
            <Link to={"/schedule"} className="flex flex-row items-center  py-1 gap-2 rounded-full px-3 transition-all duration-200 hover:bg-[#9caf98] w-full">
              <CalendarIcon size={25} className="text-white" />
              <span className="font-medium text-lg text-white">Schedule</span>
            </Link>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
