import React, { useState, useEffect } from "react";
import FoodSearch from "../FoodSearch";
import FoodCard from "../FoodCard";

export default function FoodDb() {
  const appId = "47418f3b";
  const appKey = "c8bff49fdb34b050968ef7b6a1ae55e5";

  const [foods, setFoods] = useState([]);
  const [url, setUrl] = useState("");

  useEffect(() => {
    handleFetch();
  }, []);

  const handleFetch = async (query = "aunt jemima") => {
    let url = `https://api.edamam.com/api/food-database/parser?ingr=${query}&app_id=${appId}&app_key=${appKey}`;
    setFoods([]);
    const res = await fetch(url);
    const data = await res.json();
    setFoods(data.hints);
    setUrl(data._links.next.href);
  };

  const handleFetchMore = async () => {
    const res = await fetch(url);
    const data = await res.json();
    const newArr = foods.concat(data.hints);
    setFoods(newArr);
    setUrl(data._links.next.href);
  };

  return (
    <div>
      <FoodSearch handleFetch={handleFetch} />
      {foods.length > 0 ? (
        foods.map(food => {
          return (
            <FoodCard
              key={food.food.foodId}
              name={food.food.label}
              nutrients={food.food.nutrients}
              brand={food.food.brand}
              category={food.food.category}
              content={food.food.foodContentsLabel}
              image={food.food.image}
            />
          );
        })
      ) : (
        <div style={{ padding: 10 }}>Loading...</div>
      )}

      <button onClick={handleFetchMore}>More</button>
    </div>
  );
}
