import React, { use, useState } from "react";
import { TaskContext } from "../context/TaskContext";
import { FaTrash, FaEdit } from "react-icons/fa";
import EditModal from "./EditModal";
import toast from "react-hot-toast";
import { BsCalendar2DateFill } from "react-icons/bs";

const TaskList = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentTask, setCurrentTask] = useState(null);
  const openModal = (task) => {
    setCurrentTask(task);
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
    setCurrentTask(null);
  };
  const { todos, filter, toggleTodo, deleteTodo, theme } = use(TaskContext);
  const filtered = todos.filter((todo) =>
    filter === "all"
      ? true
      : filter === "active"
      ? !todo.completed
      : todo.completed
  );
  return (
    <div className="max-w-7xl mx-auto py-8">
      {" "}
      <div className=" space-y-4">
        {filtered.map((todo) => (
          <div
            key={todo.id}
            className={`grid grid-cols-1 md:grid-cols-3 items-center gap-4  p-6 rounded-lg shadow-lg ${
              theme === "dark"
                ? "bg-gray-900 text-gray-100 shadow-gray-300"
                : "bg-white text-gray-800 shadow-gray-500"
            }`}
          >
            {/* title and description */}
            <div className="flex items-center gap-3 ">
              <input
                type="checkbox"
                className=" accent-green-500 cursor-pointer"
                checked={todo.completed}
                onChange={() => toggleTodo(todo.id)}
              />

              <div>
                <p className=" font-semibold">{todo.title}</p>
                {todo.description && (
                  <p className=" text-gray-500">{todo.description}</p>
                )}
              </div>
            </div>

            {/* date */}
            <div className="text-center md:text-left md:ml-52 flex gap-2 items-center">
              <span>
                <BsCalendar2DateFill />
              </span>
              <p>{todo.date}</p>
            </div>

            {/* buttons */}
            <div className="flex justify-center md:justify-end gap-4">
              <button
                onClick={() => openModal(todo)}
                className="text-[#A1A1AA] hover:text-blue-700 cursor-pointer"
              >
                <FaEdit size={24} />
              </button>
              <button
                onClick={() => {
                  deleteTodo(todo.id);
                  toast.success("Task deleted!");
                }}
                className="text-[#A1A1AA] hover:text-red-700 cursor-pointer"
              >
                <FaTrash size={24} />
              </button>
            </div>
          </div>
        ))}
      </div>
      <EditModal
        isModalOpen={isModalOpen}
        closeModal={closeModal}
        task={currentTask}
      ></EditModal>
    </div>
  );
};

export default TaskList;
