import React, { useEffect, useState } from "react";
import "../../styles/dashboard.css";
import Navigation from "../../components/Navigation";
import DisplayArea from "../../components/DisplayArea";
import Intake from "../../components/Dashboard/Intake";
import { useSearchParams } from "react-router-dom";

const Dashboard = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const queryComponent = searchParams.get("q") || "intake";
  const [selectedComponent, setSelectedComponent] = useState(queryComponent);
  const selected = 'Intake'

  const handleNavigationClick = (component) => {
    // setSearchParams({ q: component });
    // setSelectedComponent(component)

    setSearchParams({ q: component.toLowerCase() });
    setSelectedComponent(component.toLowerCase());
  };

  useEffect(() => {
    setSearchParams({ q: selectedComponent.toLowerCase() });
  }, [selectedComponent]);

  return (
    <div className="dashboard">
      <Navigation onNavClick={handleNavigationClick} />
      <DisplayArea />
      {/* selectedComponent={selectedComponent}  */}
    </div>
  );
};

export default Dashboard;
