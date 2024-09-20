import React from "react";
import UseMemo from "./UseMemo";
import ReactMemo from "./ReactMemo";

function App() {
  return (
    <div id="main">
      <div>
        <h1>React.useMemo</h1>
        <h1>My todos</h1>
        <p>New Todo</p>
        <button id="add-todo-btn">Add Todo</button>
      </div>
      <hr/>
      <UseMemo/>
      <hr/>
      <ReactMemo />
    </div>
  );
}

export default App;
