import SideBar from "../SideBar/SideBar";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <>
      <main className="flex items-start">
        <aside>
          <SideBar />
        </aside>
        <Outlet />
      </main>
    </>
  );
};

export default MainLayout;
