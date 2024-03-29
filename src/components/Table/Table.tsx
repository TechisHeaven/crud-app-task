import { IoIosMore } from "react-icons/io";
import { TableData } from "../../types/main.type";
import CustomDropDown from "../CustomDropDown/CustomDropDown";

const Table = ({ tableData }: { tableData: TableData[] }) => {
  // const tableHeadings = Object.keys(tableData[2] || {}).map((key) => key);
  //* we can use both like if dont know about data can use like this to maintain all tablesheading or not to hard code everything
  const tableHeadings = [
    "id",
    "ImageUrl",
    "firstName",
    "lastName",
    "email",
    "contactNumber",
    "age",
    "dob",
    "salary",
    "address",
  ];

  function HandleClickItem(value: TableData) {
    console.log(`${value.firstName} ${value.lastName}`);
  }

  //rendering tailwind css table with dynamic data.
  return (
    <table className="overflow-x-auto w-full table-auto bg-white rounded-md">
      <thead className="bg-gray-200">
        <tr>
          {tableHeadings.map((value, index) => {
            return (
              <th key={index} className="px-4 py-2 text-start  capitalize">
                {value}
              </th>
            );
          })}
          <th className="px-4 py-2 text-start capitalize">Actions</th>
        </tr>
      </thead>
      <tbody>
        {tableData.map((value: TableData) => {
          return (
            <tr
              onClick={() => HandleClickItem(value)}
              key={value.id}
              className="hover:bg-gray-100 cursor-pointer"
            >
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
                <CustomDropDown id={value.id}>
                  <IoIosMore />
                </CustomDropDown>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Table;
