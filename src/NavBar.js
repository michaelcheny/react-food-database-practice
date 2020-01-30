import React from "react";
import Dropdown from "./dropdownmenu/Dropdown";
import { Link } from "react-router-dom";

export default function NavBar({ manageFoodToggle }) {
  return (
    <nav>
      <Link className="nav-routes" to="/">
        <h3>Food Database Thing Practice</h3>
      </Link>
      <ul className="nav-links">
        <Link className="nav-routes" to="/foodsearch">
          <li>Food Search</li>
        </Link>

        <Link className="nav-routes" to="/calculators">
          <li>Calculator</li>
        </Link>
      </ul>
      {/* <Dropdown manageFoodToggle={manageFoodToggle} /> */}
    </nav>
  );
}
