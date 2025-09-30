import { useState } from "react";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  const [open, setOpen] = useState(true); // default sidebar open di desktop

  return (
    <div className="flex h-screen bg-gray-200">
      {/* Sidebar */}
      <Sidebar open={open} setOpen={setOpen} />

      {/* Main Content */}
      <main
        className={`flex-1 p-6 transition-all duration-300 
          ${open ? "md:ml-60" : "md:ml-0"} 
          bg-gray-200`}
      >
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
