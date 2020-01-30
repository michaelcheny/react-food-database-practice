import React, { useState } from "react";

export default function Dropdown({ manageFoodToggle }) {
  const [displayMenu, setDisplayMenu] = useState(false);

  const showDropdownMenu = event => {
    setDisplayMenu(!displayMenu);
    // document.addEventListener("click", hideDropdownMenu);
  };

  const manageClick = event => {
    event.preventDefault();
    console.log(manageFoodToggle);
    // manageFoodToggle(!manageFoodToggle);
    manageFoodToggle(prev => !prev);
  };

  return (
    <div className="dropdown" style={{ background: "gray", width: "100px" }}>
      <div className="button" onClick={showDropdownMenu}>
        hello
      </div>

      {displayMenu ? (
        <ul>
          <li>
            <a className="active" href="calculate-bmi" onClick={manageClick}>
              Calculate BMI
            </a>
          </li>
          <li>
            <a href="#Manage Pages">Calculte TDEE</a>
          </li>
        </ul>
      ) : null}
    </div>
  );
}
