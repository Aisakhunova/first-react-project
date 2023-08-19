import React from "react";
import classes from "./MyInput.module.css";
import MyButton from "../button/MyButton";

const MyInput = () => {
  return (
    <div>
      <input
        className={classes.MyInput}
        type="text"
        placeHolder="Title"
      ></input>
      <MyButton>Create</MyButton>
      <MyButton>delete</MyButton>
    </div>
  );
};

export default MyInput;
