import {Fragment} from "react";
import FoodMeals from "./components/FoodMeals/FoodMeals";
import Header from "./components/Layout/Header";

function App() {
  return (
    <Fragment>
      <Header/>
      <main>
        <FoodMeals/>
      </main>
    </Fragment>
  );
}

export default App;
