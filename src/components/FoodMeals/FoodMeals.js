import React, { Fragment } from "react";
import FoodAvailable from "./FoodAvailable";
import Summery from "./Summery";

const FoodMeals = () => {
  return (
    <Fragment>
      <div className="container-floid p-2">
      <Summery />
      <FoodAvailable />
      </div>
    </Fragment>
  );
};

export default FoodMeals;
