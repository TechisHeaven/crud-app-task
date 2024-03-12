import { IoIosMore } from "react-icons/io";

const Table = () => {
  return (
    <div className="overflow-x-auto p-2 max-w-[1200px]">
      <table className="w-full bg-white rounded-md overflow-hidden">
        <thead className="bg-gray-200">
          <tr>
            <th className="px-4 py-2 text-start w-1">Avatar</th>
            <th className="px-4 py-2 text-start">Name</th>
            <th className="px-4 py-2 text-start">Age</th>
            <th className="px-4 py-2 text-start">Email</th>
            <th className="px-4 py-2 text-start">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr className="hover:bg-gray-100">
            <td className="px-4 py-2">
              <img
                src="./vite.svg"
                className="border aspect-square rounded-full w-10"
                alt="employee-image"
              />
            </td>
            <td className="px-4 py-2">John Doe</td>
            <td className="px-4 py-2">30</td>
            <td className="px-4 py-2">john@example.com</td>
            <td className="px-4 py-2">
              <IoIosMore />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Table;
