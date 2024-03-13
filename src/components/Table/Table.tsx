import { IoIosMore } from "react-icons/io";
import { TableData } from "../../types/main.type";

const Table = ({
  tableData,
  setTableData,
}: {
  tableData: TableData[];
  setTableData: any;
}) => {
  const tableHeadings = Object.keys(tableData[0] || {}).map((key) => key);

  return (
    <div className="overflow-x-auto p-2 max-w-[1200px]">
      <table className="w-full table-auto bg-white rounded-md overflow-hidden">
        <thead className="bg-gray-200">
          <tr>
            {tableHeadings.map((value, index) => {
              return (
                <th className="px-4 py-2 text-start  capitalize">{value}</th>
              );
            })}
            <th className="px-4 py-2 text-start w-1 capitalize">Actions</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((value: TableData) => {
            return (
              <tr key={value.id} className="hover:bg-gray-100">
                <td className="px-4 py-2">{value.id}</td>
                <td className="px-4 py-2">
                  <img
                    src={value.imageUrl}
                    className="border aspect-square rounded-full w-10 min-w-10"
                    alt="employee-image"
                  />
                </td>
                <td className="px-4 py-2">{value.firstName}</td>
                <td className="px-4 py-2">{value.lastName}</td>
                <td className="px-4 py-2">{value.email}</td>
                <td className="px-4 py-2">{value.contactNumber}</td>
                <td className="px-4 py-2">{value.age}</td>
                <td className="px-4 py-2">{value.dob}</td>
                <td className="px-4 py-2">{value.salary}</td>
                <td className="px-4 py-2">{value.address}</td>
                <td className="px-4 py-2">
                  <IoIosMore />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
