import React from "react";

const Task = ({ task }) => {
  return <p>{task.name}</p>;
};

const Overview = ({ tasks }) => {
  return (
    <div>
      {tasks.length === 0
        ? "No tasks yet"
        : tasks.map((task) => <Task key={task.id} task={task} />)}
    </div>
  );
};

export default Overview;
