import React, { useState } from "react";

function UseMemo() {
  const [count, setCount] = useState(0);

  // Handle count increment on button click
  const incrementCount = () => {
    setCount(prevCount => prevCount + 1); // Increment count by 1
  };

  return (
    <div>
      <label>Count : {count}</label>
      <button onClick={incrementCount}>+</button> {/* Increment on click */}
    </div>
  );
}

export default UseMemo;
