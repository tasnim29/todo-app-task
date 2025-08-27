import React, { use } from "react";
import { TaskContext } from "../context/TaskContext";

const TaskList = () => {
  const { todos, filter, toggleTodo, editTodo, deleteTodo } = use(TaskContext);
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
      <div className=" space-y-2">
        {filtered.map((todo) => (
          <div
            key={todo.id}
            className="flex items-center justify-between bg-white py-8 rounded-lg"
          >
            {/* title and description */}
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
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
            <div>
              <p>{todo.date}</p>
            </div>

            {/* buttons */}
            <div>
              <button
                onClick={(e) => editTodo(todo.id, e.target.value)}
                className="bg-blue-500 px-5 py-1"
              >
                Edit
              </button>
              <button
                onClick={() => deleteTodo(todo.id)}
                className="text-red-500"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TaskList;
