import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

import { RouterProvider } from "react-router-dom";
import { router } from "./router.tsx";
import AppProvider from "./Provider/AppProvider.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  // <React.StrictMode>
  <AppProvider>
    <App />
    <RouterProvider router={router} fallbackElement={<p>Initial Load...</p>} />
  </AppProvider>
  // </React.StrictMode>
);
