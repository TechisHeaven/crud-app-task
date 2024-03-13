import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./components/Layout/mainLayout";
import ErrorPage from "./components/Error/Error";
import Dashboard from "./components/Dashboard/Dashboard";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Dashboard />,
      },
      {
        path: "test",
        element: <div>test</div>,
      },
    ],
  },
]);
