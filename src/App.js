import React, { useState } from "react";
import classes from "./App.module.css";
import MyInput from "./components'/input/MyInput";
import MyCounter from "./components'/Counter/MyCounter";
import MyForm from "./components'/form/MyForm";

function App() {
  const [counter, setCounter] = useState([
    { id: 1, title: "Conter 1" },
    { id: 2, title: "Conter 2" },
    { id: 3, title: "Conter 2" },
  ]);

  const createCounter = (newCounter) => {
    setCounter([...counter, newCounter]);
  };

  const deleteCounter = (counterToDelete) => {
    setCounter(counter.filter((el) => el.id != counterToDelete.id));
  };

  return (
    <div className="App" className={classes.App}>
      <MyForm />
    </div>
  );
}

export default App;
