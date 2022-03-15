import React from "react";

function Counter() {
  const [count, setCount] = React.useState(0);
  return (
    <div>
      {count}
      <button onClick={() => setCount(count + 1)}>Count +</button>
    </div>
  )
}

export default Counter;