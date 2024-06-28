import React, { useState } from "react";
import "../styles/dashboard.css";
import Navigation from "../components/Navigation";
import DisplayArea from "../components/DisplayArea";
import Intake from "../components/Dashboard/Intake";

const Dashboard = () => {
  const [selectedComponent, setSelectedComponent] = useState(null);

  const handleNavigationClick = (component) => {
    setSelectedComponent(component);
  };

  return (
    <div className="dashboard">
      <Navigation onNavClick={handleNavigationClick} />
      <DisplayArea selectedComponent={selectedComponent || <Intake />} />
    </div>
  );
};

export default Dashboard;
