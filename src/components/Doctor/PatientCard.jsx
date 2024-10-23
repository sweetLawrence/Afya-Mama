import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import calculateGestationalAgeAndTrimester from "../../utils/calculate";

const PatientCard = ({
  patient,
  onDischarge,
  onSelect,
  onSendToLab,
  isSelected,
  labStatus,
  loading
}) => {
  // console.log(patient);

  const navigate = useNavigate();


  // function fetchPatientHistory() {
  //   // Open a new tab with patient ID as a query parameter
  //   const patientHistoryUrl = `/patient-history?patientId=${patient.id}`;
  //   window.open(patientHistoryUrl, '_blank'); // Opens in a new tab
  // }

  function fetchPatientHistory() {
    // Open a new tab with patient ID, first name, and last name as query parameters
    const patientHistoryUrl = `/patient-history?patientId=${patient.id}&firstName=${patient.first_name}&lastName=${patient.last_name}`;
    window.open(patientHistoryUrl, "_blank"); // Opens in a new tab
  }

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
        <span className="view-history" onClick={fetchPatientHistory}>
          View History
        </span>
      </div>
      <div className="action-buttons">
        <div
          className="discharge-button d-btn"
          onClick={() => onDischarge(patient.id)}
        >
          Discharge
        </div>

        <div
          className="discharge-button send-to-lab"
          style={{ background: patient.status === "in_lab" ? "red" : " " }}
          onClick={(e) => {
            e.stopPropagation();
            onSendToLab(patient.id);
          }}
        >
          {/* Send to Lab */}
          {/* {patient.status === "in_lab" ? "Lab Stage" : "Send to Lab"} */}
          {loading ? (
            <Spinner /> // Render spinner when loading
          ) : (
            patient.status === "in_lab" ? "Lab Stage" : "Send to Lab"
          )}
        </div>
      </div>
    </div>
  );
};

export default PatientCard;
