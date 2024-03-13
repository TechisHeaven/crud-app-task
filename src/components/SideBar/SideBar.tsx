import { useState } from "react";
import { BsGrid } from "react-icons/bs";
import { FaBucket, FaRegUser } from "react-icons/fa6";
import { IoIosArrowDown } from "react-icons/io";
import { NavLink } from "react-router-dom";

const SideBar = () => {
  const [value, setValue] = useState<{
    id: string | number;
    expanded: boolean;
  }>({
    id: 1,
    expanded: false,
  });
  const [expandedSideBar, setExpandedSideBar] = useState(false);

  return (
    <div
      className={`bg-primaryWhite transition-all flex flex-col ${
        expandedSideBar ? "w-[80px] p-2" : "w-[250px]  p-4"
      } border h-screen relative`}
    >
      <div className="text-2xl bg-blue-400 grid place-items-center max-w-[50px] p-2  aspect-square rounded-md text-primaryWhite font-semibold tracking-wider m-2">
        <FaBucket className="text-blue-900 " />
      </div>
      <div className="h-full">
        {!expandedSideBar && (
          <h6 className="text-xs uppercase text-gray-400 px-2 font-medium">
            Main menu
          </h6>
        )}
        <div className="menu-items flex flex-col gap-2 my-2">
          <NavLink
            className={({ isActive, isPending }) =>
              isPending
                ? "pending"
                : isActive
                ? "active flex items-center select-none gap-2 p-2 px-4 rounded-md transition-all bg-blue-600 text-white cursor-pointer font-medium"
                : "flex items-center select-none gap-2 p-2 px-4 rounded-md transition-all hover:bg-blue-200 cursor-pointer font-medium"
            }
            to="/"
            // className="flex items-center select-none gap-2 p-2 px-4 rounded-md transition-all hover:bg-blue-200 cursor-pointer font-medium"
          >
            {/* <GoHome className="text-2xl" /> */}
            <BsGrid className="text-xl" />
            {!expandedSideBar && "Home"}
          </NavLink>
          <div className="sidebar-items">
            <ul>
              {menuItems.map((item: SidebarItem, index: number) => {
                return item.subMenu.length > 0 ? (
                  <>
                    <li
                      key={`${item.id}-${index}`}
                      onClick={() =>
                        setValue({ id: item.id, expanded: !value.expanded })
                      }
                      className="flex capitalize justify-between select-none items-center gap-2 p-2 px-4 rounded-md transition-all hover:bg-blue-200 cursor-pointer font-medium"
                    >
                      <h4 className="flex items-center flex-row gap-2">
                        <FaRegUser />
                        {!expandedSideBar && item.name}
                      </h4>
                      {!expandedSideBar && <IoIosArrowDown />}
                    </li>
                    <ul className="relative">
                      {value.id == item.id &&
                        value.expanded &&
                        item.subMenu.map((data: Item, index) => {
                          return (
                            <li
                              className="capitalize p-2 ml-4 pl-4 border-gray-300 border-l-2 before:absolute before:left-0 before:w-3 before:translate-y-3 before:translate-x-4 before:h-[2px] before:rounded-md before:bg-gray-300 hover:bg-blue-200 rounded-sm transition-all cursor-pointer font-semibold"
                              key={index}
                            >
                              {data.name}
                            </li>
                          );
                        })}
                    </ul>
                  </>
                ) : (
                  <>
                    <li
                      key={item.id}
                      className="flex capitalize justify-between select-none items-center gap-2 p-2 px-4 rounded-md transition-all hover:bg-gray-200 cursor-pointer font-medium"
                    >
                      {" "}
                      <h4 className="flex items-center flex-row gap-2">
                        {!expandedSideBar && <FaRegUser />}
                        {item.name}
                      </h4>
                    </li>
                  </>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
      <div
        className="expandIcon absolute -right-[18px] group cursor-pointer p-2 bottom-[50%]"
        onClick={() => setExpandedSideBar(!expandedSideBar)}
      >
        <span className="block relative w-1 h-3 bg-primaryBlack/50 group-hover:bg-primaryBlack group-hover:-rotate-12 transition-all"></span>
        <span className="block relative w-1 h-3 bg-primaryBlack/50 group-hover:bg-primaryBlack group-hover:rotate-12 transition-all"></span>
      </div>
    </div>
  );
};

export default SideBar;

interface SidebarItem {
  id: number | string;
  name: string;
  subMenu: Item[];
}

interface Item {
  id: number | string;
  name: string;
  icon: string;
}

const menuItems = [
  {
    id: 1,
    name: "Mobile",
    subMenu: [
      {
        id: 11,
        name: "MotoG",
        icon: "",
      },
      {
        id: 12,
        name: "Apple",
        icon: "",
      },
      {
        id: 13,
        name: "Samsung",
        icon: "",
      },
    ],
  },
  {
    id: 2,
    name: "TV",
    subMenu: [
      {
        id: 14,
        name: "Onida",
        icon: "",
      },
      {
        id: 15,
        name: "Sansui",
        icon: "",
      },
      {
        id: 16,
        name: "Sony",
        icon: "",
      },
    ],
  },
  {
    id: 3,
    name: "Car",
    subMenu: [],
  },
];
