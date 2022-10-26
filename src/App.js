import { useState } from "react";
import FoodMeals from "./components/FoodMeals/FoodMeals";
import Header from "./components/Layout/Header";
import Cart from "./components/Cart/Cart";
import CartProvider from './store/CartProvider';
import CartContext from './store/cartContext';

const defaultCartState={
  items:[],
  totalAmount: 0,
}

function App() {
  const [cartShow, setCartShow] = useState(false);
  // const [items , upadateItems] = 
  
  const cartShowHandler = () => {
    setCartShow(!cartShow);
  };
  return (
    <CartProvider value={CartContext}>
      {cartShow && <Cart cartShowHandler={cartShowHandler} />}
      <Header cartShowHandler={cartShowHandler} />
      <main>
        <FoodMeals />
      </main>
    </CartProvider>
  );
}

export default App;
