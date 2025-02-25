import React, { useState } from "react";

const TodoItem = ({ dispatch, todo, setTodo }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({
      payload: todo,
      type: "ADD",
    });
    setTodo("");
  };
  const handleChange = (e) => {
    setTodo(e.target.value);
  };
  return (
    <div className="flex justify-center ">
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Add Task"
          type="text"
          className="border-2 rounded px-38"
          onChange={handleChange}
          value={todo}
        />
        <button className="bg-violet-300 px-2 my-3 mx-3 rounded">Save</button>
      </form>
    </div>
  );
};

export default TodoItem;
