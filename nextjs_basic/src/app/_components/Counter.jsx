"use client";

import { useState } from "react";

export default function Counter({ count: countInit }) {
  console.log("Counter");
  const [count, setCount] = useState(countInit);

  return (
    <div className="max-w-1/2 mx-auto">
      <h2>Count: {count}</h2>
      <button
        className="px-3 py-1 bg-green-700"
        onClick={() => setCount(count + 1)}
      >
        +
      </button>
    </div>
  );
}
