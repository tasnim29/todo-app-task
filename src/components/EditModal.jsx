import React, { use, useEffect, useState } from "react";
import { TaskContext } from "../context/TaskContext";
import toast from "react-hot-toast";

const EditModal = ({ closeModal, isModalOpen, task }) => {
  const { editTodo, theme } = use(TaskContext);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (task) {
      setTitle(task.title);

      setDescription(task.description);
    }
  }, [task]);

  const handleEditTask = (e) => {
    setLoading(true);
    e.preventDefault();

    setTimeout(() => {
      editTodo(task.id, title, description);
      setLoading(false);
      e.target.reset();
      closeModal();
      toast.success("Successfully edited");
    }, 2000);
  };

  if (!isModalOpen) return null;

  return (
    <div>
      <div className="fixed inset-0 bg-black/30 bg-opacity-50 flex justify-center items-center z-50">
        <div
          className={`rounded-lg shadow-lg w-full max-w-md p-6 ${
            theme === "dark"
              ? "bg-gray-900 text-gray-100 shadow-gray-700"
              : "bg-white text-gray-800 shadow-gray-300"
          }`}
        >
          <h2 className="text-2xl font-semibold mb-4">Task Details</h2>

          <form onSubmit={handleEditTask}>
            <label htmlFor="">Title</label>
            <input
              type="text"
              name="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Add a task title"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <label htmlFor="">Date</label>
            <input
              readOnly
              type="date"
              name="date"
              value={task.date}
              placeholder="Select date"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-not-allowed"
            />
            <label htmlFor="">Description</label>
            <textarea
              name="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Add any description to you task"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <div className="flex justify-end gap-3">
              <button
                type="button"
                onClick={closeModal}
                className="px-8 py-1 rounded-sm border border-gray-300 cursor-pointer"
              >
                Close
              </button>
              <button
                type="submit"
                className="bg-[#15803d] text-white px-8 py-1 rounded-sm cursor-pointer"
              >
                {loading ? (
                  <div>
                    <span className="loading loading-spinner loading-xl"></span>
                  </div>
                ) : (
                  "Edit"
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditModal;
