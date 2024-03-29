import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import AppProvider from "./Provider/AppProvider.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  // <React.StrictMode> //comment to prevent from multiple render used only for development process to catch bugs.
  //? AppProvider for state management in whole app
  <AppProvider>
    <App />
  </AppProvider>
  // </React.StrictMode>
);
