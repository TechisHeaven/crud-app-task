import SideBar from "../SideBar/SideBar";
import Dashboard from "../Dashboard/Dashboard";

const MainLayout = () => {
  return (
    <>
      <main className="flex items-start">
        <aside>
          <SideBar />
        </aside>
        <Dashboard />
      </main>
    </>
  );
};

export default MainLayout;
