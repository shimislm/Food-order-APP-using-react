import Model from "../UI/Model";
import React ,{useContext} from "react";
import classes from "./Cart.module.css";
import CartContext from "../../store/cartContext";

function Cart(props) {
  const cartContext = useContext(CartContext);
  const uniqeItems = Array.from(new Set(cartContext.items.map(a => a.id)))
  .map(id => {
    return cartContext.items.find(a => a.id === id)
  })
  
  console.log(uniqeItems)
  const cartItems = (
    <ul className={classes.cartItems}>
      {uniqeItems.map((item) => (
        <li key={item.id}>{item.name} - {item.amount}</li>
      ))}
    </ul>
  );
  return (
    <Model cartShowHandler={props.cartShowHandler}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount:</span>
        <span>${cartContext.totalAmount.toFixed(2)}</span>
      </div>
      <div className={classes.buttons}>
        <button
          onClick={props.cartShowHandler}
          className={classes.buttonClose}>Close</button>
        <button className={classes.buttonOrder}>Check out</button>
      </div>
    </Model>
  );
}

export default Cart;
