import React from "react";
import { useState } from "react";

const TodoList = ({ dispatch, item, todoList }) => {
  const [completed, setCompleted] = useState(item.completed);
  //   console.log(state);
  const handleChange = () => {
    setCompleted(!completed);
    console.log(completed);
    let newItem = { ...item, completed: !completed };
    dispatch({ payload: newItem, type: "COMPLETED" });
  };

  const handleDelete = (id) => {
    const newTodos = todoList.filter((item) => item.id !== id);
    console.log(newTodos, " in delete");
    dispatch({ payload: newTodos, type: "DELETE" });
  };
  return (
    <div className="flex justify-start">
      <div className="flex  justify-start px-4 py-2 mx-3 ">
        <input type="checkbox" onChange={handleChange} value={completed} />
        <p className={completed ? "line-through px-3" : "px-3"}>{item.title}</p>
        <button className="button mx-2 bg-violet-300 px-2 py-1 text-sm rounded hover:bg-violet-500">
          Edit
        </button>
        <button
          onClick={() => handleDelete(item.id)}
          className="button mx-2 bg-violet-200 px-2 py-1 text-sm rounded hover:bg-violet-500"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default TodoList;
