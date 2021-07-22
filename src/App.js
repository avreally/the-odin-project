import React, { useState } from "react";
import Overview from "./components/Overview";

const Input = ({ addTask, newTask, handleTaskChange }) => {
  return (
    <form onSubmit={addTask}>
      <label htmlFor="newTaskInput">Create new task:</label>
      <input
        id="newTaskInput"
        value={newTask}
        onChange={handleTaskChange}
      ></input>
      <button type="submit">Submit</button>
    </form>
  );
};

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  const handleTaskChange = (event) => {
    setNewTask(event.target.value);
  };

  const addTask = (event) => {
    event.preventDefault();

    const addedTask = {
      name: newTask,
      id: tasks.length + 1,
    };

    setTasks(tasks.concat(addedTask));
    setNewTask("");
  };

  return (
    <div>
      <Input
        addTask={addTask}
        newTask={newTask}
        handleTaskChange={handleTaskChange}
      />
      <Overview tasks={tasks} />
    </div>
  );
};

export default App;
