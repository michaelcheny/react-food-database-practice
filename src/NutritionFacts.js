import React from "react";

export default function NutritionFacts({ nutrients }) {
  return (
    <div>
      <p>
        {nutrients.ENERC_KCAL
          ? `Calories: ${Math.round(nutrients.ENERC_KCAL)}`
          : ""}
      </p>
      <p>{nutrients.FAT ? `Fats: ${Math.round(nutrients.FAT)}` : ""}</p>
      <p>
        {nutrients.PROCNT ? `Proteins: ${Math.round(nutrients.PROCNT)}` : ""}
      </p>
      <p>{nutrients.CHOCDF ? `Carbs: ${Math.round(nutrients.CHOCDF)}` : ""}</p>
    </div>
  );
}
