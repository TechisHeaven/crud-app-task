import { BiChevronRight } from "react-icons/bi";
import Table from "../Table/Table";
import { useFetchTable } from "../../service/table.service";
import { Helmet } from "react-helmet";
import { useMemo, useState } from "react";
import AddEmployeeModel from "../Model/AddEmployee";
import { useStateContext } from "../../store/store";
import Loader from "../Loader/Loader";

const Dashboard = () => {
  // const [tableData, loading, error, setTableData] = useFetchTable(); // it will return like this but have to pass data through pages which is not the better and reliable method of sending data accross comps.
  useFetchTable();
  let [isOpen, setIsOpen] = useState(false);
  //* state context to access state of tables anywhere.
  let state = useStateContext();
  const error = state.tables.error;
  const loading = state.tables.loading;

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  // const memoizedTableData = useMemo(() => tableData, [tableData]);

  if (error) {
    throw new Error(error);
  }
  //handling for maintaing loading and error state;
  if (loading) {
    return <Loader />;
  }

  //! used React Helmet for SEO and meta tags like for changing titles and other meta information on pages
  return (
    <>
      <Helmet>
        <title>Home</title>
        <meta name="description" content="CRUD application" />
      </Helmet>

      <div className="p-8 w-full">
        <div className="flex justify-between items-end pr-8">
          <div>
            <h1 className="font-semibold text-2xl px-2">Overview</h1>
            <div className="breadcrums flex items-center gap-2 text-sm p-2 text-gray-400 select-none">
              <span>Accounts</span>
              <BiChevronRight className="text-xl" />
              <span>Employee</span>
            </div>
          </div>
          <button
            onClick={openModal}
            className="p-2 px-4 bg-blue-500 rounded-md text-white"
          >
            Add Employee
          </button>
          <AddEmployeeModel isOpen={isOpen} closeModal={closeModal} />
        </div>
        <h1 className="capitalize text-lg font-semibold p-2">Employees</h1>
        <Table tableData={state.tables.tables} />
      </div>
    </>
  );
};

export default Dashboard;
