import React from "react";

const Input = ({ addTask, newTask, handleInputChange }) => {
  return (
    <form onSubmit={addTask}>
      <label htmlFor="newTaskInput">Create new task:</label>
      <input
        id="newTaskInput"
        value={newTask}
        onChange={handleInputChange}
      ></input>
      <button type="submit">submit</button>
    </form>
  );
};

export default Input;
