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

export default Task;
