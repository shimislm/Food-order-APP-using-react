import React, { useRef } from "react";
import classes from "./FoodAddForm.module.css";
import Input from "./../../UI/Input";
const FoodAddForm = (props) => {
  const inputRef = useRef();
  const submitHandler = (e) => { 
    e.preventDefault()
  }
  return (
    <form onSubmit={submitHandler} className={classes.form}>
      <Input
        ref={inputRef}
        label="Amount"
        input={{
          id: "amount",
          type: "number",
          min: "1",
          max: "10",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button>+ Add</button>
    </form>
  );
};

export default FoodAddForm;
