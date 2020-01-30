import React from "react";
import Dropdown from "./dropdownmenu/Dropdown";

export default function TopBar({ manageFoodToggle }) {
  return (
    <div className="navbar">
      Food Database Thing Practice
      <Dropdown manageFoodToggle={manageFoodToggle} />
    </div>
  );
}
