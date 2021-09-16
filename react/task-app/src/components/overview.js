import React from "react";
import Task from "./task";
import "../styles/overview.css";

const Overview = ({
  tasks,
  handleDelete,
  handleEdit,
  handleTaskChange,
  editTaskId,
  changedTaskName,
  handleSave,
}) => {
  return (
    <div>
      {tasks.length === 0 ? (
        "No tasks yet"
      ) : (
        <div>
          <ol>
            {tasks.map((task) => (
              <li key={task.id} className="single-task">
                <Task
                  task={task}
                  handleDelete={handleDelete}
                  handleEdit={handleEdit}
                  handleTaskChange={handleTaskChange}
                  editTaskId={editTaskId}
                  changedTaskName={changedTaskName}
                  handleSave={handleSave}
                />
              </li>
            ))}
          </ol>
          <p>
            You have {tasks.length}
            {tasks.length === 1 ? " task" : " tasks"}.
          </p>
        </div>
      )}
    </div>
  );
};

export default Overview;
