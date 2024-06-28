import React from "react";
import afyamamalogo from "../assets/images/afyamama.png";
import { Navdata } from "../assets/Data/Navdata";
const Navigation = ({ onNavClick }) => {
  return (
    <div className="navigation">
      <div className="logo">
        <img src={afyamamalogo} alt="logo" />
        <h2 className="title">Afya Mama</h2>
      </div>
      <div className="nav-items">
        <ul>{Navdata.map((value,key)=>(
            <li className="row" key={key} onClick={() => onNavClick(value.component)}>{value.name}</li>
        ))}</ul>
      </div>
    </div>
  );
};

export default Navigation;
