import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./components/Layout/mainLayout";
import ErrorPage from "./components/Error/Error";
import Dashboard from "./components/Dashboard/Dashboard";

//* react router v6 createBrowserRouter easy and simple to use.
export const router = createBrowserRouter([
  {
    path: "/",
    //main layout to render sidebar to all pages except error
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
      //other child paths and components render here
    ],
  },
]);
