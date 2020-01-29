import React from "react";

export default function NutritionFacts({ nutrients, content }) {
  return (
    <div className="card-back">
      <p>
        <strong>Macros: </strong>
        <br />
        {/* </p> */}
        {/* <p> */}
        {nutrients.ENERC_KCAL
          ? `Calories: ${Math.round(nutrients.ENERC_KCAL)}`
          : ""}{" "}
        <br />
        {/* </p> */}
        {/* <p> */}
        {nutrients.FAT ? `Fats: ${Math.round(nutrients.FAT)}` : ""} <br />
        {/* </p> */}
        {/* <p> */}
        {nutrients.PROCNT ? `Proteins: ${Math.round(nutrients.PROCNT)}` : ""}
        <br />
        {/* </p> */}
        {/* <p> */}
        {nutrients.CHOCDF ? `Carbs: ${Math.round(nutrients.CHOCDF)}` : ""}
      </p>
      <p>
        <strong>Content:</strong>
        <br />
        {content}
      </p>
    </div>
  );
}
