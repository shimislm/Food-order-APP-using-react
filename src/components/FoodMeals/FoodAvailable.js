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
  {
    id: "m5",
    name: "Italian Pizza",
    description: "Healthy...and fat...",
    price: 15.99,
  },
  {
    id: "m6",
    name: "Maroco Coscus",
    description: "Healthy...and with routes...",
    price: 40.99,
  },
  {
    id: "m7",
    name: "Meat Lazania",
    description: "Meat...and all surrunded...",
    price: 11.99,
  },
  {
    id: "m8",
    name: "Arab salat",
    description: "Healthy...and with a lot of colors...",
    price: 5.99,
  },
  {
    id: "m9",
    name: "Meat balls",
    description: "Meat...and spagheti...",
    price: 10.99,
  },
  {
    id: "m10",
    name: "Amrican Staek",
    description: "Meat...and more meat...",
    price: 22.99,
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
