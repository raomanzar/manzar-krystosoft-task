import { useState } from "react";
import classes from "./question1.module.css";
import { Link } from "react-router-dom";

const Question1: React.FC = () => {
  const [count, setCount] = useState<number>(0);

  const handleCount = (action: "increment" | "decrement"): void => {
    action === "increment"
      ? setCount((count) => count + 1)
      : setCount((count) => count - 1);
  };

  return (
    <div className={classes.container}>
      Count is {count}
      <div className={classes.buttonBox}>
        <button onClick={() => handleCount("increment")}>Increment</button>
        <button
          disabled={count === 0}
          style={{ border: count === 0 ? "none" : undefined }}
          onClick={() => handleCount("decrement")}
        >
          Decrement
        </button>
      </div>
      <Link to="/">Go home</Link>
    </div>
  );
};

export default Question1;
