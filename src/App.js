import React, { useState } from "react";
import FoodDb from "./container/FoodDb";
import TopBar from "./TopBar";

import "./App.css";

export default function App() {
  const [toggleFood, setToggleFood] = useState(true);

  const toggleFoodDb = () => {
    setToggleFood(!toggleFood);
  };

  return (
    <div className="App">
      <TopBar manageFoodToggle={toggleFoodDb} />

      {toggleFood ? <FoodDb /> : null}
    </div>
  );
}
