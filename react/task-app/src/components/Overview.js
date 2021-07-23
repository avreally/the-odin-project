import React from "react";
import { FaRegTrashAlt } from "react-icons/fa";
import { FaRegEdit } from "react-icons/fa";

const Task = ({ task, handleDelete }) => {
  return (
    <div>
      <p>
        {task.name}{" "}
        <button>
          <FaRegEdit />
        </button>{" "}
        <button onClick={() => handleDelete(task)}>
          <FaRegTrashAlt />
        </button>
      </p>
    </div>
  );
};

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
