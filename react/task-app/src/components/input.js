import React from "react";
import "../styles/input.css";

const Input = ({ addTask, newTask, handleInputChange }) => {
  return (
    <form onSubmit={addTask} className="new-task-form">
      <label htmlFor="newTaskInput">Create new task:</label>
      <div className="input-and-button">
        <input
          id="newTaskInput"
          value={newTask}
          onChange={handleInputChange}
        ></input>
        <button type="submit">submit</button>
      </div>
    </form>
  );
};

export default Input;
