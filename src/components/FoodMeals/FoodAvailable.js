import React, { useEffect, useState } from "react";
import axios from 'axios'
import Card from "../UI/Card";
import classes from "./FoodAvailable.module.css";
import FoodItem from "./FoodItem/FoodItem";



const FoodAvailable = () => {
  const [meals, setMeals] = useState([])
  const [isLoading , setIsLoading] = useState(true)
  const [httpError, setHttpError] =useState()
  useEffect(()=>{
    const doApi = async () =>{
      
      const resp = await axios.get("https://restaurant-app-shimon-default-rtdb.europe-west1.firebasedatabase.app/meals.json")
      const data = await resp.data
      const loadedMeals = []
      
      for(const key in data){
        loadedMeals.push({
          id: key,
          name: data[key].name,
          description: data[key].description,
          price: data[key].price,
        })
      }
      setMeals(loadedMeals)
      setIsLoading(false)
    }
      doApi().catch(()=>{
        setIsLoading(false)
        setHttpError("Somthing went wrong")
      })

  },[])

  if(isLoading){{
    return <section className="mealsLoading text-center text-white">
      <h3 className="display-4">Loading....</h3>
      </section>
  }}
  if(httpError){
    return <section className="mealsLoading text-center text-danger">
    <h3 className="display-4">{httpError}</h3>
    </section>
  }

  return (
    <div className="container-fluid m-0 p-0">
    <div className="container">
    <section className={classes.food}>
      <Card>
        <ul className={classes.ul}>
          {meals.map((item) => {
            return (
              <FoodItem
                key={item.id}
                id={item.id}
                name={item.name}
                description={item.description}
                price={item.price}
              />
            );
          })}
        </ul>
      </Card>
    </section>
    </div>
    </div>
  );
};

export default FoodAvailable;
