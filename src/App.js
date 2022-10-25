import { Fragment, useState } from "react";
import FoodMeals from "./components/FoodMeals/FoodMeals";
import Header from "./components/Layout/Header";
import Cart from "./components/Cart/Cart";
import CartProvider from './store/CartProvider';
import CartContext from './store/cartContext';
import { AppContext } from './context/context';

function App() {
  const [cartShow, setCartShow] = useState(false);

  const cartShowHandler = () => {
    setCartShow(!cartShow);
  };
  return (
    <AppContext.Provider value={CartContext}>
      {cartShow && <Cart cartShowHandler={cartShowHandler} />}
      <Header cartShowHandler={cartShowHandler} />
      <main>
        <FoodMeals />
      </main>
    </AppContext.Provider>
  );
}

export default App;
