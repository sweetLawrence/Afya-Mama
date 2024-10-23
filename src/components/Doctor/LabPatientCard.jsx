// import React, { useEffect } from "react";

// const LabPatientCard = ({ patient, onDischarge, onSelect, isSelected }) => {
//   return (
//     <div
//       className={`patient-card ${isSelected ? "selected" : ""}`}
//       onClick={onSelect}
//     >
//       <div className="patient-info">
//         <span className="patient-name">
//           {patient.firstName} {patient.lastName}
//         </span>
//         <span className="patient-status">{patient.national_id}</span>
//       </div>
//       <div
//         className="discharge-button"
//         onClick={(e) => {
//           e.stopPropagation();
//           onDischarge(patient.id);
//         }}
//       >
//         Clear
//       </div>
//     </div>
//   );
// };

// export default LabPatientCard;





import React from "react";
import axiosInstance from "../../utils/axios";

const LabPatientCard = ({ patient, onDischarge, onSelect, isSelected }) => {

  const clearFromLab = async (patientId) => {
    try {
      // Make a PUT request to clear the patient from the lab
      await axiosInstance.put(`/patients/clear/${patientId}`);
      // Optionally call onDischarge or refresh the patient list here if needed
      onDischarge(patientId); // Remove the patient from the list in the parent component
    } catch (error) {
      console.error("Error clearing patient from lab:", error);
      // You may want to show a toast notification or alert to the user here
    }
  };

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
      <div
        className="discharge-button"
        onClick={(e) => {
          e.stopPropagation(); // Prevent triggering onSelect when clicking discharge
          
          clearFromLab(patient.id)
        }}
      >
        Clear
      </div>
    </div>
  );
};

export default LabPatientCard;



















// const LabPatientCard = ({ patient, onSelect, isSelected, onDischarge, inputValues, onInputChange, onSubmit }) => {
//   return (
//     <div className={`patient-card ${isSelected ? 'selected' : ''}`}>
//       <h4>{patient.name}</h4>
//       {/* Your other patient details here */}
//       <input
//         type="text"
//         value={inputValues.someField || ''} // Replace 'someField' with your actual field name
//         onChange={(e) => onInputChange(patient.id, 'someField', e.target.value)} // Handle change
//       />
//       <button onClick={() => onSubmit(patient.id)}>Submit</button>
//       <button onClick={() => onDischarge(patient.id)}>Discharge</button>
//     </div>
//   );
// };


// export default LabPatientCard