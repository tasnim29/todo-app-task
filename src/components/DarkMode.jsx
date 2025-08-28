import React, { use } from "react";
import { TaskContext } from "../context/TaskContext";

const DarkMode = () => {
  const { theme, setTheme } = use(TaskContext);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  return (
    <div>
      <button className="btn btn-sm btn-outline" onClick={toggleTheme}>
        {theme === "light" ? "🌙 Dark" : "☀️ Light"}
      </button>
    </div>
  );
};

export default DarkMode;
