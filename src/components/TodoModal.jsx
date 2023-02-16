import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
export default function TodoModal({
  isOpen,
  closeModal,
  onChangeEditState,
  currentTodoId,
  onRemoveTodo,
}) {
  return (
    <>
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
            <div className="fixed inset-0 bg-black bg-opacity-25" />
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
                <Dialog.Panel className="max-w-md transform overflow-hidden rounded-2xl bg-neutral-800 p-20 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  ></Dialog.Title>

                  <div className="flex">
                    <button
                      type="button"
                      className="flex flex-col justify-center items-center px-60 py-20 mr-4 rounded-md border border-transparent bg-neutral-700 text-sm font-medium   focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={() => {
                        onChangeEditState(currentTodoId);
                        closeModal();
                      }}
                    >
                      <BorderColorIcon
                        sx={{
                          color: "#346beb",
                        }}
                      />
                      <span className="text-white font-semibold mt-8">
                        수정하기
                      </span>
                    </button>
                    <button
                      type="button"
                      className="flex flex-col justify-center items-center px-60 py-20 ml-4 rounded-md border border-transparent bg-neutral-700 text-sm font-medium  h0 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={() => {
                        onRemoveTodo(currentTodoId);
                        closeModal();
                      }}
                    >
                      <DeleteForeverIcon
                        sx={{
                          color: "#e64e4e",
                        }}
                      />
                      <span className="text-white font-semibold mt-8">
                        삭제하기
                      </span>
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
