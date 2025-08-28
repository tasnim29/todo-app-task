# Todo

## Setup & Run Instructions

### Clone Repository

```bash
git clone https://github.com/your-username/todo-app-task.git
cd todo-app
```

### Install Dependencies

```bash
npm install
```

### Run

```bash
npm run dev
```

## Architecture Notes

1. Framework: React
2. State Management: Context API
3. Global State: Task Provider component(todos state)
4. Actions: addTodo , editTodo , toggleTodo , deleteTodo , clearCompleted ,setFilter
5. UI Structure:

---Header: live stats + Darkmode
---Filter: All / Active / Completed + logo
---AddTaskModal: Add button + modal for adding task
---EditModal: modal for editing task
---TaskList: shows all task
---DarkMode: dark mode button
