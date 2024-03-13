import { Menu, Transition } from "@headlessui/react";
import React, { useState } from "react";
import { Fragment } from "react/jsx-runtime";
import UpdateEmployeeModal from "../Model/UpdateEmployee";
import DeleteModal from "../Model/DeleteModal";

export default function CustomDropDown({
  children,
  id,
}: {
  children: React.ReactNode;
  id: number | string;
}) {
  //*custom dropdown from tailwind ui and headless ui
  function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(" ");
  }
  let [isOpen, setIsOpen] = useState(false);
  let [isDeleteOpen, setDeleteIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }
  function closeDeleteModal() {
    setDeleteIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  function openDeleteModal() {
    setDeleteIsOpen(true);
  }

  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
          {children}
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            <p className="px-4 uppercase font-semibold">id: {id}</p>
            <Menu.Item>
              {({ active }) => (
                <button
                  onClick={openModal}
                  className={classNames(
                    active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                    "block px-4 py-2 text-sm  cursor-pointer w-full text-start"
                  )}
                >
                  Edit
                </button>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <button
                  onClick={openDeleteModal}
                  className={classNames(
                    active ? "bg-red-100 text-red-900" : "text-red-500",
                    "block px-4 py-2 text-sm transition-colors cursor-pointer w-full text-start"
                  )}
                >
                  Delete
                </button>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>

      <UpdateEmployeeModal id={id} isOpen={isOpen} closeModal={closeModal} />
      <DeleteModal
        id={id}
        isOpen={isDeleteOpen}
        closeModal={closeDeleteModal}
      />
    </Menu>
  );
}
