import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <main className="flex-1 p-11 text-white bg-gray-200">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
