import "./App.css";
import SideBar from "./components/SideBar/SideBar";
import sanitizedConfig from "./utils/envConfig";

function App() {
  // const url = sanitizedConfig.VITE_API_URL;
  // console.log(url);
  return (
    <>
      <SideBar />
    </>
  );
}

export default App;
