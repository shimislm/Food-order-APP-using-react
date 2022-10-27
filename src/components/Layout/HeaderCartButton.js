import React ,{useContext, useEffect , useState} from "react";
import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderCartButton.module.css";
import CartContext from './../../store/cartContext';

const HeaderCartButton = (props) => {
  const cartContext = useContext(CartContext);
  const [buttonBump , setButtonBump] = useState(false)
  const numberOfItems = cartContext.items.reduce((current, item)=>{
    return current+item.amount;
  },0)
  const {items} = cartContext
  useEffect(()=>{
    if(items.length === 0){
      return;
    }
    const timer = setButtonBump(true)
    setTimeout(()=>{
      setButtonBump(false)  
    }, 300)

    return()=>{
      clearTimeout(timer)
    }
  },[items])

  const btnClasses = `${classes.button} ${buttonBump ? classes.bump : ""}`
  return (
    <button
      onClick={(props.cartShowHandler)}
      className={btnClasses}
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
