import React from "react";
import FoodDb from "./container/FoodDb";
import TopBar from "./TopBar";

import "./App.css";

export default function App() {
  return (
    <div className="App">
      <TopBar />
      <FoodDb />
    </div>
  );
}
