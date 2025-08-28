import { use } from "react";
import "./App.css";
import AddTaskModal from "./components/AddTaskModal";
import Filter from "./components/Filter";
import Header from "./components/Header";
import TaskList from "./components/TaskList";
import { TaskContext } from "./context/TaskContext";
import { Toaster } from "react-hot-toast";

function App() {
  const { theme } = use(TaskContext);
  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <div
        className={`min-h-screen px-5 ${
          theme === "dark" ? "bg-gray-900" : "bg-[#F4F4F5] "
        }`}
      >
        <Header></Header>
        <Filter></Filter>
        <AddTaskModal></AddTaskModal>
        <TaskList></TaskList>
      </div>
    </>
  );
}

export default App;
