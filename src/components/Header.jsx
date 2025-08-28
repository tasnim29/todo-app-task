import React, { use } from "react";
import { TaskContext } from "../context/TaskContext";
import DarkMode from "./DarkMode";

const Header = () => {
  const { total, completed, remaining, theme } = use(TaskContext);
  return (
    <div className="">
      <div
        className={`max-w-7xl mx-auto py-5 px-10 rounded-lg shadow-lg transition-colors duration-300
          ${
            theme === "dark"
              ? "bg-gray-900 text-gray-100 shadow-gray-300"
              : "bg-white text-gray-800 shadow-gray-500"
          }
        `}
      >
        <ul className="flex flex-col md:flex-row justify-between items-center gap-4">
          <li className="font-semibold text-lg md:text-xl">All: {total}</li>
          <li className="font-semibold text-lg md:text-xl">
            Active: {remaining}
          </li>
          <li className="font-semibold text-lg md:text-xl">
            Completed: {completed}
          </li>
          <li>
            <DarkMode />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
