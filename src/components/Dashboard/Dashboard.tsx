import { BiChevronRight } from "react-icons/bi";
import Table from "../Table/Table";

const Dashboard = () => {
  return (
    <div className="p-8 w-full">
      <div className="breadcrums flex items-center gap-2 text-sm p-2">
        <span>Accounts</span>
        <BiChevronRight className="text-xl" />
        <span>Employee</span>
      </div>
      <h1 className="capitalize text-2xl font-semibold p-2">Employees</h1>

      <Table />
    </div>
  );
};

export default Dashboard;
