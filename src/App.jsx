import { useReducer } from "react";
import "./App.css";
import Header from "./components/Header";
import TodoItem from "./components/TodoItem";
import TodoList from "./components/TodoList";
import { initialState } from "./data";
import reducer from "./components/reducer.js";

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <Header />

      <TodoItem dispatch={dispatch} />
      <div className="flex justify-center  ">
        <div>
          {state.map((item) => (
            <TodoList dispatch={dispatch} item={item} todoList={state} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
