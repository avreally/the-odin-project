import React, { useState } from "react";
import uniqid from "uniqid";
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
      <button type="submit">submit</button>
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
      id: uniqid(),
    };

    setTasks(tasks.concat(addedTask));
    setNewTask("");
  };

  const handleDelete = (task) => {
    const id = task.id;
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div>
      <Input
        addTask={addTask}
        newTask={newTask}
        handleTaskChange={handleTaskChange}
      />
      <Overview tasks={tasks} handleDelete={handleDelete} />
    </div>
  );
};

export default App;
