import { BiChevronRight } from "react-icons/bi";
import Table from "../Table/Table";
import { useFetchTable } from "../../service/table.service";
import { Helmet } from "react-helmet";
import { useMemo } from "react";

const Dashboard = () => {
  const [tableData, loading, error, setTableData] = useFetchTable();

  const memoizedTableData = useMemo(() => tableData, [tableData]);

  if (error) {
    throw new Error(error);
  }

  if (loading) {
    return (
      <div className="w-full h-screen grid place-items-center">
        <span className="border-gray-300 h-10 w-10 animate-spin rounded-full border-4 border-t-blue-600"></span>
      </div>
    );
  }

  return (
    <div className="p-8 w-full">
      <Helmet>
        <title>Home</title>
        <meta name="description" content="CRUD application" />
      </Helmet>
      <h1 className="font-semibold text-2xl px-2">Overview</h1>
      <div className="breadcrums flex items-center gap-2 text-sm p-2 text-gray-400 select-none">
        <span>Accounts</span>
        <BiChevronRight className="text-xl" />
        <span>Employee</span>
      </div>
      <h1 className="capitalize text-lg font-semibold p-2">Employees</h1>
      <Table tableData={memoizedTableData} setTableData={setTableData} />
    </div>
  );
};

export default Dashboard;
