import React, { useState } from "react";
import classes from "./MyCounter.module.css";
import MyButton from "../button/MyButton";

const MyCounter = (props) => {
  const [count, setCount] = useState(0);
  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

  return (
    <div className={classes.MyCounter}>
      <h1>{props.title}</h1>
      <h2 style={{ textAlign: "center " }}>{count}</h2>
      <div className="buttons">
        <MyButton onClick={decrement}>-1</MyButton>
        <MyButton onClick={increment}>+1</MyButton>
        <MyButton style={{ backgroundColor: "darkred" }}>Delete</MyButton>
      </div>
    </div>
  );
};

export default MyCounter;
