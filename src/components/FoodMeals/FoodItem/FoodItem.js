import React from "react";
import classes from "./FoodItem.module.css";

const FoodItem = (props) => {
    const price = `$${props.price.toFixed(2)}`
  return (
    <li className={classes.foodItem}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div>

      </div>
    </li>
  );
};

export default FoodItem;
