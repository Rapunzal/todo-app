import React from "react";
import { useState } from "react";

const TodoList = ({ dispatch, item, todoList, todo, setTodo }) => {
  const [input, setInput] = useState("");

  console.log(item.completed, " completed==");

  const handleChange = (id) => {
    // setCompleted(!completed);
    //console.log(completed);
    dispatch({ payload: id, type: "COMPLETED" });
  };

  const handleDelete = (id) => {
    const newTodos = todoList.filter((item) => item.id !== id);
    console.log(newTodos, " in delete");
    dispatch({ payload: newTodos, type: "DELETE" });
  };

  const handleEdit = (id) => {
    const t = todoList.find((item) => item.id === id);
    setInput(t.title);
  };
  return (
    <div className="flex justify-start">
      <div className="flex  justify-start px-4 py-2 mx-3 ">
        <input
          type="checkbox"
          onChange={() => handleChange(item.id)}
          value={item.completed}
          checked={item.completed}
        />
        {/* <p className={completed ? "line-through px-3" : "px-3"}>{item.title}</p> */}
        <p className={"px-3"}>{item.title}</p>
        <button
          onClick={() => handleEdit(item.id)}
          className="button mx-2 bg-violet-300 px-2 py-1 text-sm rounded hover:bg-violet-500"
        >
          Edit
        </button>
        <button
          disabled={!item.completed}
          onClick={() => handleDelete(item.id)}
          className="button mx-2 bg-violet-300 px-2 py-1 text-sm rounded disabled:opacity-40  hover:bg-violet-500"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default TodoList;
