import React, { useState } from "react";
import NutritionFacts from "./NutritionFacts";
import noImg from "./assets/images/noImage.png";

export default function FoodCard({
  name,
  nutrients,
  brand,
  category,
  content,
  image
}) {
  // console.log(name);
  const [isShown, setIsShown] = useState(false);

  return (
    <div
      className="food-card"
      onMouseEnter={() => setIsShown(true)}
      onMouseLeave={() => setIsShown(false)}
    >
      <h4 className="food-name">{name}</h4>

      {image ? (
        <img className="food-image" src={image} alt={`${name} + ${category}`} />
      ) : (
        <img className="food-image" src={noImg} alt={`${name} + ${category}`} />
      )}

      {isShown ? (
        <NutritionFacts nutrients={nutrients} content={content} />
      ) : (
        ""
      )}
    </div>
  );
}
