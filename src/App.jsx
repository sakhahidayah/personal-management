import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Todo from "./components/pages/Todo";
import Dashboard from "./components/pages/Dashboard";

import Notes from "./components/pages/Notes";
import Schedule from "./components/pages/Schedule";
import NotFound from "./components/pages/NotFound";
export default function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { index: true, element: <Dashboard /> },
        { path: "dashboard", element: <Dashboard /> },
        { path: "todo", element: <Todo /> },
        { path: "notes", element: <Notes /> },
        { path: "schedule", element: <Schedule /> },
        { path: "*", element: <NotFound /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}
