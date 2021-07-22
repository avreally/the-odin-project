import React from "react";

const Task = ({ task, handleDelete }) => {
  return (
    <div>
      <p>
        {task.name} <button onClick={() => handleDelete(task)}>delete</button>
      </p>
    </div>
  );
};

const Overview = ({ tasks, handleDelete }) => {
  return (
    <div>
      {tasks.length === 0
        ? "No tasks yet"
        : tasks.map((task) => (
            <Task key={task.id} task={task} handleDelete={handleDelete} />
          ))}
    </div>
  );
};

export default Overview;
