import React, { useEffect, useState } from 'react';
import "./LiveCounter.css";

export default function LiveCounter() {
  const [time, setTime] = useState(new Date().toLocaleTimeString());
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
      setCount((prev) => prev + 1);
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);
  return (
    <div className="container">
      <h1>Live Counter</h1>
      <p>It's: {time}</p>
      <p>The value of the increment: {count}</p>
    </div>
  );
}
