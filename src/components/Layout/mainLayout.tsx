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

//* render sidebar and their child component in the wrap of main tag with react router Outlet;

export default MainLayout;
