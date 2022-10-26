import React,  {useContext} from "react";
import FoodAddForm from "./FoodAddForm";
import classes from "./FoodItem.module.css";
import CartContext from './../../../store/cartContext';

const FoodItem = (props) => {
  const price = `$${props.price.toFixed(2)}`;
  const cartContext = useContext(CartContext);

  const addItem = (amount) => { 
    cartContext.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price
    })
  }
  return (
    <li className={classes.foodItem}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div>
        <FoodAddForm addItem={addItem}/>
      </div>
    </li>
  );
};

export default FoodItem;
