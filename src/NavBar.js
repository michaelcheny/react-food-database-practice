import React from "react";
import Dropdown from "./dropdownmenu/Dropdown";

export default function NavBar({ manageFoodToggle }) {
  return (
    <nav>
      <h3>
        <a className="nav-routes" href="/">
          Food Database Thing Practice
        </a>
      </h3>
      <ul className="nav-links">
        <li>
          <a className="nav-routes" href="/foodsearch">
            Food Search
          </a>
        </li>
        <li>Calculator</li>
      </ul>
      {/* <Dropdown manageFoodToggle={manageFoodToggle} /> */}
    </nav>
  );
}
