import "./App.css";
import MainLayout from "./components/Layout/mainLayout";
import SideBar from "./components/SideBar/SideBar";
import Table from "./components/Table/Table";
import sanitizedConfig from "./utils/envConfig";

function App() {
  // const url = sanitizedConfig.VITE_API_URL;
  // console.log(url);
  return <MainLayout />;
}

export default App;
