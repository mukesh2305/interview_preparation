

// Hooks ----------------------------------
Hooks are a new addition in React 16.8.
 They let you use state and other React features 
 without writing a class.

// ------------------------------------------------------------------
import { useRef, useState, useEffect } from "react";

export default function Stopwatch() {
  const [count, setCount] = useState(0);
  const [value, setValue] = useState();
  const startHandler = () => {
    setValue(setInterval(() => setCount((c) => c + 1), 1000));
  };

  const stopHandler = () => {

    clearInterval(value);
    setValue(0);
  };

  useEffect(() => {
    return () => clearInterval(value);
  }, []);

  return (
    <div>
      <div className="timer">Timer: {count}s</div>
      <div>
        <button onClick={startHandler}>Start</button>
        <button onClick={stopHandler}>Stop</button>
      </div>
    </div>
  );
}


// useRef  --------------------------------------------------------

import { useRef, useState, useEffect } from "react";

export default function Stopwatch() {
  const [count, setCount] = useState(0);
  const [value, setValue] = useState();
  const startHandler = () => {
    setValue(setInterval(() => setCount((c) => c + 1), 1000));
  };

  const stopHandler = () => {
    clearInterval(value);
    setValue(0);
  };

  useEffect(() => {
    return () => clearInterval(value);
  }, []);

  return (
    <div>
      <div className="timer">Timer: {count}s</div>
      <div>
        <button onClick={startHandler}>Start</button>
        <button onClick={stopHandler}>Stop</button>
      </div>
    </div>
  );
}


// ----------------------------------------------------------

import { useRef } from "react";

export default function LogButtonClicks() {
  const countRef = useRef(0);

  const handle = () => {
    countRef.current++;
    console.log(`Clicked ${countRef.current} times`);
  };

  console.log("I rendered!");

  return <button onClick={handle}>Click me</button>;
}


// -------------------------
import { useState } from "react";

export default function LogButtonClicks() {
  const [count, setCount] = useState(0);

  const handle = () => {
    const updatedCount = count + 1;
    console.log(`Clicked ${updatedCount} times`);
    setCount(updatedCount);
  };

  console.log("I rendered!");

  return <button onClick={handle}>Click me</button>;
}


