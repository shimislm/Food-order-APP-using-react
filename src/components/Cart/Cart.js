import Model from "../UI/Model";
import React from "react";
import classes from "./Cart.module.css";

function Cart(props) {
  const cartItems = (
    <ul className={classes.cartItems}>
      {[
        { id: "c1", name: "Sushi", amount: 2, price: 12.99 },
        { id: "c2", name: "Lazania", amount: 2, price: 12.99 },
      ].map((item) => (
        <li key={item.id}>{item.name}</li>
      ))}
    </ul>
  );
  return (
    <Model cartShowHandler={props.cartShowHandler}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount:</span>
        <span>22.99</span>
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
