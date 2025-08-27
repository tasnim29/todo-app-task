import React, { use } from "react";
import { FaSearch } from "react-icons/fa";
import logo from "../assets/logo.png";
import { TaskContext } from "../context/TaskContext";

const Filter = () => {
  const { filter, setFilter, clearCompleted } = use(TaskContext);
  return (
    <div className="pt-6">
      <div className="bg-white shadow-xl max-w-7xl mx-auto py-5 rounded-lg px-10">
        <ul className="flex justify-between items-center gap-4">
          <div>
            <li>
              <img className="h-[50px] w-[58px]" src={logo} alt="Logo" />
            </li>
          </div>

          <div className="flex gap-5 items-center flex-1 justify-end">
            <li className="relative w-full max-w-lg">
              <input
                type="text"
                placeholder="Search tasks..."
                className="w-full border border-gray-300 rounded-lg pl-10 pr-4 py-2 bg-[#F8FAfC] text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <FaSearch className="absolute left-3 top-3 text-gray-400" />
            </li>

            {/* Dropdown */}
            <li>
              <select
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
                className="border border-gray-300 rounded-lg px-4 py-2 text-gray-700 bg-[#F4F4F5] focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">All</option>
                <option value="active">Active</option>
                <option value="completed">Completed</option>
              </select>
            </li>
            <li>
              <button
                onClick={clearCompleted}
                className="bg-red-500 text-white px-4 py-2 rounded-sm cursor-pointer"
              >
                Clear Completed
              </button>
            </li>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Filter;
