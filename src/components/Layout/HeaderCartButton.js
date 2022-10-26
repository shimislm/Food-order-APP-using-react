import React ,{useContext} from "react";
import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderCartButton.module.css";
import CartContext from './../../store/cartContext';

const HeaderCartButton = (props) => {
  const cartContext = useContext(CartContext);

  const numberOfItems = cartContext.items.reduce((current, item)=>{
    return current+item.amount;
  },0)
  return (
    <button
      onClick={(props.cartShowHandler)}
      className={classes.button}
    >
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>My Cart</span>
      <span className={classes.badge}>{numberOfItems}</span>
    </button>
  );
};

export default HeaderCartButton;
