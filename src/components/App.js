import React, { useState } from "react";
import UseMemo from "./UseMemo";
import ReactMemo from "./ReactMemo";

function App() {
  const [todos, setTodos] = useState([]);
  const handleTodo = (e) => {
    e.preventDefault();
    const todo = document.getElementById("todo-input");
    console.log("todo===", todo);

    if (todo?.value?.trim() && todo?.value?.length > 5) {
      console.log("render in todos");

      setTodos([...todos, todo.value]);
      todo.value = "";
    }
  };
  return (
    <div id="main">
      <div>
        <h1>React.useMemo</h1>
        <h1>My todos</h1>
        <p>New Todo</p>
        <input type="text" placeholder="Add Todo" id="todo-input" />

        <button
          id="add-todo-btn"
          onClick={() => {
            handleTodo(event);
          }}
        >
          Add Todo
        </button>
      </div>
      <div>
        <ul>
          {todos.map((todoData, index) => (
            <li key={index} id={`todo-${index}`}>{todoData}</li>
          ))}
        </ul>
      </div>
      <hr />
      <UseMemo />
      <hr />
      <ReactMemo />
    </div>
  );
}

export default App;
