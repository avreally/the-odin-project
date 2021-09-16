import React from "react";
import { FaRegTrashAlt } from "react-icons/fa";
import { FaRegEdit } from "react-icons/fa";
import { FaRegCheckSquare } from "react-icons/fa";

const Task = ({
  task,
  handleDelete,
  handleEdit,
  handleTaskChange,
  editTaskId,
  changedTaskName,
  handleSave,
}) => {
  return (
    <div>
      {task.id === editTaskId ? (
        <span>
          <input value={changedTaskName} onChange={handleTaskChange}></input>
          <button onClick={handleSave}>
            <FaRegCheckSquare />
          </button>{" "}
        </span>
      ) : (
        <span>
          {task.name}{" "}
          <button onClick={() => handleEdit(task)}>
            <FaRegEdit />
          </button>{" "}
        </span>
      )}
      <button onClick={() => handleDelete(task)}>
        <FaRegTrashAlt />
      </button>
    </div>
  );
};

export default Task;
