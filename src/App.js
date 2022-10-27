import { useState } from "react";
import FoodMeals from "./components/FoodMeals/FoodMeals";
import Header from "./components/Layout/Header";
import Cart from "./components/Cart/Cart";
import CartProvider from './store/CartProvider';
import CartContext from './store/cartContext';


function App() {
  const [cartShow, setCartShow] = useState(false);
  
  const cartShowHandler = () => {
    setCartShow(!cartShow);
  };
  return (
    <CartProvider value={CartContext}>
      {cartShow && <Cart cartShowHandler={cartShowHandler} />}
      <Header cartShowHandler={cartShowHandler} />
      <h2>{}</h2>
      <main>
        <FoodMeals />
      </main>
    </CartProvider>
  );
}

export default App;
