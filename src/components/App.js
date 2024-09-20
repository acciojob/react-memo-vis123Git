import React from "react";
import UseMemo from "./UseMemo";

function App() {
  return (
    <>
      <div>
        <h1>React.useMemo</h1>
        <h1>My todos</h1>
        <p>New Todo</p>
        <button>Add Todo</button>
      </div>
      <UseMemo/>
    </>
  );
}

export default App;
