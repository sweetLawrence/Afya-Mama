import React from "react";
import "../../styles/labresults.css";

const LabResults = () => {
  return (
    <div className="labresults">
      <div className="title">Lab Results:</div>
      <div className="all-results">
        <div className="results">
          <div className="name">Blood Pressure</div>
          <div className="value">120/80mmHg</div>
        </div>
        <div className="results">
          <div className="name">Hemoglobin</div>
          <div className="value">12.5 g/dl</div>
        </div>
        <div className="results">
          <div className="name">OGTT</div>
          <div className="value">6.0 mmol/l</div>
        </div>

      </div>
    </div>
  );
};

export default LabResults;
