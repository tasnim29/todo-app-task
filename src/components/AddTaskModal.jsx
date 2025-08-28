import React, { use, useState } from "react";

import { v4 as uuidv4 } from "uuid";
import { TaskContext } from "../context/TaskContext";
import toast from "react-hot-toast";

const AddTaskModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  const [loading, setLoading] = useState(false);

  const { addTodo, theme } = use(TaskContext);

  const handleAddTask = (e) => {
    e.preventDefault();
    setLoading(true);
    const title = e.target.title.value;
    const date = e.target.date.value;
    const description = e.target.description.value;
    const newTask = {
      id: uuidv4(),
      title,
      date,
      description,
    };

    setTimeout(() => {
      addTodo(newTask);
      setLoading(false);
      e.target.reset();
      setIsModalOpen(false);
      toast.success("Task added successfully");
    }, 2000);
  };

  return (
    <div className="pt-8 max-w-7xl mx-auto">
      <div className="flex justify-between items-center">
        <h1
          className={`text-3xl font-semibold ${
            theme === "dark" ? "text-white" : "text-black"
          }`}
        >
          Tasks
        </h1>
        <button
          onClick={openModal}
          className="bg-[#15803d] text-white font-bold w-44 h-12 rounded-lg cursor-pointer"
        >
          <span className="mr-3">+</span> <span>Add Task</span>
        </button>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black/30 bg-opacity-50 flex justify-center items-center z-50">
          <div
            className={`rounded-lg shadow-lg w-full max-w-md p-6 ${
              theme === "dark"
                ? "bg-gray-900 text-gray-100 shadow-gray-700"
                : "bg-white text-gray-800 shadow-gray-300"
            }`}
          >
            <h2 className="text-2xl font-semibold mb-4">Task Details</h2>

            <form onSubmit={handleAddTask}>
              <label htmlFor="">Title</label>
              <input
                type="text"
                name="title"
                placeholder="Add a task title"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <label htmlFor="">Date</label>
              <input
                type="date"
                name="date"
                placeholder="Select date"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <label htmlFor="">Description</label>
              <textarea
                name="description"
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
                    "save"
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddTaskModal;
