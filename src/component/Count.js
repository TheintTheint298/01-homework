import React, { useCallback, useState } from "react";

const Button = React.memo(({ handleClick, children }) => {
  console.log(`${children}`);
  return (
    <button onClick={handleClick} style={{ margin: "10px" }}>
      {children}
    </button>
  );
});

export default function Count() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  const increment = useCallback(() => {
    setCount((prev) => prev + 1);
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Count: {count}</h1>

      <Button handleClick={increment}>Add Count</Button>
      <hr />

      <input
        type="text"
        placeholder="Type something..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <p>Typing: {text}</p>
    </div>
  );
}
