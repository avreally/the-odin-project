import React from "react";
import Task from "./Task";

const Overview = ({ tasks, handleDelete, taskAmount }) => {
  return (
    <div>
      {tasks.length === 0 ? (
        "No tasks yet"
      ) : (
        <div>
          <ol>
            {tasks.map((task) => (
              <li key={task.id}>
                <Task task={task} handleDelete={handleDelete} />
              </li>
            ))}
          </ol>
          <p>
            You have {taskAmount}
            {taskAmount === 1 ? " task" : " tasks"}.
          </p>
        </div>
      )}
    </div>
  );
};

export default Overview;
