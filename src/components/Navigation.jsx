import React, { useState } from "react";
import afyamamalogo from "../assets/images/afyamama.png";
import { Navdata } from "../assets/Data/Navdata";
const Navigation = ({ onNavClick }) => {
  const [activeNavItem, setActiveNavItem] = useState("Intake");

  const handleNavClick = (value) => {
    setActiveNavItem(value.name);
    onNavClick(value.component);
  };

  return (
    <div className="navigation">
      <div className="logo">
        <img src={afyamamalogo} alt="logo" />
        <h2 className="title">Afya Mama</h2>
      </div>
      <div className="nav-items">
        <ul>
          {Navdata.map((value, key) => (
            <li
              key={key}
              className={`row ${value.name === activeNavItem ? "active" : ""}`}
              onClick={() => handleNavClick(value)}
            >
              {value.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navigation;
