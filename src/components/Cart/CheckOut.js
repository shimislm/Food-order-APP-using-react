import React, { useRef, useContext } from "react";
import CartContext from "../../store/cartContext";
import classes from "./CheckOut.module.css";

const CheckOut = (props) => {
  const cartContext = useContext(CartContext);
  const nameRef = useRef();
  const addressRef = useRef();
  const cityRef = useRef();
  const phoneRef = useRef();

  const confirmCheckOut = (e) => {
    e.preventDefault();
    props.submitOrder({
      name: nameRef.current.value,
      address: addressRef.current.value,
      city: cityRef.current.value,
      phone: phoneRef.current.value,
    });
    props.cartShowHandler(false);
  };
  return (
    <form className="m-auto" onSubmit={confirmCheckOut}>
      <div className="row">
        <div className="col-md-6">
          <div className={classes.control}>
            <label htmlFor="name">Your Name</label>
            <input type="text" id="name" ref={nameRef} />
          </div>
          <div className={classes.control}>
            <label htmlFor="address">Your address</label>
            <input type="text" id="address" ref={addressRef} />
          </div>
        </div>
        <div className="col-md-6">
          <div className={classes.control}>
            <label htmlFor="city">Your City</label>
            <input type="text" id="city" ref={cityRef} />
          </div>
          <div className={classes.control}>
            <label htmlFor="phone">Your Phone</label>
            <input type="tel" id="phone" ref={phoneRef} />
          </div>
        </div>
        <div className={classes.actions}>
          <button type="button" onClick={props.cartShowHandler}>
            Cancel
          </button>
          <button onClick={cartContext.removeAll}>Confirm</button>
        </div>
      </div>
    </form>
  );
};

export default CheckOut;
