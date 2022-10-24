import React from "react";
import Card from "../UI/Card";
import classes from "./FoodAvailable.module.css";
import FoodItem from "./FoodItem/FoodItem";
const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Sushi",
    description: "Finest fish and veggies",
    price: 22.99,
  },
  {
    id: "m2",
    name: "Schnitzel",
    description: "A german specialty!",
    price: 16.5,
  },
  {
    id: "m3",
    name: "Barbecue Burger",
    description: "American, raw, meaty",
    price: 12.99,
  },
  {
    id: "m4",
    name: "Green Bowl",
    description: "Healthy...and green...",
    price: 18.99,
  },
];
const FoodAvailable = () => {
  return (
    <section className={classes.food}>
      <Card>
        <ul className={classes.ul}>
          {DUMMY_MEALS.map((item) => {
            return (
              <FoodItem
                key={item.id}
                name={item.name}
                description={item.description}
                price={item.price}
              />
            );
          })}
        </ul>
      </Card>
    </section>
  );
};

export default FoodAvailable;
