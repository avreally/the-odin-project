import React, { useState } from "react";
import uniqid from "uniqid";
import Overview from "./components/Overview";
import Input from "./components/Input";

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [editTaskId, setEditTaskId] = useState();
  const [changedTaskName, setChangedTaskName] = useState("");

  const handleInputChange = (event) => {
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

  const handleEdit = (task) => {
    setEditTaskId(task.id);
    setChangedTaskName(task.name);
  };

  const handleTaskChange = (event) => {
    event.preventDefault();
    setChangedTaskName(event.target.value);
  };

  const handleSave = () => {
    const id = editTaskId;
    const task = tasks.find((t) => t.id === id);
    const changedTask = { ...task, name: changedTaskName };
    setTasks(tasks.map((task) => (task.id !== id ? task : changedTask)));
    setEditTaskId();
  };

  return (
    <div>
      <Input
        addTask={addTask}
        newTask={newTask}
        handleInputChange={handleInputChange}
      />
      <Overview
        tasks={tasks}
        handleDelete={handleDelete}
        handleEdit={handleEdit}
        handleTaskChange={handleTaskChange}
        editTaskId={editTaskId}
        changedTaskName={changedTaskName}
        handleSave={handleSave}
      />
    </div>
  );
};

export default App;
