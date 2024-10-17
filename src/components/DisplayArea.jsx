import React from "react";
import "../styles/dashboard.css";
import Intake from "./Dashboard/Intake";
import History from "./Dashboard/History";
import { useSearchParams } from "react-router-dom";

const DisplayArea = ({ selectedComponent }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const q = String(searchParams.get("q")).toLowerCase();

  const Items = {
    intake: <Intake />,
    // history: <History />
  }

  return <div className="display-area">
    {Items[q]}
  </div>;
};

export default DisplayArea;
