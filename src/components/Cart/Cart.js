import Model from "../UI/Model";
import axios from "axios"
import React, { useContext, useState } from "react";
import classes from "./Cart.module.css";
import CartContext from "../../store/cartContext";
import CartItem from "./CartItem";
import CheckOut from "./CheckOut";

function Cart(props) {
  const [checkedOut, setIsCheckOut] = useState(false);
  const cartContext = useContext(CartContext);

  const totalAmount = cartContext.totalAmount.toFixed(2);
  const hasItems = cartContext.items.length > 0;

  const cartItemRemove = (id) => {
    cartContext.removeItem(id);
  };
  const cartItemAdd = (item) => {
    cartContext.addItem({ ...item, amount: 1 });
  };
  const checkOut = () => {
    setIsCheckOut(!checkedOut);
  };

  const submitOrder = (userData) => {
    axios.post("https://restaurant-app-shimon-default-rtdb.europe-west1.firebasedatabase.app/orders.json" ,JSON.stringify({userData,  cart:cartContext })).catch((err)=>console.log(err))
  };

  const cartItems = (
    <ul className={classes.cartItems}>
      {cartContext.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          cartItemAdd={cartItemAdd.bind(null, item)}
          cartItemRemove={cartItemRemove.bind(null, item.id)}
        ></CartItem>
      ))}
    </ul>
  );
  return (
    <Model cartShowHandler={props.cartShowHandler}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount:</span>
        <span>${totalAmount}</span>
      </div>
      {checkedOut && (
        <CheckOut
          submitOrder={submitOrder}
          setIsCheckOut={setIsCheckOut}
          cartShowHandler={props.cartShowHandler}
        />
      )}
      {!checkedOut && (
        <div className={classes.buttons}>
          <button
            onClick={props.cartShowHandler}
            className={classes.buttonClose}
          >
            Close
          </button>
          {hasItems && (
            <button className={classes.buttonOrder} onClick={checkOut}>
              Check out
            </button>
          )}
        </div>
      )}
    </Model>
  );
}

export default Cart;
