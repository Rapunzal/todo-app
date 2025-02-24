import { useReducer, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import TodoItem from "./components/TodoItem";
import TodoList from "./components/TodoList";
import { initialState } from "./data";
import reducer from "./components/reducer.js";

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [todo, setTodo] = useState("");
  return (
    <div>
      <Header />
      <div className="my-8">
        <TodoItem dispatch={dispatch} todo={todo} setTodo={setTodo} />

        <div className="flex justify-center  ">
          <div>
            {state.map((item) => (
              <TodoList
                dispatch={dispatch}
                item={item}
                todoList={state}
                todo={todo}
                setTodo={setTodo}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
