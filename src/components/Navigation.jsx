import React, { useEffect, useState } from "react";
import afyamamalogo from "../assets/images/afyamama.png";
import { Navdata } from "../assets/Data/Navdata";
import { useNavigate, useSearchParams } from "react-router-dom";
const Navigation = ({ onNavClick }) => {
  const [activeNavItem, setActiveNavItem] = useState("Intake");
  const [searchParams, setSearchParams] = useSearchParams();
  const navigation = useNavigate();
  
  const search_param = String(searchParams.get("q")).toLowerCase();

  useEffect(() => {
    setActiveNavItem(search_param);
  }, []);

  // console.log(searchParams.get('q'))

  const handleNavClick = (value) => {
    setActiveNavItem(value.name.toLowerCase());
    onNavClick(value.name);
  };
  function goHome(){
    navigation('/')
  }

  return (
    <div className="navigation">
      <div className="logo" onClick={goHome}>
        <img src={afyamamalogo} alt="logo" />
        <h2 className="title">Afya Mama</h2>
      </div>
      <div className="nav-items">
        <ul>
          {Navdata.map((value, key) => (
            <li
              key={key}
              className={`row ${
                value.name.toLowerCase() === activeNavItem.toLowerCase()
                  ? "active"
                  : ""
              }`}
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
