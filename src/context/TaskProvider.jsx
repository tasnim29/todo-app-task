import React, { useEffect, useState } from "react";
import { TaskContext } from "./TaskContext";

const TaskProvider = ({ children }) => {
  const [todos, setTodos] = useState(() => {
    // Load from localStorage if exists
    const saved = localStorage.getItem("todos");
    return saved ? JSON.parse(saved) : [];
  });
  const [filter, setFilter] = useState("all"); // all | active | completed

  // Persist todos to localStorage
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  // Actions
  const addTodo = (newTodo) => {
    setTodos([...todos, newTodo]);
  };

  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const editTodo = (id, title) => {
    setTodos(todos.map((todo) => (todo.id === id ? { ...todo, title } : todo)));
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const clearCompleted = () => {
    setTodos(todos.filter((todo) => !todo.completed));
  };

  // Derived stats
  const total = todos.length;
  const completed = todos.filter((t) => t.completed).length;
  const remaining = total - completed;

  const information = {
    todos,
    filter,
    setFilter,
    addTodo,
    toggleTodo,
    editTodo,
    deleteTodo,
    clearCompleted,
    total,
    completed,
    remaining,
  };

  return <TaskContext value={information}>{children}</TaskContext>;
};

export default TaskProvider;
