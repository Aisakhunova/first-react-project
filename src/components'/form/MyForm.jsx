import React from "react";
import MyCounter from "../Counter/MyCounter";
import classes from "./MyForm.module.css";
import MyInput from "../input/MyInput";

const MyForm = () => {
  return (
    <form className={classes.MyForm}>
      <MyInput />
      <MyCounter />
    </form>
  );
};

export default MyForm;
