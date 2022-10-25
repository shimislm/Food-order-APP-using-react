import { Fragment, useState } from "react";
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
    <Fragment>
      {cartShow && <Cart cartShowHandler={cartShowHandler} />}
      <Header cartShowHandler={cartShowHandler} />
      <main>
        <FoodMeals />
      </main>
    </Fragment>
  );
}

export default App;
