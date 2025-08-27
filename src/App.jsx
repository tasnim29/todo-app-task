import "./App.css";
import AddTaskModal from "./components/AddTaskModal";
import Filter from "./components/Filter";
import Header from "./components/Header";
import TaskList from "./components/TaskList";

function App() {
  return (
    <>
      <div className="bg-[#F4F4F5] min-h-screen">
        <Header></Header>
        <Filter></Filter>
        <AddTaskModal></AddTaskModal>
        <TaskList></TaskList>
      </div>
    </>
  );
}

export default App;
