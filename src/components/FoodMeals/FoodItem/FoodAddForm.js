import React, { useRef ,useState} from "react";
import classes from "./FoodAddForm.module.css";
import Input from "./../../UI/Input";

const FoodAddForm = (props) => {
  const [validAMount , setValidAmount] = useState(true)
  const inputRef = useRef();
  const submitHandler = (e) => { 
    e.preventDefault()
    const amount = inputRef.current.value;
    const amountNum = +amount;
    if(amount.trim().length === 0 || amountNum <1 || amountNum > 10){
      setValidAmount(false)
      return
    }

    props.addItem(amountNum)

  };
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
      {!validAMount && <small>Please EnterValid Amount (1-10) </small>}

    </form>
  );
};

export default FoodAddForm;
