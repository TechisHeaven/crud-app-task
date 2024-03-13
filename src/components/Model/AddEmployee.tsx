import { Dialog, Transition } from "@headlessui/react";
import { ChangeEvent, FormEvent, Fragment, useState } from "react";
import { TableData } from "../../types/main.type";
import { useDispatchContext } from "../../store/store";
import uuid4 from "uuid4";
export default function AddEmployeeModal({
  isOpen,
  closeModal,
}: {
  isOpen: boolean;
  closeModal: any;
}) {
  const id = uuid4();
  const dispatch = useDispatchContext();
  const [formData, setFormData] = useState<TableData>({
    id: id,
    email: "",
    address: "",
    age: 0,
    contactNumber: 0,
    dob: "",
    firstName: "",
    imageUrl: "./vite.svg",
    lastName: "",
    salary: 0,
  });

  async function HandleForm(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    formData.id = id;
    await dispatch({ type: "ADD_ITEM_TABLE", payload: formData });
    closeModal();
  }

  const handleFormData = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prevFormData: TableData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };
  return (
    isOpen && (
      <>
        <div className="fixed inset-0 flex items-center justify-center"></div>
        <Transition appear show={isOpen} as={Fragment}>
          <Dialog as="div" className="relative z-10" onClose={closeModal}>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-black/25" />
            </Transition.Child>

            <div className="fixed inset-0 overflow-y-auto">
              <div className="flex min-h-full items-center justify-center p-4 text-center">
                <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0 scale-95"
                  enterTo="opacity-100 scale-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100 scale-100"
                  leaveTo="opacity-0 scale-95"
                >
                  <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                    <Dialog.Title
                      as="h3"
                      className="text-lg font-medium leading-6 text-gray-900"
                    >
                      Create Employee
                    </Dialog.Title>
                    <div className="mt-2">
                      <p className="text-sm text-gray-500">
                        Create a new employee entry
                      </p>
                    </div>
                    <form onSubmit={HandleForm} className="my-2">
                      <input
                        className="border p-2 px-4 my-1 rounded-sm w-full"
                        type="text"
                        onChange={handleFormData}
                        name="firstName"
                        placeholder="Enter Employee first name"
                      />
                      <input
                        className="border p-2 px-4 my-1 rounded-sm w-full"
                        type="text"
                        onChange={handleFormData}
                        name="lastName"
                        placeholder="Enter Employee last name"
                      />
                      <input
                        className="border p-2 px-4 my-1 rounded-sm w-full"
                        type="email"
                        onChange={handleFormData}
                        name="email"
                        placeholder="Enter Email Address"
                      />
                      <input
                        className="border p-2 px-4 my-1 rounded-sm w-full"
                        type="tel"
                        onChange={handleFormData}
                        name="contactNumber"
                        maxLength={10}
                        placeholder="Enter Contact number"
                      />
                      <input
                        className="border p-2 px-4 my-1 rounded-sm w-full"
                        type="number"
                        name="age"
                        onChange={handleFormData}
                        maxLength={2}
                        placeholder="age"
                      />
                      <input
                        className="border p-2 px-4 my-1 rounded-sm w-full"
                        type="date"
                        name="dob"
                        onChange={handleFormData}
                        placeholder="dob"
                      />
                      <input
                        className="border p-2 px-4 my-1 rounded-sm w-full"
                        type="text"
                        name="salary"
                        onChange={handleFormData}
                        placeholder="salary"
                      />
                      <input
                        className="border p-2 px-4 my-1 rounded-sm w-full"
                        type="text"
                        onChange={handleFormData}
                        name="address"
                        placeholder="address"
                      />
                      <div className="mt-4">
                        <button
                          type="submit"
                          className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                          // onClick={closeModal}
                        >
                          Create
                        </button>
                      </div>
                    </form>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition>
      </>
    )
  );
}
