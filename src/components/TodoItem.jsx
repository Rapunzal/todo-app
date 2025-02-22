import React, { useState } from "react";

const TodoItem = ({ dispatch }) => {
  const [todo, setTodo] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({
      payload: todo,
      type: "ADD",
    });
  };
  const handleChange = (e) => {
    setTodo(e.target.value);
  };
  return (
    <div className="flex justify-center  ">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="border-2 rounded px-16"
          onChange={handleChange}
          value={todo}
        />
        <button className="bg-violet-300 px-2 my-3 mx-3 rounded">Save</button>
      </form>
    </div>
  );
};

export default TodoItem;
