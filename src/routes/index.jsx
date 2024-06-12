import { createBrowserRouter } from "react-router-dom";

import App from "../App";
import MainLayout from "../layouts/MainLayout";
import Login from "../components/Login";
import AdminPanel from "../components/AdimnPanel";
import CreateNewSickness from "../components/CreateNewSickness";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { path: "/", element: <App /> },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/adminpanel",
        element: <AdminPanel />,
      },
      {
        path: "/adminpanel",
        element: <CreateNewSickness />,
      },
    ],
  },
]);
