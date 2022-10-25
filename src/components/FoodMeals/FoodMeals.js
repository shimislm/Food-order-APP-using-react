import React, { Fragment } from "react";
import FoodAvailable from "./FoodAvailable";
import Summery from "./Summery";

const FoodMeals = () => {
  return (
    <Fragment>
      <Summery />
      <FoodAvailable />
    </Fragment>
  );
};

export default FoodMeals;
