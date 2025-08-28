import React, { use } from "react";
import { FaSearch } from "react-icons/fa";
import logo from "../assets/logo.png";
import { TaskContext } from "../context/TaskContext";

const Filter = () => {
  const { filter, setFilter, clearCompleted, theme } = use(TaskContext);
  return (
    <div className="pt-6">
      <div
        className={`max-w-7xl mx-auto py-5 px-10 rounded-lg shadow-xl transition-colors duration-300
          ${
            theme === "dark"
              ? "bg-gray-900 text-gray-100 shadow-gray-700"
              : "bg-white text-gray-800 shadow-gray-300"
          }
        `}
      >
        <ul className="flex flex-col md:flex-row justify-between items-center gap-4 md:gap-6">
          {/* Logo */}
          <li>
            <img className="h-10 w-auto" src={logo} alt="Logo" />
          </li>

          <li className="flex flex-col md:flex-row gap-3 md:gap-5 w-full md:w-auto items-center justify-end">
            {/* Search */}
            <div className="relative w-full md:w-64">
              <input
                type="text"
                placeholder="Search tasks..."
                className="w-full border border-gray-300 rounded-lg pl-10 pr-4 py-2 bg-[#F8FAFC] text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <FaSearch className="absolute left-3 top-3 text-gray-400" />
            </div>

            {/* Dropdown */}
            <select
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              className="border border-gray-300 rounded-lg px-4 py-2 text-gray-700 bg-[#F4F4F5] focus:outline-none focus:ring-2 focus:ring-blue-500 w-full md:w-auto"
            >
              <option value="all">all</option>
              <option value="active">Active</option>
              <option value="completed">Completed</option>
            </select>

            {/* Button */}
            <button
              onClick={clearCompleted}
              className="bg-red-500 text-white px-4 py-2 rounded-sm cursor-pointer w-full md:w-auto"
            >
              Clear Completed
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Filter;
