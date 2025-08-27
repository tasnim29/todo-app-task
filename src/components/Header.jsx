import React, { use } from "react";
import { TaskContext } from "../context/TaskContext";

const Header = () => {
  const { total, completed, remaining } = use(TaskContext);
  return (
    <div className="pt-20">
      <div className="bg-white shadow-xl max-w-7xl mx-auto py-5 rounded-lg px-10">
        <ul className="flex justify-between">
          <li className="font-semibold text-lg">All:{total}</li>
          <li className="font-semibold text-xl">Active:{remaining}</li>
          <li className="font-semibold text-xl">Completed:{completed}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
