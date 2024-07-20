import React, { useEffect } from "react";

const PatientCard = ({ patient, onDischarge, onSelect, isSelected }) => {
  return (
    <div
      className={`patient-card ${isSelected ? "selected" : ""}`}
      onClick={onSelect}
    >
      <div className="patient-info">
        <span className="patient-name">
          {patient.first_name} {patient.last_name}
        </span>
        <span className="patient-status">{patient.national_id}</span>
      </div>
      <div className="discharge-button" onClick={() => onDischarge(patient.id)}>
        Discharge
      </div>
    </div>
  );
};

export default PatientCard;
